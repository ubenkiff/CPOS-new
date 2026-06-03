/**
 * MSPDI XML Exporter for Microsoft Project
 * Exports CPOS projects to MSPDI XML format (Microsoft Project Data Interchange)
 * Follows the mspdi_pj12.xsd schema
 */

export interface MSPDIProject {
  Name: string
  Title?: string
  Company?: string
  StartDate: string
  FinishDate: string
  Tasks: MSPDITask[]
  Resources?: MSPDIResource[]
}

export interface MSPDITask {
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

export interface MSPDIPredecessor {
  PredecessorUID: number
  Type: number // 0=FS, 1=SS, 2=FF, 3=SF
  Lag?: string
}

export interface MSPDIResource {
  UID: number
  Name: string
  Type?: number // 1=Material, 2=Work
}

/**
 * Convert CPOS project to MSPDI XML format
 */
export function exportToMSPDI(project: any, sowItems: any[]): string {
  const tasks = convertTasksToMSPDI(sowItems)
  const mspdiProject: MSPDIProject = {
    Name: project.project_name,
    Title: project.description,
    Company: project.client_name,
    StartDate: project.start_date,
    FinishDate: project.end_date,
    Tasks: tasks,
  }

  return generateMSPDIXML(mspdiProject)
}

/**
 * Convert CPOS SOW items to MSPDI tasks
 */
function convertTasksToMSPDI(sowItems: any[]): MSPDITask[] {
  const tasks: MSPDITask[] = []
  const taskMap = new Map<string, number>()
  let uidCounter = 1

  // Sort by hierarchy level and sow_number
  const sortedItems = sowItems.sort((a, b) => {
    if (a.hierarchy_level !== b.hierarchy_level) {
      return a.hierarchy_level - b.hierarchy_level
    }
    return a.sow_number.localeCompare(b.sow_number)
  })

  sortedItems.forEach((item) => {
    const uid = uidCounter++
    taskMap.set(item.sow_id, uid)

    const task: MSPDITask = {
      UID: uid,
      ID: uid,
      Name: item.sub_item_l3 || item.item_l2 || item.scope_l3 || item.sow_number,
      WBS: item.sow_number,
      OutlineLevel: item.hierarchy_level,
    }

    // Add dates if available
    if (item.planned_start || item.baseline_start) {
      task.Start = (item.baseline_start || item.planned_start) as string
    }
    if (item.planned_end || item.baseline_end) {
      task.Finish = (item.baseline_end || item.planned_end) as string
    }

    // Add duration if available
    if (item.planned_days || item.baseline_days) {
      const days = item.baseline_days || item.planned_days
      task.Duration = `PT${days * 8}H0M0S` // Convert days to hours (8-hour workday)
    }

    // Add percent complete if available
    if (item.percent_complete !== undefined) {
      task.PercentComplete = item.percent_complete
    }

    // Add dependencies if available
    if (item.dep_on_sow) {
      const predecessorUid = taskMap.get(item.dep_on_sow)
      if (predecessorUid) {
        const type = item.dep_type === 'SS' ? 1 : item.dep_type === 'FF' ? 2 : item.dep_type === 'SF' ? 3 : 0
        task.PredecessorLink = [{ PredecessorUID: predecessorUid, Type: type }]
      }
    }

    tasks.push(task)
  })

  return tasks
}

/**
 * Generate MSPDI XML string from project object
 */
function generateMSPDIXML(project: MSPDIProject): string {
  const tasksXML = project.Tasks.map(task => {
    let xml = `    <Task>\n`
    xml += `      <UID>${task.UID}</UID>\n`
    xml += `      <ID>${task.ID}</ID>\n`
    xml += `      <Name>${escapeXML(task.Name)}</Name>\n`
    if (task.WBS) xml += `      <WBS>${escapeXML(task.WBS)}</WBS>\n`
    xml += `      <OutlineLevel>${task.OutlineLevel}</OutlineLevel>\n`
    if (task.Start) xml += `      <Start>${formatDate(task.Start)}</Start>\n`
    if (task.Finish) xml += `      <Finish>${formatDate(task.Finish)}</Finish>\n`
    if (task.Duration) xml += `      <Duration>${task.Duration}</Duration>\n`
    if (task.PercentComplete !== undefined) xml += `      <PercentComplete>${task.PercentComplete}</PercentComplete>\n`
    if (task.PredecessorLink) {
      task.PredecessorLink.forEach(pred => {
        xml += `      <PredecessorLink>\n`
        xml += `        <PredecessorUID>${pred.PredecessorUID}</PredecessorUID>\n`
        xml += `        <Type>${pred.Type}</Type>\n`
        if (pred.Lag) xml += `        <Lag>${pred.Lag}</Lag>\n`
        xml += `      </PredecessorLink>\n`
      })
    }
    xml += `    </Task>\n`
    return xml
  }).join('')

  let xml = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n`
  xml += `<Project xmlns="http://schemas.microsoft.com/project">\n`
  xml += `  <Name>${escapeXML(project.Name)}</Name>\n`
  if (project.Title) xml += `  <Title>${escapeXML(project.Title)}</Title>\n`
  if (project.Company) xml += `  <Company>${escapeXML(project.Company)}</Company>\n`
  xml += `  <StartDate>${formatDate(project.StartDate)}</StartDate>\n`
  xml += `  <FinishDate>${formatDate(project.FinishDate)}</FinishDate>\n`
  xml += `  <Tasks>\n`
  xml += tasksXML
  xml += `  </Tasks>\n`
  xml += `</Project>\n`

  return xml
}

/**
 * Escape XML special characters
 */
function escapeXML(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

/**
 * Format date for MSPDI (YYYY-MM-DDTHH:MM:SS)
 */
function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toISOString()
}
