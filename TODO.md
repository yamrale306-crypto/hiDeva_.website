# TODO — hiDeva Call Assistant

## Analytics
- [ ] Fix duplicate/conflicting React components files (remove unused variants)
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
- [ ] Fix bug: IntegrationPanel uses Tailwind dynamic class `text-${int.c}` which Tailwind CDN may not generate
- [x] Animation to side panels (reveal effects)
- [ ] Fix issue: useReveal missing dependency array (causes effect to run every render)
- [ ] Fix issue: useEffect in Icon recreates icons too often; ensure cleanup / memoization
- [ ] Fix server script: run-static-server-simple.bat currently does not serve (just shows file:// instructions)
- [ ] Add minimal lint/static check (node + eslint if possible)
- [ ] Image optimization
- [ ] Font optimization
- [ ] JavaScript optimization
- [ ] Lazy loading
- [ ] Core Web Vitals

## Clear CTA
- [ ] Single primary CTA
- [ ] Consistent button placement
- [ ] Strong value proposition
- [ ] Reduced distractions

## Trust
- [ ] Fix bug: AuthModal mode toggle logic uses "signin"/"signup" but initial logic expects "signup"/"signin" (verify UI)
- [ ] Fix issue: config.js relies on global `supabase` but not guarded; ensure `supabase` is loaded before calling initSupabase
- [ ] Privacy Policy
- [ ] Terms of Service
- [ ] Contact page
- [ ] FAQ
- [ ] Security information
- [ ] Footer with essential links