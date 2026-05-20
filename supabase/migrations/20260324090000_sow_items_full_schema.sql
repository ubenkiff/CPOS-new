-- CPOS: Ensure sow_items has all columns required by the SOW module.
-- Safe to run multiple times (uses ADD COLUMN IF NOT EXISTS).

create table if not exists public.sow_items (
  sow_id          uuid primary key default gen_random_uuid(),
  projectid       uuid not null references public.projects(projectid) on delete cascade,
  sow_number      text not null,
  hierarchy_level integer not null default 3, -- 1=L1, 2=L2, 3=L3
  parent_id       uuid references public.sow_items(sow_id) on delete set null,

  -- Identity
  scope_l1        text,
  item_l2         text,
  sub_item_l3     text,
  particulars     text,
  assigned_to     text,

  -- Schedule
  baseline_start  date,
  baseline_days   numeric,
  baseline_end    date,
  planned_start   date,
  planned_days    numeric,
  planned_end     date,
  actual_start    date,
  actual_days     numeric,
  actual_end      date,
  percent_complete numeric default 0,
  schedule_variance numeric,

  -- BOQ
  unit            text,
  quantity        numeric,
  waste_pct       numeric default 0,
  net_qty         numeric,
  unit_rate       numeric,
  boq_amount      numeric,

  -- Cost
  estimated_cost  numeric,
  actual_cost     numeric,
  cost_variance   numeric,
  cost_var_pct    numeric,

  -- Resources
  plant           text,
  site_equipment  text,
  manpower        text,

  -- Status & Risk
  risk_level      text default 'Low',
  status          text default 'Not Started',
  dep_on          text,
  dep_type        text default 'FS',
  is_critical_path boolean default false,
  notes           text,

  created_at      timestamptz default now(),
  updated_at      timestamptz default now()
);

-- Add any missing columns to existing table
alter table public.sow_items add column if not exists hierarchy_level integer not null default 3;
alter table public.sow_items add column if not exists parent_id uuid references public.sow_items(sow_id) on delete set null;
alter table public.sow_items add column if not exists scope_l1 text;
alter table public.sow_items add column if not exists item_l2 text;
alter table public.sow_items add column if not exists sub_item_l3 text;
alter table public.sow_items add column if not exists particulars text;
alter table public.sow_items add column if not exists assigned_to text;
alter table public.sow_items add column if not exists baseline_start date;
alter table public.sow_items add column if not exists baseline_days numeric;
alter table public.sow_items add column if not exists baseline_end date;
alter table public.sow_items add column if not exists planned_start date;
alter table public.sow_items add column if not exists planned_days numeric;
alter table public.sow_items add column if not exists planned_end date;
alter table public.sow_items add column if not exists actual_start date;
alter table public.sow_items add column if not exists actual_days numeric;
alter table public.sow_items add column if not exists actual_end date;
alter table public.sow_items add column if not exists percent_complete numeric default 0;
alter table public.sow_items add column if not exists schedule_variance numeric;
alter table public.sow_items add column if not exists unit text;
alter table public.sow_items add column if not exists quantity numeric;
alter table public.sow_items add column if not exists waste_pct numeric default 0;
alter table public.sow_items add column if not exists net_qty numeric;
alter table public.sow_items add column if not exists unit_rate numeric;
alter table public.sow_items add column if not exists boq_amount numeric;
alter table public.sow_items add column if not exists estimated_cost numeric;
alter table public.sow_items add column if not exists actual_cost numeric;
alter table public.sow_items add column if not exists cost_variance numeric;
alter table public.sow_items add column if not exists cost_var_pct numeric;
alter table public.sow_items add column if not exists plant text;
alter table public.sow_items add column if not exists site_equipment text;
alter table public.sow_items add column if not exists manpower text;
alter table public.sow_items add column if not exists risk_level text default 'Low';
alter table public.sow_items add column if not exists dep_on text;
alter table public.sow_items add column if not exists dep_type text default 'FS';
alter table public.sow_items add column if not exists is_critical_path boolean default false;
alter table public.sow_items add column if not exists notes text;
alter table public.sow_items add column if not exists updated_at timestamptz default now();

-- Indexes
create index if not exists sow_items_projectid_idx on public.sow_items (projectid);
create index if not exists sow_items_sow_number_idx on public.sow_items (projectid, sow_number);

-- RLS (already covered by the macro in 20250321180000, but ensure it's on)
alter table public.sow_items enable row level security;

-- Ensure updated_at auto-maintained
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists trg_sow_items_updated_at on public.sow_items;
create trigger trg_sow_items_updated_at
before update on public.sow_items
for each row
execute function public.set_updated_at();

-- Policies (needed if this table is created after the RLS macro migration ran)
drop policy if exists cpos_sow_items_select on public.sow_items;
create policy cpos_sow_items_select on public.sow_items
  for select to authenticated
  using (public.user_can_access_project(projectid));

drop policy if exists cpos_sow_items_insert on public.sow_items;
create policy cpos_sow_items_insert on public.sow_items
  for insert to authenticated
  with check (public.user_can_access_project(projectid));

drop policy if exists cpos_sow_items_update on public.sow_items;
create policy cpos_sow_items_update on public.sow_items
  for update to authenticated
  using (public.user_can_access_project(projectid))
  with check (public.user_can_access_project(projectid));

drop policy if exists cpos_sow_items_delete on public.sow_items;
create policy cpos_sow_items_delete on public.sow_items
  for delete to authenticated
  using (public.user_can_access_project(projectid));
