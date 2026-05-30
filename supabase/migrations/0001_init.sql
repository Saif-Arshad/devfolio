-- ============================================================
-- Devfolio: database schema (articles + projects + assets bucket)
-- Run this in Supabase Studio > SQL Editor (or via the Supabase CLI).
-- ============================================================

-- ---------- Tables ----------

create table if not exists public.articles (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  title        text not null,
  content      text,
  slug         text not null unique,
  description  text,
  tags         text[] not null default '{}',
  banner_image text,
  is_publish   boolean not null default false
);

create table if not exists public.projects (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  content      text,
  slug         text not null unique,
  description  text,
  tags         text[] not null default '{}',
  tech         text[] not null default '{}',
  banner       text,
  gallery      text[] not null default '{}',
  github_url   text,
  live_url     text,
  is_featured  boolean not null default false,
  is_publish   boolean not null default false
);

create index if not exists articles_created_at_idx on public.articles (created_at desc);
create index if not exists projects_created_at_idx on public.projects (created_at desc);

-- ---------- Row Level Security ----------

alter table public.articles enable row level security;
alter table public.projects enable row level security;

-- Public (anon) can read only published rows.
drop policy if exists "articles public read published" on public.articles;
create policy "articles public read published"
  on public.articles for select
  to anon
  using (is_publish = true);

drop policy if exists "projects public read published" on public.projects;
create policy "projects public read published"
  on public.projects for select
  to anon
  using (is_publish = true);

-- Authenticated admin can read everything (drafts included) and write.
drop policy if exists "articles admin all" on public.articles;
create policy "articles admin all"
  on public.articles for all
  to authenticated
  using (true)
  with check (true);

drop policy if exists "projects admin all" on public.projects;
create policy "projects admin all"
  on public.projects for all
  to authenticated
  using (true)
  with check (true);

-- ---------- Storage bucket for images ----------

insert into storage.buckets (id, name, public)
values ('assets', 'assets', true)
on conflict (id) do update set public = true;

-- Anyone can read files (bucket is public).
drop policy if exists "assets public read" on storage.objects;
create policy "assets public read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'assets');

-- Only authenticated admin can upload / modify / delete.
drop policy if exists "assets admin write" on storage.objects;
create policy "assets admin write"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'assets');

drop policy if exists "assets admin update" on storage.objects;
create policy "assets admin update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'assets')
  with check (bucket_id = 'assets');

drop policy if exists "assets admin delete" on storage.objects;
create policy "assets admin delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'assets');
