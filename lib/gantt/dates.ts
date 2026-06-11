import type { GanttSowItem } from './types'

/** Parse YYYY-MM-DD as a local calendar date (avoids UTC timezone shifts). */
export function parseLocalDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, (m || 1) - 1, d || 1)
}

export function addDays(dateStr: string, days: number): string {
  const d = parseLocalDate(dateStr)
  d.setDate(d.getDate() + days)
  return toDateStr(d)
}

export function daysBetween(a: string, b: string): number {
  const da = parseLocalDate(a)
  const db = parseLocalDate(b)
  return Math.round((db.getTime() - da.getTime()) / 86400000)
}

export function minDate(a: string, b: string): string {
  return a <= b ? a : b
}

export function maxDate(a: string, b: string): string {
  return a >= b ? a : b
}

export function toDateStr(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function resolveEnd(item: GanttSowItem, field: 'baseline' | 'planned' | 'actual'): string | undefined {
  if (field === 'baseline') {
    if (item.baseline_end) return item.baseline_end
    if (item.baseline_start && item.baseline_days) return addDays(item.baseline_start, item.baseline_days)
  }
  if (field === 'planned') {
    if (item.planned_end) return item.planned_end
    if (item.planned_start && item.planned_days) return addDays(item.planned_start, item.planned_days)
  }
  if (field === 'actual') return item.actual_end
  return undefined
}

export function computeScheduleRange(args: {
  items: GanttSowItem[]
  projectStart: string
  projectEnd: string
}): { rangeStart: string; rangeEnd: string; totalDays: number; hasSchedule: GanttSowItem[] } {
  const l3 = args.items.filter((r) => Number(r.hierarchy_level) === 3)
  const hasSchedule = l3.filter((r) => r.baseline_start || r.planned_start)

  const allStarts = hasSchedule
    .map((r) => r.baseline_start || r.planned_start || args.projectStart)
    .filter(Boolean) as string[]
  const allEnds = hasSchedule
    .map((r) => resolveEnd(r, 'baseline') || resolveEnd(r, 'planned') || args.projectEnd)
    .filter(Boolean) as string[]

  const rangeStart = allStarts.length > 0 ? allStarts.sort()[0] : args.projectStart
  const rangeEnd = allEnds.length > 0 ? allEnds.sort().reverse()[0] : args.projectEnd
  const span = daysBetween(rangeStart, rangeEnd)
  const totalDays = Math.max(1, span + 1)

  return { rangeStart, rangeEnd, totalDays, hasSchedule }
}
