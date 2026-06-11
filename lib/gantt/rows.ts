import type { GanttRow, GanttSowItem } from './types'

function levelOf(item: GanttSowItem): number {
  return Number(item.hierarchy_level)
}

function getChildrenByPrefix(items: GanttSowItem[], parent: GanttSowItem, childLevel: number): GanttSowItem[] {
  const prefix = `${parent.sow_number}.`
  return items.filter((item) => {
    if (levelOf(item) !== childLevel) return false
    if (!item.sow_number.startsWith(prefix)) return false
    return item.sow_number.split('.').length === childLevel
  })
}

export function getItemLabel(item: GanttSowItem): string {
  const level = levelOf(item)
  if (level === 1) return item.scope_l1 || item.sow_number
  if (level === 2) return item.item_l2 || item.sow_number
  return item.sub_item_l3 || item.particulars || item.sow_number
}

export function buildGanttRows(args: {
  items: GanttSowItem[]
  collapsedL1?: Set<string>
  showCriticalOnly?: boolean
  includeUnscheduledL3?: boolean
}): GanttRow[] {
  const l1Items = args.items.filter((r) => levelOf(r) === 1)
  const l2Items = args.items.filter((r) => levelOf(r) === 2)
  const l3Items = args.items.filter((r) => levelOf(r) === 3)
  const collapsed = args.collapsedL1 ?? new Set<string>()
  const rows: GanttRow[] = []

  l1Items.forEach((l1) => {
    rows.push({ item: l1, level: 1 })
    if (collapsed.has(l1.sow_id)) return

    getChildrenByPrefix(l2Items, l1, 2).forEach((l2) => {
      rows.push({ item: l2, level: 2 })
      let tasks = getChildrenByPrefix(l3Items, l2, 3)
      if (!args.includeUnscheduledL3) {
        tasks = tasks.filter((l3) => l3.baseline_start || l3.planned_start)
      }
      if (args.showCriticalOnly) {
        tasks = tasks.filter((t) => t.is_critical_path)
      }
      tasks.forEach((l3) => rows.push({ item: l3, level: 3 }))
    })
  })

  return rows
}
