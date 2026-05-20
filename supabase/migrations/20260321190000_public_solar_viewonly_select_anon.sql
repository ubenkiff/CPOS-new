-- CPOS: Public view-only access for the Solar Power Plant project (anon SELECT only)
-- What this does:
-- - Allows unauthenticated users to SELECT `projects` + all project-scoped child rows for one specific project UUID.
-- - Allows unauthenticated users to read document files from the `cpos-documents` storage bucket for that project.
--
-- Run in Supabase Dashboard → SQL Editor (paste entire file → Run) OR with `npx supabase db push`.

-- 1) Helper: identify the single public project
CREATE OR REPLACE FUNCTION public.is_public_project(p_projectid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT p_projectid = 'e03418fd-0ef2-4080-90c6-f18009bb12d1'::uuid;
$$;

-- 2) Projects table: allow anon SELECT for that project
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS cpos_public_projects_select ON public.projects;
CREATE POLICY cpos_public_projects_select ON public.projects
FOR SELECT TO anon
USING (public.is_public_project(projectid));

-- 3) Project-scoped tables: allow anon SELECT for that project
DO $$
DECLARE
  t text;
  tables text[] := ARRAY[
    'boq_items',
    'cost_entries',
    'dashboard_metrics',
    'documents',
    'materials',
    'project_timeline',
    'reports',
    'sow_items',
    'sow_resources',
    'tasks'
  ];
BEGIN
  FOREACH t IN ARRAY tables
  LOOP
    EXECUTE format('ALTER TABLE public.%I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'cpos_public_' || t || '_select', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR SELECT TO anon USING (public.is_public_project(projectid))',
      'cpos_public_' || t || '_select',
      t
    );
  END LOOP;
END $$;

-- 4) Storage downloads (optional)
-- If you want documents downloads (createSignedUrl) to work for anon users,
-- you must also add a policy on `storage.objects`.
-- Your SQL user currently errors on storage ownership ("must be owner of table objects"),
-- so we skip storage changes for now. With public table policies in place,
-- the Documents page can still list files, but downloads may fail until storage policy is added.

