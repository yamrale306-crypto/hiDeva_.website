# TODO — hiDeva Call Assistant

## Analytics
- [x] Fix duplicate/conflicting React components files (remove unused variants)
- [ ] Event tracking (CTA clicks, form submissions)
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Vercel Analytics

## SEO
- [ ] Metadata
- [ ] Open Graph
- [ ] Sitemap
- [ ] Robots.txt
- [ ] Structured data
- [ ] Canonical URLs

## Performance
- [x] Fix bug: IntegrationPanel uses Tailwind dynamic class `text-${int.c}` which Tailwind CDN may not generate
- [x] Animation to side panels (reveal effects)
- [x] Fix issue: useReveal missing dependency array (causes effect to run every render)
- [x] Fix issue: config.js lacks supabase load guard

## Clear CTA
- [ ] Single primary CTA
- [ ] Consistent button placement
- [ ] Strong value proposition
- [ ] Reduced distractions

## Trust
- [x] Connect to GitHub repository
- [x] Fix bug: AuthModal state persists on close (now resets on open change)
- [x] Fix issue: config.js relies on global `supabase` but not guarded; ensure `supabase` is loaded before calling initSupabase
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Contact page
- [ ] FAQ
- [ ] Security information
- [ ] Footer with essential links

## Snapshot System (Completed)
- [x] Add Snapshot System as a feature
- [x] Add Snapshots panel to Showcase with call recording/transcription/action items
- [x] Camera icon for visual representation