-- Create activity logs table for historical tracking
CREATE TABLE IF NOT EXISTS public.activity_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES public.projects(projectid) ON DELETE CASCADE,
  sow_item_id UUID NOT NULL REFERENCES public.sow_items(sow_id) ON DELETE CASCADE,
  
  -- Who logged
  logged_by UUID REFERENCES auth.users(id),
  logged_by_email TEXT,
  logged_date DATE NOT NULL DEFAULT CURRENT_DATE,
  
  -- Progress data at time of logging
  actual_start DATE,
  actual_end DATE,
  actual_days INTEGER,
  percent_complete INTEGER DEFAULT 0,
  actual_cost DECIMAL(12,2),
  
  -- Resources
  labor_hours INTEGER,
  plant_hours INTEGER,
  materials_qty DECIMAL(12,2),
  materials_unit TEXT,
  
  -- Notes & evidence
  progress_notes TEXT,
  delay_reason TEXT,
  photo_urls TEXT[] DEFAULT '{}',
  
  -- Status at time of logging
  status TEXT DEFAULT 'Not Started',
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.activity_logs ENABLE ROW LEVEL SECURITY;

-- RLS Policies
CREATE POLICY "Users can view their project activity logs"
  ON public.activity_logs FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM public.projects p
      WHERE p.projectid = activity_logs.project_id
      AND (p.user_id = auth.uid() OR p.userid = auth.uid())
    )
  );

CREATE POLICY "Users can insert activity logs to their projects"
  ON public.activity_logs FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.projects p
      WHERE p.projectid = activity_logs.project_id
      AND (p.user_id = auth.uid() OR p.userid = auth.uid())
    )
  );

CREATE POLICY "Users can update their activity logs"
  ON public.activity_logs FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.projects p
      WHERE p.projectid = activity_logs.project_id
      AND (p.user_id = auth.uid() OR p.userid = auth.uid())
    )
  );

CREATE POLICY "Users can delete their activity logs"
  ON public.activity_logs FOR DELETE
  USING (
    EXISTS (
      SELECT 1 FROM public.projects p
      WHERE p.projectid = activity_logs.project_id
      AND (p.user_id = auth.uid() OR p.userid = auth.uid())
    )
  );

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_activity_logs_project ON activity_logs(project_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_sow_item ON activity_logs(sow_item_id);
CREATE INDEX IF NOT EXISTS idx_activity_logs_date ON activity_logs(logged_date);
CREATE INDEX IF NOT EXISTS idx_activity_logs_status ON activity_logs(status);
