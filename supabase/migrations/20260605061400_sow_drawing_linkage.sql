-- CPOS: Add drawing linkage columns to sow_items table
ALTER TABLE public.sow_items 
ADD COLUMN IF NOT EXISTS drawing_ids TEXT[] DEFAULT '{}';

ALTER TABLE public.sow_items 
ADD COLUMN IF NOT EXISTS drawing_paths JSONB DEFAULT '{}';
