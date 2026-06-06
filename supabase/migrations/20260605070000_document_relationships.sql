-- Add columns to documents table to support SOW relationships and categories
ALTER TABLE public.documents 
ADD COLUMN IF NOT EXISTS document_type TEXT;

ALTER TABLE public.documents 
ADD COLUMN IF NOT EXISTS related_sow_item_id UUID REFERENCES public.sow_items(sow_id) ON DELETE SET NULL;

ALTER TABLE public.documents 
ADD COLUMN IF NOT EXISTS document_category TEXT;
