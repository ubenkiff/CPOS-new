-- CPOS: Projects-only RLS (per test phase)

ALTER TABLE public.projects
ADD COLUMN IF NOT EXISTS user_id uuid REFERENCES auth.users(id);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users see own projects" ON public.projects;
CREATE POLICY "Users see own projects" ON public.projects
FOR ALL
USING (auth.uid() = user_id);
