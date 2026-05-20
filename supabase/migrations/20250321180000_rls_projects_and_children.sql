-- CPOS: Row Level Security — owners see their projects; admins see all.
-- Run in Supabase Dashboard → SQL Editor (or: supabase db push after linking).
-- Safe to re-run: drops policies with same names first (Postgres 14+).

-- ── Helpers (SECURITY DEFINER reads tables without RLS blocking) ──────────

CREATE OR REPLACE FUNCTION public.is_app_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.users u
    WHERE u.userid = auth.uid()
      AND lower(coalesce(u.role, '')) IN ('admin', 'administrator')
  );
$$;

REVOKE ALL ON FUNCTION public.is_app_admin() FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.is_app_admin() TO authenticated;

CREATE OR REPLACE FUNCTION public.user_can_access_project(p_projectid uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.projects p
    WHERE p.projectid = p_projectid
      AND (
        p.user_id = auth.uid()
        OR p.userid = auth.uid()
        OR public.is_app_admin()
      )
  );
$$;

REVOKE ALL ON FUNCTION public.user_can_access_project(uuid) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.user_can_access_project(uuid) TO authenticated;

-- ── Optional: backfill legacy rows (run once if you had NULL owners) ───────
-- UPDATE public.projects
-- SET user_id = auth.uid(), userid = auth.uid()
-- WHERE user_id IS NULL AND userid IS NULL;
-- (Only works in SQL Editor as a specific user; usually you assign per-row in Table Editor.)

-- ── USERS ───────────────────────────────────────────────────────────────────

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS cpos_users_select ON public.users;
CREATE POLICY cpos_users_select ON public.users
  FOR SELECT TO authenticated
  USING (userid = auth.uid() OR public.is_app_admin());

DROP POLICY IF EXISTS cpos_users_insert ON public.users;
CREATE POLICY cpos_users_insert ON public.users
  FOR INSERT TO authenticated
  WITH CHECK (userid = auth.uid());

DROP POLICY IF EXISTS cpos_users_update ON public.users;
CREATE POLICY cpos_users_update ON public.users
  FOR UPDATE TO authenticated
  USING (userid = auth.uid() OR public.is_app_admin())
  WITH CHECK (userid = auth.uid() OR public.is_app_admin());

-- ── PROJECTS ─────────────────────────────────────────────────────────────────

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS cpos_projects_select ON public.projects;
CREATE POLICY cpos_projects_select ON public.projects
  FOR SELECT TO authenticated
  USING (
    user_id = auth.uid()
    OR userid = auth.uid()
    OR public.is_app_admin()
  );

DROP POLICY IF EXISTS cpos_projects_insert ON public.projects;
CREATE POLICY cpos_projects_insert ON public.projects
  FOR INSERT TO authenticated
  WITH CHECK (
    user_id = auth.uid()
    AND userid = auth.uid()
  );

DROP POLICY IF EXISTS cpos_projects_update ON public.projects;
CREATE POLICY cpos_projects_update ON public.projects
  FOR UPDATE TO authenticated
  USING (
    user_id = auth.uid()
    OR userid = auth.uid()
    OR public.is_app_admin()
  )
  WITH CHECK (
    public.is_app_admin()
    OR (user_id = auth.uid() AND userid = auth.uid())
  );

DROP POLICY IF EXISTS cpos_projects_delete ON public.projects;
CREATE POLICY cpos_projects_delete ON public.projects
  FOR DELETE TO authenticated
  USING (
    user_id = auth.uid()
    OR userid = auth.uid()
    OR public.is_app_admin()
  );

-- ── Project-scoped tables ───────────────────────────────────────────────────

-- Macro pattern: SELECT/INSERT/UPDATE/DELETE using user_can_access_project(projectid)

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

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'cpos_' || t || '_select', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR SELECT TO authenticated USING (public.user_can_access_project(projectid))',
      'cpos_' || t || '_select',
      t
    );

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'cpos_' || t || '_insert', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR INSERT TO authenticated WITH CHECK (public.user_can_access_project(projectid))',
      'cpos_' || t || '_insert',
      t
    );

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'cpos_' || t || '_update', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR UPDATE TO authenticated USING (public.user_can_access_project(projectid)) WITH CHECK (public.user_can_access_project(projectid))',
      'cpos_' || t || '_update',
      t
    );

    EXECUTE format('DROP POLICY IF EXISTS %I ON public.%I', 'cpos_' || t || '_delete', t);
    EXECUTE format(
      'CREATE POLICY %I ON public.%I FOR DELETE TO authenticated USING (public.user_can_access_project(projectid))',
      'cpos_' || t || '_delete',
      t
    );
  END LOOP;
END $$;

-- ── RESOURCES (no projectid — shared catalogue) ─────────────────────────────

ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS cpos_resources_select ON public.resources;
CREATE POLICY cpos_resources_select ON public.resources
  FOR SELECT TO authenticated USING (true);

DROP POLICY IF EXISTS cpos_resources_insert ON public.resources;
CREATE POLICY cpos_resources_insert ON public.resources
  FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS cpos_resources_update ON public.resources;
CREATE POLICY cpos_resources_update ON public.resources
  FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS cpos_resources_delete ON public.resources;
CREATE POLICY cpos_resources_delete ON public.resources
  FOR DELETE TO authenticated USING (true);
