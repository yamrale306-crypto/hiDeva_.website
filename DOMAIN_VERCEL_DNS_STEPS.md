# Vercel custom domain DNS (hideva.com)

Your feedback indicates Vercel requires enabling **Vercel DNS** by updating nameservers.

## Required nameservers (Vercel DNS mode)
Set your domain’s nameservers to:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

## Required DNS records (Vercel verification)
To verify `hideva.com` with Vercel, your DNS provider must match Vercel’s records:
- **Type:** `A`
- **Name/Host:** `@`
- **Value:** `216.198.79.1`

(If Vercel shows additional records for `www.hideva.com`, add them as well.)

## Steps
1. In your domain registrar (where `hideva.com` is registered), update **nameservers** to:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. Ensure the apex record `@` (Type `A`) points to `216.198.79.1`.
3. Save changes.
4. Wait for DNS propagation.
5. In Vercel: open the project → **Settings → Domains** → ensure `hideva.com` shows **Verified**.
6. Validate in browser:
   - `https://hideva.com`
   - `https://www.hideva.com` (if added)

## Optional
If you want HTTP → HTTPS redirects, ensure Vercel domain settings are set to redirect automatically (usually default for new domains).


