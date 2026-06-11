export type GanttViewMode = 'week' | 'fortnight' | 'month' | 'quarter' | 'half-year' | 'year'

export const GANTT_VIEW_MODES: { value: GanttViewMode; label: string }[] = [
  { value: 'week', label: 'Weekly' },
  { value: 'fortnight', label: 'Fortnightly' },
  { value: 'month', label: 'Monthly' },
  { value: 'quarter', label: 'Quarterly' },
  { value: 'half-year', label: 'Half-yearly' },
  { value: 'year', label: 'Yearly' },
]

export type GanttSowItem = {
  sow_id: string
  sow_number: string
  hierarchy_level: number
  parent_id?: string | null
  scope_l1?: string
  item_l2?: string
  sub_item_l3?: string
  particulars?: string
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
  status?: string
  risk_level?: string
  assigned_to?: string
  is_critical_path?: boolean
  estimated_cost?: number
}

export type GanttRow = { item: GanttSowItem; level: number }

export type TimeWindow = {
  index: number
  start: string
  end: string
  label: string
  totalDays: number
}

export type GanttBarToggles = {
  showBaseline: boolean
  showPlanned: boolean
  showActual: boolean
}

export type GanttPanelTheme = {
  isDark: boolean
  hBg: string
  panelBg: string
  borderCol: string
  gridCol: string
  textNormal: string
  textMuted: string
  textHeader: string
}

export const STATUS_COLORS: Record<string, string> = {
  'Not Started': '#484f58',
  'In Progress': '#f59e0b',
  Complete: '#4ade80',
  'On Hold': '#818cf8',
  Delayed: '#f87171',
}
