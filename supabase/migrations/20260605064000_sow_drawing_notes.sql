-- CPOS: Add drawing_notes column to sow_items table
ALTER TABLE public.sow_items 
ADD COLUMN IF NOT EXISTS drawing_notes JSONB DEFAULT '{}';
