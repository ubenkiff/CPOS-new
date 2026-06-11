'use client'

import type { CSSProperties } from 'react'
import { resolveEnd, daysBetween } from '../../lib/gantt/dates'
import { barStyleInWindow, pctInWindow, barIntersectsWindow, clipBarToWindow } from '../../lib/gantt/barGeometry'
import { generateWindowHeaders, shouldShowDayTick, timelineWidth, dayDatesInWindow } from '../../lib/gantt/headers'
import { getItemLabel } from '../../lib/gantt/rows'
import { getColWidth } from '../../lib/gantt/timePages'
import type { GanttBarToggles, GanttPanelTheme, GanttRow, GanttViewMode, TimeWindow } from '../../lib/gantt/types'

type Props = {
  window: TimeWindow
  viewMode: GanttViewMode
  rows: GanttRow[]
  theme: GanttPanelTheme
  toggles: GanttBarToggles
  today: string
  rowH?: number
  labelW?: number
  compact?: boolean
  fitWidth?: boolean
  collapsedL1?: Set<string>
  onToggleL1?: (sowId: string) => void
  pageLabel?: string
}

export default function GanttChartPanel({
  window,
  viewMode,
  rows,
  theme,
  toggles,
  today,
  rowH = 36,
  labelW = 280,
  compact = false,
  fitWidth = false,
  collapsedL1,
  onToggleL1,
  pageLabel,
}: Props) {
  const { isDark, hBg, panelBg, borderCol, gridCol, textNormal, textMuted, textHeader } = theme
  const colW = getColWidth(viewMode)
  const headers = generateWindowHeaders(window, viewMode)
  const chartWidthPx = timelineWidth(window, viewMode)
  const dayDates = dayDatesInWindow(window)

  function pct(dateStr: string): number {
    return pctInWindow(dateStr, window)
  }

  function dayCellStyle(showBorder: boolean): CSSProperties {
    if (fitWidth) {
      return {
        flex: 1,
        minWidth: 0,
        flexShrink: 0,
        borderRight: showBorder ? `1px solid ${gridCol}` : undefined,
      }
    }
    return {
      width: colW,
      flexShrink: 0,
      borderRight: showBorder ? `1px solid ${gridCol}` : undefined,
    }
  }

  function headerSegmentStyle(days: number): CSSProperties {
    if (fitWidth) {
      return {
        flex: days,
        minWidth: 0,
        flexShrink: 0,
        borderRight: `1px solid ${borderCol}`,
        display: 'flex',
        alignItems: 'center',
        padding: '0 6px',
        overflow: 'hidden',
      }
    }
    return {
      width: days * colW,
      flexShrink: 0,
      borderRight: `1px solid ${borderCol}`,
      display: 'flex',
      alignItems: 'center',
      padding: '0 6px',
      overflow: 'hidden',
    }
  }

  const timelineInnerStyle: CSSProperties = fitWidth
    ? { width: '100%', minWidth: 0, position: 'relative' }
    : { width: chartWidthPx, minWidth: chartWidthPx, position: 'relative' }

  return (
    <div className={`gantt-chart-panel${fitWidth ? ' gantt-chart-panel--fit' : ''}`}>
      {pageLabel && (
        <div
          className="gantt-page-label"
          style={{
            padding: compact ? '6px 10px' : '8px 12px',
            background: isDark ? '#161b22' : '#f1f5f9',
            borderBottom: `1px solid ${borderCol}`,
            fontSize: compact ? 10 : 11,
            fontWeight: 700,
            color: isDark ? '#f59e0b' : '#b45309',
            letterSpacing: '0.04em',
          }}
        >
          {pageLabel}
          <span style={{ marginLeft: 12, fontWeight: 500, color: textMuted }}>
            {window.start} → {window.end}
          </span>
        </div>
      )}

      <div className="gantt-table-wrap" style={{ overflowX: fitWidth ? 'hidden' : 'auto', width: '100%' }}>
        <table
          style={{
            width: fitWidth ? '100%' : labelW + chartWidthPx,
            minWidth: fitWidth ? '100%' : labelW + chartWidthPx,
            borderCollapse: 'collapse',
            tableLayout: 'fixed',
          }}
        >
          <colgroup>
            <col style={{ width: labelW }} />
            <col />
          </colgroup>
          <thead>
            <tr>
              <th
                rowSpan={2}
                style={{
                  verticalAlign: 'middle',
                  textAlign: 'left',
                  background: hBg,
                  borderBottom: `1px solid ${borderCol}`,
                  borderRight: `1px solid ${borderCol}`,
                  padding: '0 12px',
                  height: 44,
                  fontSize: 9,
                  color: textMuted,
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                }}
              >
                TASK / ACTIVITY
              </th>
              <th style={{ padding: 0, background: hBg, borderBottom: `1px solid ${borderCol}` }}>
                <div style={{ ...timelineInnerStyle, height: 22, display: 'flex' }}>
                  {headers.map((h, i) => (
                    <div key={i} style={headerSegmentStyle(h.days)}>
                      <span
                        style={{
                          fontSize: compact ? 8 : 10,
                          color: isDark ? '#8b949e' : '#475569',
                          fontWeight: 600,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {h.label}
                      </span>
                    </div>
                  ))}
                </div>
              </th>
            </tr>
            <tr>
              <th style={{ padding: 0, background: hBg, borderBottom: `1px solid ${borderCol}` }}>
                <div style={{ ...timelineInnerStyle, height: 22, display: 'flex' }}>
                  {dayDates.map((date, d) => {
                    const dayNum = parseInt(date.split('-')[2], 10)
                    const isSunday = new Date(date.replace(/-/g, '/')).getDay() === 0
                    if (!shouldShowDayTick(viewMode, dayNum)) {
                      return <div key={d} style={dayCellStyle(false)} />
                    }
                    return (
                      <div
                        key={d}
                        style={{
                          ...dayCellStyle(dayNum === 1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span style={{ fontSize: compact ? 7 : 8, color: isSunday ? '#f87171' : textMuted }}>{dayNum}</span>
                      </div>
                    )
                  })}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(({ item, level }, i) => {
              const isL1 = level === 1
              const isL2 = level === 2
              const bg = isL1 ? (isDark ? '#161b22' : '#f1f5f9') : isL2 ? (isDark ? '#0d1117' : '#f8fafc') : 'transparent'
              const textColor = isL1 ? textHeader : isL2 ? textNormal : isDark ? '#8b949e' : '#475569'
              const indent = isL1 ? 8 : isL2 ? 20 : 32
              const collapsed = collapsedL1?.has(item.sow_id)
              const label = getItemLabel(item)
              const meta =
                level === 3 && !compact
                  ? [item.sow_number, item.status, item.assigned_to].filter(Boolean).join(' · ')
                  : ''

              const baseStart = item.baseline_start
              const baseEnd = resolveEnd(item, 'baseline')
              const planStart = item.planned_start
              const planEnd = resolveEnd(item, 'planned')
              const actStart = item.actual_start
              const actEnd =
                resolveEnd(item, 'actual') ||
                (item.actual_start && item.percent_complete === 100 ? item.actual_start : undefined)
              const pctDone = item.percent_complete || 0
              const isCritical = item.is_critical_path
              const barColor = isCritical
                ? '#f87171'
                : level === 1
                  ? '#534AB7'
                  : level === 2
                    ? '#378ADD'
                    : isDark
                      ? '#60a5fa'
                      : '#2563eb'

              return (
                <tr key={item.sow_id + i} className="gantt-row" style={{ pageBreakInside: 'avoid' }}>
                  <td
                    style={{
                      height: rowH,
                      background: bg,
                      borderBottom: `1px solid ${gridCol}`,
                      borderRight: `1px solid ${borderCol}`,
                      padding: `0 8px 0 ${indent}px`,
                      verticalAlign: 'middle',
                      cursor: isL1 && onToggleL1 ? 'pointer' : 'default',
                    }}
                    onClick={() => isL1 && onToggleL1?.(item.sow_id)}
                    title={meta || label}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
                      {isL1 && onToggleL1 && (
                        <span style={{ fontSize: 9, color: textMuted, width: 10, flexShrink: 0 }}>{collapsed ? '▶' : '▼'}</span>
                      )}
                      <div style={{ minWidth: 0, flex: 1, overflow: 'hidden' }}>
                        <div
                          style={{
                            fontSize: isL1 ? 11 : 10,
                            fontWeight: isL1 ? 700 : isL2 ? 600 : 400,
                            color: textColor,
                            textTransform: isL1 ? 'uppercase' : 'none',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {isCritical && <span style={{ color: '#f87171', marginRight: 4 }}>●</span>}
                          {label}
                        </div>
                      </div>
                      {level === 3 && typeof item.percent_complete === 'number' && !compact && (
                        <div style={{ width: 28, textAlign: 'right', fontSize: 9, color: textMuted, flexShrink: 0 }}>
                          {item.percent_complete}%
                        </div>
                      )}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: 0,
                      height: rowH,
                      background: bg,
                      borderBottom: `1px solid ${gridCol}`,
                      verticalAlign: 'top',
                      position: 'relative',
                    }}
                  >
                    <div style={{ ...timelineInnerStyle, height: rowH }}>
                      {today >= window.start && today <= window.end && (
                        <div
                          style={{
                            position: 'absolute',
                            left: `${pct(today)}%`,
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: '#f59e0b',
                            opacity: 0.35,
                            zIndex: 1,
                            pointerEvents: 'none',
                          }}
                        />
                      )}

                      {toggles.showBaseline && baseStart && baseEnd && level === 3 && barIntersectsWindow(baseStart, baseEnd, window) && (
                        <div style={{ ...barStyleInWindow(baseStart, baseEnd, window, '#484f58', 4, rowH / 2 - 2, 0.5)! }} />
                      )}
                      {toggles.showBaseline && baseStart && baseEnd && level !== 3 && barIntersectsWindow(baseStart, baseEnd, window) && (
                        <div style={{ ...barStyleInWindow(baseStart, baseEnd, window, '#484f58', 8, rowH / 2 - 4, 0.4)!, borderRadius: 0 }} />
                      )}
                      {toggles.showPlanned && planStart && planEnd && level === 3 && barIntersectsWindow(planStart, planEnd, window) && (
                        <div
                          style={{
                            position: 'absolute',
                            left: `${pct(clipBarToWindow(planStart, planEnd, window).start)}%`,
                            width: `${Math.max(0.3, pct(clipBarToWindow(planStart, planEnd, window).end) - pct(clipBarToWindow(planStart, planEnd, window).start))}%`,
                            height: 14,
                            top: rowH / 2 - 7,
                            background: barColor + '33',
                            border: `1px solid ${barColor}66`,
                            borderRadius: 2,
                          }}
                        >
                          <div style={{ height: '100%', width: `${pctDone}%`, background: barColor, borderRadius: '2px 0 0 2px', opacity: 0.9 }} />
                          {pctDone > 25 && (
                            <div style={{ position: 'absolute', left: 4, top: 1, fontSize: 8, color: '#0a0c0e', fontWeight: 700 }}>{pctDone}%</div>
                          )}
                        </div>
                      )}
                      {toggles.showPlanned && planStart && planEnd && level !== 3 && barIntersectsWindow(planStart, planEnd, window) && (
                        <div style={{ ...barStyleInWindow(planStart, planEnd, window, barColor + '44', 10, rowH / 2 - 5)!, background: barColor + '44' }} />
                      )}
                      {toggles.showActual && actStart && level === 3 && (
                        actEnd && barIntersectsWindow(actStart, actEnd, window) ? (
                          <div style={{ ...barStyleInWindow(actStart, actEnd, window, '#4ade80', 4, rowH - 8, 0.8)! }} />
                        ) : actStart >= window.start && actStart <= window.end ? (
                          <div
                            style={{
                              position: 'absolute',
                              left: `${pct(actStart)}%`,
                              width: 2,
                              height: 14,
                              top: rowH / 2 - 7,
                              background: '#4ade80',
                              borderRadius: 1,
                            }}
                          />
                        ) : null
                      )}
                      {level === 3 &&
                        baseStart &&
                        baseEnd &&
                        daysBetween(baseStart, baseEnd) === 0 &&
                        baseStart >= window.start &&
                        baseStart <= window.end && (
                          <div
                            style={{
                              position: 'absolute',
                              left: `calc(${pct(baseStart)}% - 6px)`,
                              top: rowH / 2 - 6,
                              width: 12,
                              height: 12,
                              background: isCritical ? '#f87171' : '#f59e0b',
                              transform: 'rotate(45deg)',
                              borderRadius: 2,
                            }}
                          />
                        )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
