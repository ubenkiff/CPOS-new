'use client'

import GanttChartPanel from './GanttChartPanel'
import type { GanttBarToggles, GanttPanelTheme, GanttRow, GanttViewMode, TimeWindow } from '../../lib/gantt/types'

type Props = {
  windows: TimeWindow[]
  viewMode: GanttViewMode
  rows: GanttRow[]
  theme: GanttPanelTheme
  toggles: GanttBarToggles
  today: string
  variant: 'screen' | 'print'
  pageIndex?: number
  rowH?: number
  labelW?: number
  compact?: boolean
  collapsedL1?: Set<string>
  onToggleL1?: (sowId: string) => void
}

export default function GanttPaginatedLayout({
  windows,
  viewMode,
  rows,
  theme,
  toggles,
  today,
  variant,
  pageIndex = 0,
  rowH,
  labelW,
  compact,
  collapsedL1,
  onToggleL1,
}: Props) {
  if (variant === 'screen') {
    const window = windows[pageIndex] ?? windows[0]
    if (!window) return null
    return (
      <GanttChartPanel
        window={window}
        viewMode={viewMode}
        rows={rows}
        theme={theme}
        toggles={toggles}
        today={today}
        rowH={rowH}
        labelW={labelW}
        compact={compact}
        fitWidth={false}
        collapsedL1={collapsedL1}
        onToggleL1={onToggleL1}
        pageLabel={`${window.label} · Page ${pageIndex + 1} of ${windows.length}`}
      />
    )
  }

  return (
    <div className="gantt-print-pages">
      {windows.map((window, idx) => (
        <section
          key={`${window.start}-${window.end}-${idx}`}
          className="gantt-print-page"
          aria-label={`Gantt page ${idx + 1}: ${window.label}`}
        >
          <GanttChartPanel
            window={window}
            viewMode={viewMode}
            rows={rows}
            theme={theme}
            toggles={toggles}
            today={today}
            rowH={rowH ?? 22}
            labelW={labelW ?? 180}
            compact
            fitWidth
            pageLabel={`${window.label} · Page ${idx + 1} of ${windows.length}`}
          />
        </section>
      ))}
    </div>
  )
}
