create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  name text,
  email text,
  subject text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists public.feedback (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete set null,
  rating integer,
  liked text,
  improvements text,
  features_used text[],
  nps_score integer,
  comments text,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;
alter table public.feedback enable row level security;

drop policy if exists "Anyone can submit contact message" on public.contact_messages;
create policy "Anyone can submit contact message"
  on public.contact_messages for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Anyone can submit feedback" on public.feedback;
create policy "Anyone can submit feedback"
  on public.feedback for insert
  to anon, authenticated
  with check (true);
