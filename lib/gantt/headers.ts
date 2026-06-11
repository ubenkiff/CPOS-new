import { addDays, daysBetween, parseLocalDate, toDateStr } from './dates'
import { getColWidth } from './timePages'
import type { GanttViewMode, TimeWindow } from './types'

export type HeaderSegment = { label: string; days: number; start: string }

export function generateWindowHeaders(window: TimeWindow, mode: GanttViewMode): HeaderSegment[] {
  const segments: HeaderSegment[] = []

  if (mode === 'week' || mode === 'fortnight') {
    const cur = parseLocalDate(window.start)
    const end = parseLocalDate(window.end)
    while (cur <= end) {
      const start = toDateStr(cur)
      const daysInMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 0).getDate()
      const remaining = daysBetween(start, window.end) + 1
      const days = Math.min(daysInMonth - cur.getDate() + 1, remaining)
      segments.push({
        label: cur.toLocaleDateString('en-ZA', { month: 'short', year: '2-digit' }),
        days,
        start,
      })
      cur.setMonth(cur.getMonth() + 1)
      cur.setDate(1)
    }
    return segments
  }

  if (mode === 'month') {
    segments.push({
      label: parseLocalDate(window.start).toLocaleDateString('en-ZA', { month: 'short', year: 'numeric' }),
      days: window.totalDays,
      start: window.start,
    })
    return segments
  }

  if (mode === 'quarter') {
    const cur = parseLocalDate(window.start)
    while (cur <= parseLocalDate(window.end)) {
      const start = toDateStr(cur)
      const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1)
      const monthEnd = new Date(nextMonth.getTime() - 86400000)
      const end = monthEnd > parseLocalDate(window.end) ? parseLocalDate(window.end) : monthEnd
      const days = daysBetween(start, toDateStr(end)) + 1
      segments.push({
        label: cur.toLocaleDateString('en-ZA', { month: 'short' }),
        days,
        start,
      })
      cur.setMonth(cur.getMonth() + 1)
      cur.setDate(1)
    }
    return segments
  }

  if (mode === 'half-year' || mode === 'year') {
    const cur = parseLocalDate(window.start)
    while (cur <= parseLocalDate(window.end)) {
      const start = toDateStr(cur)
      const nextMonth = new Date(cur.getFullYear(), cur.getMonth() + 1, 1)
      const monthEnd = new Date(nextMonth.getTime() - 86400000)
      const end = monthEnd > parseLocalDate(window.end) ? parseLocalDate(window.end) : monthEnd
      const days = daysBetween(start, toDateStr(end)) + 1
      segments.push({
        label: cur.toLocaleDateString('en-ZA', { month: 'short', year: mode === 'year' ? '2-digit' : undefined }),
        days,
        start,
      })
      cur.setMonth(cur.getMonth() + 1)
      cur.setDate(1)
    }
    return segments
  }

  segments.push({ label: window.label, days: window.totalDays, start: window.start })
  return segments
}

export function shouldShowDayTick(mode: GanttViewMode, dayNum: number): boolean {
  if (mode === 'quarter' || mode === 'half-year' || mode === 'year') return false
  if (mode === 'week') return true
  if (mode === 'fortnight') return dayNum === 1 || dayNum % 7 === 0
  return dayNum === 1 || dayNum === 8 || dayNum === 15 || dayNum === 22
}

export function timelineWidth(window: TimeWindow, mode: GanttViewMode): number {
  return window.totalDays * getColWidth(mode)
}

export function dayDatesInWindow(window: TimeWindow): string[] {
  return Array.from({ length: window.totalDays }, (_, d) => addDays(window.start, d))
}
