import { daysBetween, maxDate, minDate } from './dates'
import type { TimeWindow } from './types'

export function pctInWindow(dateStr: string, window: TimeWindow): number {
  if (window.totalDays <= 1) return 0
  return Math.max(0, Math.min(100, (daysBetween(window.start, dateStr) / (window.totalDays - 1)) * 100))
}

export function barIntersectsWindow(barStart?: string, barEnd?: string, window?: TimeWindow): boolean {
  if (!barStart || !barEnd || !window) return false
  return barStart <= window.end && barEnd >= window.start
}

export function clipBarToWindow(barStart: string, barEnd: string, window: TimeWindow): { start: string; end: string } {
  return {
    start: maxDate(barStart, window.start),
    end: minDate(barEnd, window.end),
  }
}

export function barStyleInWindow(
  barStart: string | undefined,
  barEnd: string | undefined,
  window: TimeWindow,
  color: string,
  height: number,
  top: number,
  opacity = 1
) {
  if (!barStart || !barEnd || !barIntersectsWindow(barStart, barEnd, window)) return null
  const clipped = clipBarToWindow(barStart, barEnd, window)
  const left = pctInWindow(clipped.start, window)
  const width = Math.max(0.3, pctInWindow(clipped.end, window) - left)
  return {
    position: 'absolute' as const,
    left: `${left}%`,
    width: `${width}%`,
    height,
    top,
    background: color,
    opacity,
    borderRadius: 2,
  }
}
