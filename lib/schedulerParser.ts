// CPOS: Primavera (XER), Microsoft Project (XML) and Flexible CSV Parser
// This parser parses project schedules and maps them directly to the CPOS sow_items schema.

export type ParsedSowItem = {
  sow_number: string
  hierarchy_level: 1 | 2 | 3
  scope_l1?: string
  item_l2?: string
  sub_item_l3?: string
  particulars?: string
  assigned_to?: string
  baseline_start?: string
  baseline_days?: number
  baseline_end?: string
  planned_start?: string
  planned_days?: number
  planned_end?: string
  actual_start?: string
  actual_days?: number
  actual_end?: string
  percent_complete?: number
  unit?: string
  quantity?: number
  waste_pct?: number
  net_qty?: number
  unit_rate?: number
  boq_amount?: number
  estimated_cost?: number
  actual_cost?: number
  risk_level?: 'Low' | 'Medium' | 'High' | 'Critical'
  status?: 'Not Started' | 'In Progress' | 'Complete' | 'On Hold' | 'Delayed'
  dep_on?: string
  dep_type?: 'FS' | 'SF' | 'SS' | 'FF'
  is_critical_path?: boolean
  notes?: string
  plant?: string
  site_equipment?: string
  manpower?: string
}

// Helper to parse days between two dates
function getDaysBetween(d1: string | undefined, d2: string | undefined): number | undefined {
  if (!d1 || !d2) return undefined
  const time = new Date(d2).getTime() - new Date(d1).getTime()
  if (isNaN(time)) return undefined
  const d = Math.round(time / (1000 * 60 * 60 * 24))
  return d > 0 ? d : 1
}

// ─────────────────────────────────────────────────────────────────────────────
// 1. PRIMAVERA P6 XER PARSER
// ─────────────────────────────────────────────────────────────────────────────
export function parseXERToSow(xerContent: string): ParsedSowItem[] {
  const lines = xerContent.split(/\r?\n/)
  const tables: Record<string, { fields: string[], records: string[][] }> = {}
  
  let currentTable = ''
  let currentFields: string[] = []
  
  for (const line of lines) {
    if (line.startsWith('%T')) {
      currentTable = line.substring(3).trim()
      tables[currentTable] = { fields: [], records: [] }
    } else if (line.startsWith('%F')) {
      currentFields = line.substring(3).trim().split('\t')
      if (tables[currentTable]) {
        tables[currentTable].fields = currentFields
      }
    } else if (line.startsWith('%R')) {
      const record = line.substring(3).trim().split('\t')
      if (tables[currentTable]) {
        tables[currentTable].records.push(record)
      }
    }
  }

  const helper = (tableName: string) => {
    const t = tables[tableName]
    if (!t) return []
    return t.records.map(rec => {
      const entry: Record<string, string> = {}
      t.fields.forEach((f, idx) => {
        entry[f] = rec[idx] || ''
      })
      return entry
    })
  }

  // Parse WBS levels
  const rawWBS = helper('PROJWBS')
  // Parse Activities (tasks)
  const rawTasks = helper('TASK')
  // Parse Predecessors
  const rawDeps = helper('TASKPRED')

  // Create lookups
  const wbsMap = new Map<string, typeof rawWBS[0]>()
  rawWBS.forEach(w => wbsMap.set(w.wbs_id, w))

  // Find root and build hierarchy path for each WBS
  const getWBSPath = (wbsId: string): string[] => {
    const path: string[] = []
    let curr = wbsMap.get(wbsId)
    while (curr) {
      if (curr.wbs_name && curr.wbs_short_name !== curr.wbs_name) {
        path.unshift(curr.wbs_name)
      }
      curr = curr.parent_wbs_id ? wbsMap.get(curr.parent_wbs_id) : undefined
    }
    return path
  }

  // Predecessor lookup
  const depsByTaskId = new Map<string, typeof rawDeps[0][]>()
  rawDeps.forEach(d => {
    const list = depsByTaskId.get(d.task_id) || []
    list.push(d)
    depsByTaskId.set(d.task_id, list)
  })

  // Task code maps to easily resolve predecessor task codes
  const taskIdToCode = new Map<string, string>()
  rawTasks.forEach(t => taskIdToCode.set(t.task_id, t.task_code))

  const items: ParsedSowItem[] = []

  // Create Level 1 and Level 2 groups from WBS pathways or task codes
  const seenL1 = new Set<string>()
  const seenL2 = new Set<string>()

  rawTasks.forEach((t, idx) => {
    const wbsPath = getWBSPath(t.wbs_id)
    const l1Name = wbsPath[0] || 'Scope Works'
    let l2Name = wbsPath[1] || 'General Mobilization'
    const l3Name = t.task_name || 'Activity'

    // Deduplicate/normalize path names
    if (l1Name === l2Name) {
      l2Name = 'General Phase'
    }

    // Determine structural numbers
    // Let's check if the activity task_code itself has a hierarchical format, like '1.1.1'
    let sowNum = t.task_code || ''
    const dotCount = sowNum.split('.').length - 1

    let l1Num = ''
    let l2Num = ''
    let l3Num = sowNum

    if (dotCount >= 2) {
      const parts = sowNum.split('.')
      l1Num = parts[0]
      l2Num = `${parts[0]}.${parts[1]}`
    } else {
      // Create artificial hierarchy if code is flat (e.g., A1010)
      const index = idx + 1
      l1Num = '1'
      l2Num = '1.1'
      l3Num = `1.1.${index}`
    }

    // Insert structural L1 if not seen yet
    if (!seenL1.has(l1Num)) {
      seenL1.add(l1Num)
      items.push({
        sow_number: l1Num,
        hierarchy_level: 1,
        scope_l1: l1Name,
        status: 'In Progress'
      })
    }

    // Insert structural L2 if not seen yet
    if (!seenL2.has(l2Num)) {
      seenL2.add(l2Num)
      items.push({
        sow_number: l2Num,
        hierarchy_level: 2,
        scope_l1: l1Name,
        item_l2: l2Name,
        status: 'In Progress'
      })
    }

    // Status map
    let status: ParsedSowItem['status'] = 'Not Started'
    if (t.status_code === 'TK_Active') status = 'In Progress'
    if (t.status_code === 'TK_Complete') status = 'Complete'

    // Percent complete
    const pct = parseFloat(t.phys_pct || t.act_work_qty || '0') || 0

    // Dates
    const targetStart = t.target_start_date ? t.target_start_date.split(' ')[0] : undefined
    const targetEnd = t.target_end_date ? t.target_end_date.split(' ')[0] : undefined
    const actStart = t.act_start_date ? t.act_start_date.split(' ')[0] : undefined
    const actEnd = t.act_end_date ? t.act_end_date.split(' ')[0] : undefined

    // Total Float telling us if critical pathway
    const totalFloat = parseFloat(t.total_float_hr_cnt || '999')
    const isCritical = totalFloat <= 0

    // Find predecessors
    const taskDeps = depsByTaskId.get(t.task_id) || []
    let depOnStr = ''
    let depTypeStr: ParsedSowItem['dep_type'] = 'FS'

    if (taskDeps.length > 0) {
      // Map first predecessor to sow relational structure
      const primaryDep = taskDeps[0]
      const predCode = taskIdToCode.get(primaryDep.pred_task_id)
      if (predCode) {
        depOnStr = predCode
        if (primaryDep.pred_type === 'PR_FF') depTypeStr = 'FF'
        else if (primaryDep.pred_type === 'PR_SS') depTypeStr = 'SS'
        else if (primaryDep.pred_type === 'PR_SF') depTypeStr = 'SF'
        else depTypeStr = 'FS'
      }
    }

    // Assembly L3 Task
    items.push({
      sow_number: l3Num,
      hierarchy_level: 3,
      scope_l1: l1Name,
      item_l2: l2Name,
      sub_item_l3: l3Name,
      particulars: t.task_code || undefined,
      planned_start: targetStart,
      planned_days: getDaysBetween(targetStart, targetEnd),
      planned_end: targetEnd,
      baseline_start: targetStart,
      baseline_days: getDaysBetween(targetStart, targetEnd),
      baseline_end: targetEnd,
      actual_start: actStart,
      actual_days: getDaysBetween(actStart, actEnd),
      actual_end: actEnd,
      percent_complete: pct,
      status,
      is_critical_path: isCritical,
      dep_on: depOnStr || undefined,
      dep_type: depTypeStr,
      risk_level: isCritical ? 'High' : 'Low',
      notes: t.task_code ? `Primavera ActID: ${t.task_code}` : undefined
    })
  })

  // Sort overall items by sow_number hierarchy
  return items.sort((a, b) => a.sow_number.localeCompare(b.sow_number, undefined, { numeric: true, sensitivity: 'base' }))
}


// ─────────────────────────────────────────────────────────────────────────────
// 2. MICROSOFT PROJECT XML PARSER
// ─────────────────────────────────────────────────────────────────────────────
export function parseMSPXmlToSow(xmlContent: string): ParsedSowItem[] {
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(xmlContent, 'text/xml')
  
  const taskNodes = xmlDoc.getElementsByTagName('Task')
  const uidToCodeMap = new Map<string, string>()
  const items: ParsedSowItem[] = []

  const rawTasks: Array<{
    uid: string
    id: string
    name: string
    outlineLevel: number
    outlineNumber: string
    start: string
    finish: string
    percentComplete: number
    critical: boolean
    notes: string
    predecessors: Array<{ predUid: string, type: 'FS' | 'SF' | 'SS' | 'FF' }>
  }> = []

  // First pass: Read basic task identities
  for (let i = 0; i < taskNodes.length; i++) {
    const node = taskNodes[i]
    const uid = node.getElementsByTagName('UID')[0]?.textContent || ''
    const id = node.getElementsByTagName('ID')[0]?.textContent || ''
    const name = node.getElementsByTagName('Name')[0]?.textContent || ''
    const outlineLevel = parseInt(node.getElementsByTagName('OutlineLevel')[0]?.textContent || '1')
    const outlineNumber = node.getElementsByTagName('OutlineNumber')[0]?.textContent || ''
    const start = node.getElementsByTagName('Start')[0]?.textContent?.substring(0, 10) || ''
    const finish = node.getElementsByTagName('Finish')[0]?.textContent?.substring(0, 10) || ''
    const pct = parseFloat(node.getElementsByTagName('PercentComplete')[0]?.textContent || '0')
    const critical = node.getElementsByTagName('Critical')[0]?.textContent === '1' || node.getElementsByTagName('Critical')[0]?.textContent === 'true'
    const notes = node.getElementsByTagName('Notes')[0]?.textContent || ''

    if (!outlineNumber || !name) continue // Skip empty header or configuration entries

    // Save UID mappings
    uidToCodeMap.set(uid, outlineNumber)

    // Predecessor links
    const preds: typeof rawTasks[0]['predecessors'] = []
    const predNodes = node.getElementsByTagName('PredecessorLink')
    for (let p = 0; p < predNodes.length; p++) {
      const pNode = predNodes[p]
      const predUid = pNode.getElementsByTagName('PredecessorUID')[0]?.textContent || ''
      const typeNum = pNode.getElementsByTagName('Type')[0]?.textContent || '1'
      
      let type: 'FS' | 'SF' | 'SS' | 'FF' = 'FS'
      if (typeNum === '0') type = 'FF'
      else if (typeNum === '2') type = 'SS'
      else if (typeNum === '3') type = 'SF'

      preds.push({ predUid, type })
    }

    rawTasks.push({
      uid, id, name, outlineLevel, outlineNumber, start, finish, percentComplete: pct, critical, notes, predecessors: preds
    })
  }

  // Second pass: Map hierarchical pathways and assemble SOW models
  rawTasks.forEach((t) => {
    // Determine ancestors
    const outlineParts = t.outlineNumber.split('.')
    const hierarchyLevel = outlineParts.length
    const level: 1 | 2 | 3 = hierarchyLevel >= 3 ? 3 : (hierarchyLevel === 2 ? 2 : 1)

    // Find parent names
    let scopeL1 = ''
    let itemL2 = ''
    let subItemL3 = ''

    if (level === 1) {
      scopeL1 = t.name
    } else if (level === 2) {
      const parentNum = outlineParts[0]
      const parentTask = rawTasks.find(rt => rt.outlineNumber === parentNum)
      scopeL1 = parentTask?.name || 'General Operations'
      itemL2 = t.name
    } else {
      const l1Num = outlineParts[0]
      const l2Num = `${outlineParts[0]}.${outlineParts[1]}`
      const l1Parent = rawTasks.find(rt => rt.outlineNumber === l1Num)
      const l2Parent = rawTasks.find(rt => rt.outlineNumber === l2Num)
      scopeL1 = l1Parent?.name || 'General Operations'
      itemL2 = l2Parent?.name || 'Sub Work Package'
      subItemL3 = t.name
    }

    // Status mapping
    let status: ParsedSowItem['status'] = 'Not Started'
    if (t.percentComplete > 0 && t.percentComplete < 100) status = 'In Progress'
    if (t.percentComplete === 100) status = 'Complete'

    // Compute predecessor relation
    let depOn = ''
    let depType: ParsedSowItem['dep_type'] = 'FS'
    if (t.predecessors.length > 0) {
      const primary = t.predecessors[0]
      const predCode = uidToCodeMap.get(primary.predUid)
      if (predCode) {
        depOn = predCode
        depType = primary.type
      }
    }

    const calculatedDays = getDaysBetween(t.start, t.finish) || 1

    items.push({
      sow_number: t.outlineNumber,
      hierarchy_level: level,
      scope_l1: scopeL1 || undefined,
      item_l2: itemL2 || undefined,
      sub_item_l3: subItemL3 || undefined,
      particulars: t.notes || undefined,
      planned_start: t.start || undefined,
      planned_days: calculatedDays,
      planned_end: t.finish || undefined,
      baseline_start: t.start || undefined,
      baseline_days: calculatedDays,
      baseline_end: t.finish || undefined,
      percent_complete: t.percentComplete,
      status,
      is_critical_path: t.critical,
      dep_on: depOn || undefined,
      dep_type: depType,
      risk_level: t.critical ? 'High' : 'Low',
      notes: t.notes ? `MSP UID: ${t.uid}. ${t.notes}` : `MSP UID: ${t.uid}`
    })
  })

  // Sort overall items by WBS outline ordering
  return items.sort((a, b) => a.sow_number.localeCompare(b.sow_number, undefined, { numeric: true, sensitivity: 'base' }))
}


// ─────────────────────────────────────────────────────────────────────────────
// 3. FLEXIBLE CSV ROW PARSER
// ─────────────────────────────────────────────────────────────────────────────
export function parseCSVToSow(rows: Record<string, unknown>[], headers: Set<string>): ParsedSowItem[] {
  // Common visual maps
  const pick = (r: Record<string, unknown>, keys: string[]): unknown => {
    for (const k of keys) {
      const v = r[k]
      if (v !== undefined && v !== null && v !== '') return v
    }
    return undefined
  }

  const num = (v: unknown): number | undefined => {
    if (v === null || v === undefined || v === '') return undefined
    const n = typeof v === 'number' ? v : Number(String(v).replace(/,/g, ''))
    return Number.isFinite(n) ? n : undefined
  }

  const parseDate = (v: unknown): string | undefined => {
    if (!v) return undefined
    const d = new Date(String(v).trim())
    return isNaN(d.getTime()) ? undefined : d.toISOString().split('T')[0]
  }

  const pct = (v: unknown): number | undefined => {
    const n = num(typeof v === 'string' ? v.replace(/%/g, '') : v)
    if (n === undefined) return undefined
    return n > 0 && n <= 1 ? n * 100 : Math.max(0, Math.min(100, n))
  }

  // Normalize status options
  const normStatus = (raw: unknown): ParsedSowItem['status'] => {
    const s = String(raw ?? '').trim().toLowerCase()
    if (!s) return 'Not Started'
    if (s === 'complete' || s === 'completed' || s === 'done') return 'Complete'
    if (s.includes('progress') || s === 'active' || s === 'started') return 'In Progress'
    if (s.includes('hold') || s.includes('pause')) return 'On Hold'
    if (s.includes('delay') || s.includes('behind')) return 'Delayed'
    return 'Not Started'
  }

  const items: ParsedSowItem[] = []

  rows.forEach((r) => {
    const sowNumber = String(pick(r, ['SOW #', 'Serial', 'SOW Number', 'WBS', 'OutlineNumber']) ?? '').trim()
    if (!sowNumber || sowNumber.toUpperCase() === 'TOTALS') return

    const scopeL1 = String(pick(r, ['Scope (L1)', 'Scope', 'L1', 'L1 Scope']) ?? '').trim()
    const itemL2 = String(pick(r, ['Item (L2)', 'Item', 'L2', 'L2 Item']) ?? '').trim()
    const subItemL3 = String(pick(r, ['Sub Item (L3)', 'Sub Item', 'L3', 'L3 Sub Item']) ?? '').trim()
    const particulars = String(pick(r, ['Particulars / Spec', 'Particulars', 'Spec', 'Description']) ?? '').trim()

    const hierarchyParts = sowNumber.split('.').length
    const level: 1 | 2 | 3 = hierarchyParts >= 3 ? 3 : (hierarchyParts === 2 ? 2 : 1)

    const plStart = parseDate(pick(r, ['Planned Start', 'Start', 'PlannedStart']))
    const plEnd = parseDate(pick(r, ['Planned End', 'Finish', 'PlannedEnd', 'Planned Completion']))
    const bsStart = parseDate(pick(r, ['Baseline Start', 'BaselineStart']))
    const bsEnd = parseDate(pick(r, ['Baseline End', 'BaselineEnd', 'Baseline Completion']))
    const acStart = parseDate(pick(r, ['Actual Start', 'ActualStart']))
    const acEnd = parseDate(pick(r, ['Actual End', 'ActualEnd', 'Actual Completion']))

    const plDays = num(pick(r, ['Planned Days', 'Duration', 'PlannedDays'])) || getDaysBetween(plStart, plEnd)
    const bsDays = num(pick(r, ['Baseline Days', 'BaselineDuration', 'BaselineDays'])) || getDaysBetween(bsStart, bsEnd)
    const acDays = num(pick(r, ['Actual Days', 'ActualDuration', 'ActualDays'])) || getDaysBetween(acStart, acEnd)

    const criticalVal = String(pick(r, ['Critical Path', 'CriticalPath', 'Critical']) ?? '').trim().toLowerCase()
    const isCritical = criticalVal === 'yes' || criticalVal === 'true' || criticalVal === '1'

    const quantity = num(pick(r, ['Quantity', 'Qty']))
    const wastePct = num(pick(r, ['Waste %', 'WastePct'])) || 0
    const netQty = num(pick(r, ['Net Qty', 'NetQty'])) || (quantity ? quantity * (1 + wastePct / 100) : undefined)
    const unitRate = num(pick(r, ['Unit rate', 'Unit Rate', 'Rate']))
    const boqAmount = num(pick(r, ['BOQ Amount', 'BOQAmount', 'Amount'])) || (netQty && unitRate ? netQty * unitRate : undefined)

    const estimatedCost = num(pick(r, ['Est. Cost', 'Estimated Cost', 'EstimatedCost']))
    const actualCost = num(pick(r, ['Actual Cost', 'ActualCost']))

    items.push({
      sow_number: sowNumber,
      hierarchy_level: level,
      scope_l1: scopeL1 || undefined,
      item_l2: itemL2 || undefined,
      sub_item_l3: subItemL3 || undefined,
      particulars: particulars || undefined,
      assigned_to: String(pick(r, ['Assigned To', 'Assigned', 'Resource']) ?? '').trim() || undefined,
      planned_start: plStart,
      planned_days: plDays,
      planned_end: plEnd,
      baseline_start: bsStart,
      baseline_days: bsDays,
      baseline_end: bsEnd,
      actual_start: acStart,
      actual_days: acDays,
      actual_end: acEnd,
      percent_complete: pct(pick(r, ['% Complete', 'PercentComplete', 'CompletePct'])),
      unit: String(pick(r, ['Unit', 'UOM']) ?? '').trim() || undefined,
      quantity,
      waste_pct: wastePct,
      net_qty: netQty,
      unit_rate: unitRate,
      boq_amount: boqAmount,
      estimated_cost: estimatedCost,
      actual_cost: actualCost,
      status: normStatus(pick(r, ['Status', 'State'])),
      dep_on: String(pick(r, ['Dep. On (SOW#)', 'Predecessor', 'DependentOn']) ?? '').trim() || undefined,
      dep_type: (String(pick(r, ['Dep. Type', 'DependencyType', 'PredecessorType']) ?? '').toUpperCase() as any) || 'FS',
      is_critical_path: isCritical,
      notes: String(pick(r, ['Notes', 'Note', 'Comments']) ?? '').trim() || undefined,
      plant: String(pick(r, ['Plant', 'Equipment']) ?? '').trim() || undefined,
      site_equipment: String(pick(r, ['Site Equip.', 'Site Equipment']) ?? '').trim() || undefined,
      manpower: String(pick(r, ['Manpower', 'Labour']) ?? '').trim() || undefined
    })
  })

  return items.sort((a, b) => a.sow_number.localeCompare(b.sow_number, undefined, { numeric: true, sensitivity: 'base' }))
}


// ─────────────────────────────────────────────────────────────────────────────
// 4. EXPORT FUNCTIONS (CPOS to Primavera P6 XER and MS Project MSPDI)
// ─────────────────────────────────────────────────────────────────────────────

export interface ProjectMetadata {
  project_name: string
  project_code?: string
  description?: string
  client_name?: string
  start_date: string
  end_date: string
}

/**
 * Export CPOS SOW items to Primavera P6 XER format
 */
export function exportSowToXER(project: ProjectMetadata, sowItems: ParsedSowItem[]): string {
  let xer = 'ERMHDR\t%R\t1\t1\n' // XER header
  xer += 'EXPORT\tUSER\tCPOS\t' + new Date().toISOString().split('T')[0] + '\t' + new Date().toISOString() + '\n'
  
  // Project record
  xer += '%T\tPROJWBS\n'
  xer += '%F\twbs_id\twbs_name\twbs_short_name\tseq_num\tparent_wbs_id\tstatus_code\n'
  xer += '%R\tPROJ_WBS_ID\t' + project.project_name + '\t' + project.project_name + '\t' + project.project_name + '\t1\t\tWS_Open\n'
  
  xer += '%T\tPROJECT\n'
  xer += '%F\tproj_id\tproj_short_name\tproj_name\tlast_update_date\tplan_start_date\tplan_end_date\n'
  xer += '%R\t' + project.project_code + '\t' + project.project_name + '\t' + project.project_name + '\t' + new Date().toISOString() + '\t' + project.start_date + '\t' + project.end_date + '\n'
  
  // Task records
  const taskMap = new Map<string, string>()
  let taskIdCounter = 1
  
  // Sort by hierarchy level and sow_number
  const sortedItems = sowItems.sort((a, b) => {
    if (a.hierarchy_level !== b.hierarchy_level) {
      return a.hierarchy_level - b.hierarchy_level
    }
    return a.sow_number.localeCompare(b.sow_number, undefined, { numeric: true, sensitivity: 'base' })
  })
  
  xer += '%T\tTASK\n'
  xer += '%F\ttask_id\ttask_code\ttask_name\twbs_id\tstatus_code\ttarget_start_date\ttarget_end_date\tduration_type\ttarget_duration\tact_start_date\tact_end_date\tact_work_qty\n'
  
  sortedItems.forEach((item) => {
    const taskId = `TASK${taskIdCounter++}`
    taskMap.set(item.sow_number, taskId)
    
    const taskName = item.sub_item_l3 || item.item_l2 || item.scope_l1 || item.sow_number
    const startDate = item.baseline_start || item.planned_start || project.start_date
    const endDate = item.baseline_end || item.planned_end || project.end_date
    const duration = (item.baseline_days || item.planned_days || 0) * 8 // Convert days to hours
    
    xer += '%R\t' + taskId + '\t' + item.sow_number + '\t' + taskName + '\tPROJ_WBS_ID\t'
    xer += (item.status === 'Complete' ? 'TK_Complete' : item.status === 'In Progress' ? 'TK_Active' : 'TK_NotStart') + '\t'
    xer += startDate + '\t' + endDate + '\tFixedDurationUnits\t' + duration
    
    if (item.actual_start) xer += '\t' + item.actual_start
    else xer += '\t'
    
    if (item.actual_end) xer += '\t' + item.actual_end
    else xer += '\t'
    
    xer += '\t' + (item.percent_complete || 0) + '\n'
  })
  
  // Predecessor records
  xer += '%T\tTASKPRED\n'
  xer += '%F\ttask_id\tpred_task_id\tpred_type\tlag_hr\n'
  
  sortedItems.forEach((item) => {
    if (item.dep_on) {
      const taskId = taskMap.get(item.sow_number)
      const predTaskId = taskMap.get(item.dep_on)
      if (taskId && predTaskId) {
        const predType = item.dep_type === 'SS' ? 'PR_SS' : item.dep_type === 'FF' ? 'PR_FF' : item.dep_type === 'SF' ? 'PR_SF' : 'PR_FS'
        xer += '%R\t' + taskId + '\t' + predTaskId + '\t' + predType + '\t0\n'
      }
    }
  })
  
  xer += 'TMRTASK\tEND\n' // End marker
  
  return xer
}

/**
 * Export CPOS SOW items to Microsoft Project MSPDI XML format
 */
export function exportSowToMSPDI(project: ProjectMetadata, sowItems: ParsedSowItem[]): string {
  const tasks = convertSowToMSPDITasks(sowItems)
  
  let xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n'
  xml += '<Project xmlns="http://schemas.microsoft.com/project">\n'
  xml += '  <Name>' + escapeXML(project.project_name) + '</Name>\n'
  if (project.description) xml += '  <Title>' + escapeXML(project.description) + '</Title>\n'
  if (project.client_name) xml += '  <Company>' + escapeXML(project.client_name) + '</Company>\n'
  xml += '  <StartDate>' + formatMSPDIDate(project.start_date) + '</StartDate>\n'
  xml += '  <FinishDate>' + formatMSPDIDate(project.end_date) + '</FinishDate>\n'
  xml += '  <Tasks>\n'
  
  tasks.forEach(task => {
    xml += '    <Task>\n'
    xml += '      <UID>' + task.UID + '</UID>\n'
    xml += '      <ID>' + task.ID + '</ID>\n'
    xml += '      <Name>' + escapeXML(task.Name) + '</Name>\n'
    if (task.WBS) xml += '      <WBS>' + escapeXML(task.WBS) + '</WBS>\n'
    xml += '      <OutlineLevel>' + task.OutlineLevel + '</OutlineLevel>\n'
    if (task.Start) xml += '      <Start>' + formatMSPDIDate(task.Start) + '</Start>\n'
    if (task.Finish) xml += '      <Finish>' + formatMSPDIDate(task.Finish) + '</Finish>\n'
    if (task.Duration) xml += '      <Duration>' + task.Duration + '</Duration>\n'
    if (task.PercentComplete !== undefined) xml += '      <PercentComplete>' + task.PercentComplete + '</PercentComplete>\n'
    if (task.PredecessorLink) {
      task.PredecessorLink.forEach(pred => {
        xml += '      <PredecessorLink>\n'
        xml += '        <PredecessorUID>' + pred.PredecessorUID + '</PredecessorUID>\n'
        xml += '        <Type>' + pred.Type + '</Type>\n'
        if (pred.Lag) xml += '        <Lag>' + pred.Lag + '</Lag>\n'
        xml += '      </PredecessorLink>\n'
      })
    }
    xml += '    </Task>\n'
  })
  
  xml += '  </Tasks>\n'
  xml += '</Project>\n'
  
  return xml
}

interface MSPDITask {
  UID: number
  ID: number
  Name: string
  WBS?: string
  OutlineLevel: number
  Start?: string
  Finish?: string
  Duration?: string
  PercentComplete?: number
  PredecessorLink?: MSPDIPredecessor[]
}

interface MSPDIPredecessor {
  PredecessorUID: number
  Type: number // 0=FS, 1=SS, 2=FF, 3=SF
  Lag?: string
}

function convertSowToMSPDITasks(sowItems: ParsedSowItem[]): MSPDITask[] {
  const tasks: MSPDITask[] = []
  const taskMap = new Map<string, number>()
  let uidCounter = 1
  
  const sortedItems = sowItems.sort((a, b) => {
    if (a.hierarchy_level !== b.hierarchy_level) {
      return a.hierarchy_level - b.hierarchy_level
    }
    return a.sow_number.localeCompare(b.sow_number, undefined, { numeric: true, sensitivity: 'base' })
  })
  
  sortedItems.forEach((item) => {
    const uid = uidCounter++
    taskMap.set(item.sow_number, uid)
    
    const task: MSPDITask = {
      UID: uid,
      ID: uid,
      Name: item.sub_item_l3 || item.item_l2 || item.scope_l1 || item.sow_number,
      WBS: item.sow_number,
      OutlineLevel: item.hierarchy_level,
    }
    
    if (item.planned_start || item.baseline_start) {
      task.Start = item.baseline_start || item.planned_start
    }
    if (item.planned_end || item.baseline_end) {
      task.Finish = item.baseline_end || item.planned_end
    }
    if (item.planned_days || item.baseline_days) {
      const days = item.baseline_days || item.planned_days
      task.Duration = 'PT' + (days * 8) + 'H0M0S'
    }
    if (item.percent_complete !== undefined) {
      task.PercentComplete = item.percent_complete
    }
    if (item.dep_on) {
      const predecessorUid = taskMap.get(item.dep_on)
      if (predecessorUid) {
        const type = item.dep_type === 'SS' ? 1 : item.dep_type === 'FF' ? 2 : item.dep_type === 'SF' ? 3 : 0
        task.PredecessorLink = [{ PredecessorUID: predecessorUid, Type: type }]
      }
    }
    
    tasks.push(task)
  })
  
  return tasks
}

function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function formatMSPDIDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toISOString()
}
