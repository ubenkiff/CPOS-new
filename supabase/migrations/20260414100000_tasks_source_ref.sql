-- Add source_ref to tasks so template-synced punch tasks can be identified
-- and re-synced without touching user-created tasks.
-- 'cpos-l1-{sow_number}' = synced from CPOS Master Template L1 scope row.

ALTER TABLE public.tasks ADD COLUMN IF NOT EXISTS source_ref text;
CREATE INDEX IF NOT EXISTS tasks_source_ref_idx ON public.tasks (projectid, source_ref);
