import { addDays, daysBetween, maxDate, minDate, parseLocalDate, toDateStr } from './dates'
import type { GanttViewMode, TimeWindow } from './types'

function makeWindow(index: number, start: string, end: string, label: string): TimeWindow {
  return {
    index,
    start,
    end,
    label,
    totalDays: Math.max(1, daysBetween(start, end) + 1),
  }
}

function formatMonthYear(d: Date): string {
  return d.toLocaleDateString('en-ZA', { month: 'short', year: 'numeric' })
}

function formatRangeLabel(start: string, end: string): string {
  const s = new Date(start)
  const e = new Date(end)
  if (start === end) return formatMonthYear(s)
  return `${s.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: '2-digit' })} – ${e.toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: '2-digit' })}`
}

function splitFixedDays(rangeStart: string, rangeEnd: string, chunkDays: number, labelPrefix: string): TimeWindow[] {
  const pages: TimeWindow[] = []
  let cur = rangeStart
  let index = 0

  while (cur <= rangeEnd) {
    const end = minDate(addDays(cur, chunkDays - 1), rangeEnd)
    pages.push(makeWindow(index, cur, end, `${labelPrefix} ${index + 1}: ${formatRangeLabel(cur, end)}`))
    cur = addDays(end, 1)
    index += 1
  }

  return pages
}

export function splitTimelineIntoPages(rangeStart: string, rangeEnd: string, mode: GanttViewMode): TimeWindow[] {
  if (!rangeStart || !rangeEnd || rangeStart > rangeEnd) {
    return [makeWindow(0, rangeStart || rangeEnd, rangeEnd || rangeStart, 'Schedule')]
  }

  switch (mode) {
    case 'week':
      return splitFixedDays(rangeStart, rangeEnd, 7, 'Week')
    case 'fortnight':
      return splitFixedDays(rangeStart, rangeEnd, 14, 'Fortnight')
    case 'month': {
      const pages: TimeWindow[] = []
      let cur = parseLocalDate(rangeStart)
      const end = parseLocalDate(rangeEnd)
      let index = 0

      while (cur <= end) {
        const windowStart = maxDate(toDateStr(cur), rangeStart)
        const lastDay = new Date(cur.getFullYear(), cur.getMonth() + 1, 0)
        const windowEnd = minDate(toDateStr(lastDay), rangeEnd)
        pages.push(makeWindow(index, windowStart, windowEnd, formatMonthYear(cur)))
        cur = new Date(cur.getFullYear(), cur.getMonth() + 1, 1)
        index += 1
      }
      return pages
    }
    case 'quarter': {
      const pages: TimeWindow[] = []
      let cur = parseLocalDate(rangeStart)
      const end = parseLocalDate(rangeEnd)
      let index = 0

      while (cur <= end) {
        const q = Math.floor(cur.getMonth() / 3)
        const qStart = new Date(cur.getFullYear(), q * 3, 1)
        const qEnd = new Date(cur.getFullYear(), q * 3 + 3, 0)
        const windowStart = maxDate(toDateStr(qStart), rangeStart)
        const windowEnd = minDate(toDateStr(qEnd), rangeEnd)
        pages.push(makeWindow(index, windowStart, windowEnd, `Q${q + 1} ${cur.getFullYear()}`))
        cur = new Date(cur.getFullYear(), q * 3 + 3, 1)
        index += 1
      }
      return pages
    }
    case 'half-year': {
      const pages: TimeWindow[] = []
      let cur = parseLocalDate(rangeStart)
      const end = parseLocalDate(rangeEnd)
      let index = 0

      while (cur <= end) {
        const isH1 = cur.getMonth() < 6
        const hStart = new Date(cur.getFullYear(), isH1 ? 0 : 6, 1)
        const hEnd = new Date(cur.getFullYear(), isH1 ? 6 : 12, 0)
        const windowStart = maxDate(toDateStr(hStart), rangeStart)
        const windowEnd = minDate(toDateStr(hEnd), rangeEnd)
        pages.push(makeWindow(index, windowStart, windowEnd, `${isH1 ? 'H1' : 'H2'} ${cur.getFullYear()}`))
        cur = new Date(cur.getFullYear(), isH1 ? 6 : 12, 1)
        index += 1
      }
      return pages
    }
    case 'year': {
      const pages: TimeWindow[] = []
      let cur = parseLocalDate(rangeStart)
      const end = parseLocalDate(rangeEnd)
      let index = 0

      while (cur <= end) {
        const yStart = new Date(cur.getFullYear(), 0, 1)
        const yEnd = new Date(cur.getFullYear(), 11, 31)
        const windowStart = maxDate(toDateStr(yStart), rangeStart)
        const windowEnd = minDate(toDateStr(yEnd), rangeEnd)
        pages.push(makeWindow(index, windowStart, windowEnd, String(cur.getFullYear())))
        cur = new Date(cur.getFullYear() + 1, 0, 1)
        index += 1
      }
      return pages
    }
    default:
      return [makeWindow(0, rangeStart, rangeEnd, formatRangeLabel(rangeStart, rangeEnd))]
  }
}

export function getColWidth(mode: GanttViewMode): number {
  switch (mode) {
    case 'week':
      return 32
    case 'fortnight':
      return 24
    case 'month':
      return 24
    case 'quarter':
      return 14
    case 'half-year':
      return 8
    case 'year':
      return 4
    default:
      return 24
  }
}
