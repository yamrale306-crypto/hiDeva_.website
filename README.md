# hiDeva

AI Employee for Phone Calls - Enterprise-grade AI voice platform.

## Supabase Configuration

Credentials are pre-configured in `config.js`:
- Project URL: `https://weukzfduqslszpasrlfk.supabase.co`
- Anon Key: Already set

### Required: Create the subscribers table in Supabase SQL editor:

```sql
create table subscribers (
  id bigint generated always as identity primary key,
  email text not null unique,
  created_at timestamp with time zone default now()
);
```

Enable email authentication in Supabase Auth settings

### Vercel Deployment

```bash
npm install -g vercel
vercel login
vercel
```

Or connect your repo to Vercel for automatic deployments.

## Features Added

- **Supabase Auth**: Sign up / sign in modal
- **Supabase DB**: Newsletter subscription via `subscribers` table
- **Vercel Integration**: One-click deploy configuration
- **Integration Panel**: Dedicated showcase tab for Supabase & Vercel
- **Features Section**: Updated with Supabase DB and Vercel Deploy badges

## Local Development

Double-click `run-static-server.bat` or run in PowerShell:

```powershell
python -m http.server 8080
```

Then open `http://localhost:8080`
