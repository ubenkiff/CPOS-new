/**
 * XER Exporter for Primavera P6
 * Exports CPOS projects to XER format (Primavera P6 Exchange Format)
 * XER is a proprietary ASCII text format used by Oracle Primavera P6
 */

export interface XERTask {
  task_id: string
  task_code: string
  task_name: string
  wbs_code: string
  status_code: string
  start_date: string
  finish_date: string
  duration_type: string
  target_duration: number
  actual_duration?: number
  percent_complete?: number
  predecessor?: XERPredecessor[]
}

export interface XERPredecessor {
  pred_task_id: string
  pred_type: string // FS, SS, FF, SF
  lag_hr?: number
}

/**
 * Convert CPOS project to XER format
 */
export function exportToXER(project: any, sowItems: any[]): string {
  const tasks = convertTasksToXER(sowItems, project)
  return generateXERFile(project, tasks)
}

/**
 * Convert CPOS SOW items to XER tasks
 */
function convertTasksToXER(sowItems: any[], project: any): XERTask[] {
  const tasks: XERTask[] = []
  const taskMap = new Map<string, string>()
  let taskIdCounter = 1

  // Sort by hierarchy level and sow_number
  const sortedItems = sowItems.sort((a, b) => {
    if (a.hierarchy_level !== b.hierarchy_level) {
      return a.hierarchy_level - b.hierarchy_level
    }
    return a.sow_number.localeCompare(b.sow_number)
  })

  sortedItems.forEach((item) => {
    const taskId = `TASK${taskIdCounter++}`
    taskMap.set(item.sow_id, taskId)

    const task: XERTask = {
      task_id: taskId,
      task_code: item.sow_number,
      task_name: item.sub_item_l3 || item.item_l2 || item.scope_l3 || item.sow_number,
      wbs_code: item.sow_number,
      status_code: item.status || 'Not Started',
      start_date: (item.baseline_start || item.planned_start || project.start_date) as string,
      finish_date: (item.baseline_end || item.planned_end || project.end_date) as string,
      duration_type: 'FixedDurationUnits',
      target_duration: (item.baseline_days || item.planned_days || 0) * 8, // Convert days to hours
    }

    // Add actual duration if available
    if (item.actual_days) {
      task.actual_duration = item.actual_days * 8
    }

    // Add percent complete if available
    if (item.percent_complete !== undefined) {
      task.percent_complete = item.percent_complete
    }

    // Add dependencies if available
    if (item.dep_on_sow) {
      const predecessorTaskId = taskMap.get(item.dep_on_sow)
      if (predecessorTaskId) {
        const predType = item.dep_type || 'FS'
        task.predecessor = [{ pred_task_id: predecessorTaskId, pred_type: predType }]
      }
    }

    tasks.push(task)
  })

  return tasks
}

/**
 * Generate XER file content
 * XER format: ASCII text with specific record types
 */
function generateXERFile(project: any, tasks: XERTask[]): string {
  let xer = 'ERMHDR\t%R\t1\t1\n' // XER header
  xer += 'EXPORT\tUSER\tCPOS\t2026-06-03\t' + new Date().toISOString() + '\n'
  
  // Project record
  xer += 'PROJWBS\tPROJ_WBS_ID\tPROJECT\t' + project.project_name + '\t' + project.start_date + '\t' + project.end_date + '\n'
  xer += 'PROJECT\tPROJ_ID\t' + project.project_name + '\t' + project.project_code + '\t' + project.project_name + '\t' + project.start_date + '\t' + project.end_date + '\n'
  
  // Task records
  tasks.forEach(task => {
    xer += 'TASK\t' + task.task_id + '\t' + task.task_code + '\t' + task.task_name + '\t' + task.wbs_code + '\t' + task.status_code + '\t' + task.start_date + '\t' + task.finish_date + '\t' + task.duration_type + '\t' + task.target_duration + '\n'
    
    if (task.actual_duration !== undefined) {
      xer += 'TASKACTV\t' + task.task_id + '\t' + task.actual_duration + '\n'
    }
    
    if (task.percent_complete !== undefined) {
      xer += 'TASKPCT\t' + task.task_id + '\t' + task.percent_complete + '\n'
    }
    
    // Predecessor records
    if (task.predecessor) {
      task.predecessor.forEach(pred => {
        xer += 'TASKPRED\t' + task.task_id + '\t' + pred.pred_task_id + '\t' + pred.pred_type
        if (pred.lag_hr !== undefined) {
          xer += '\t' + pred.lag_hr
        }
        xer += '\n'
      })
    }
  })
  
  xer += 'TMRTASK\tEND\n' // End marker
  
  return xer
}
