# QuantWeb Studio

Next.js 14 · TypeScript · CSS Modules · Vercel

---

## Get started in Cursor

```bash
# 1. Open this folder in Cursor
# File → Open Folder → select quantweb-nextjs/

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Open http://localhost:3000
```

That's it. The site runs locally immediately.

---

## Deploy to Vercel (5 minutes)

### Option A — Drag and drop
1. Run `npm run build` — make sure it passes
2. Go to vercel.com → New Project → drag this folder in
3. Vercel auto-detects Next.js — click Deploy

### Option B — GitHub (recommended for ongoing work)
1. Push this repo to GitHub
2. Go to vercel.com → New Project → Import from GitHub
3. Vercel auto-deploys on every `git push`

### Connect your domain
1. In Vercel: Project Settings → Domains → Add `quantweb.co.uk`
2. In your registrar: Add CNAME `www` → `cname.vercel-dns.com`
3. Add A record `@` → `76.76.21.21`

---

## Things to update before going live

Search for these in the codebase and replace:

| Find | Replace with |
|------|-------------|
| `+44-XXXX-XXXXXX` | Your real phone |
| `hello@quantweb.co.uk` | Your real email |
| `+44XXXXXXXXXX` | Your real phone (tel: link) |
| `YOUR_FORM_ID` | Formspree form ID |
| Map placeholder in Location.tsx | Real Google Maps embed |

---

## Using Cursor AI on this project

The `.cursorrules` file tells Cursor exactly how this project works.
Open Cursor's AI chat and try:

- **"Add a new service page for web design Cardiff"**
- **"Add a blog section with 3 sample posts"**
- **"Connect the contact form to Formspree"**
- **"Add Google Analytics 4 with measurement ID G-XXXXXXXXXX"**
- **"Add a portfolio/case studies section"**
- **"Make the hero headline animate word by word"**

Cursor will follow the project conventions automatically.

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        Root layout + SEO metadata + JSON-LD schema
│   ├── page.tsx          Homepage
│   ├── globals.css       Design tokens (CSS variables) + animations
│   ├── sitemap.ts        Auto-generated sitemap.xml
│   └── robots.ts         Auto-generated robots.txt
└── components/
    ├── Nav.tsx            Sticky frosted-glass nav
    ├── Ticker.tsx         Scrolling keyword ticker
    ├── Hero.tsx           Hero with particle canvas animation
    ├── Stats.tsx          Animated count-up stats
    ├── Services.tsx       4-card service grid
    ├── WhyUs.tsx          Why us + animated rank card
    ├── Location.tsx       South Wales location section
    ├── Faq.tsx            Accordion FAQ (SEO: FAQPage schema in layout)
    ├── Cta.tsx            Contact form section
    ├── Footer.tsx         Full footer with links
    └── RevealProvider.tsx Scroll reveal IntersectionObserver
```

---

## SEO checklist (do after deploying)

- [ ] Submit `https://www.quantweb.co.uk/sitemap.xml` to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Test schema at search.google.com/test/rich-results
- [ ] Test speed at pagespeed.web.dev (target 95+ mobile)
- [ ] Create Google Business Profile → business.google.com
- [ ] Get 5+ Google reviews in first month
- [ ] Submit to Yell, Bark.com, Clutch.co, DesignRush

---

## Add GA4

In `src/app/layout.tsx`, add inside `<head>`:

```tsx
{/* Google Analytics 4 */}
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
<script dangerouslySetInnerHTML={{ __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
`}} />
```

---

## Add new pages

```bash
# Example: dedicated SEO service page
mkdir src/app/services/seo-agency-south-wales
touch src/app/services/seo-agency-south-wales/page.tsx
```

Then add the URL to `src/app/sitemap.ts` and build the page with the metadata export.

---

Built with Next.js 14 · Deployed on Vercel · © 2026 QuantWeb Studio
