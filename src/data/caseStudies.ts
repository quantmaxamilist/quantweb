export type CaseStudyData = {
  id: string
  title: string
  accentWord?: string
  subtitle: string
  desktopImg?: string
  mobileImg?: string
  gradient?: string
  mono?: string
  url: string
  domain: string
  challenge: string
  solution: string
  services: string[]
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'asteria',
    title: 'Asteria',
    subtitle: 'Wedding planning platform · UK',
    url: 'https://asteria-events.com',
    domain: 'asteria-events.com',
    challenge:
      'A new wedding-planning start-up needed a launch website and clickable previews of its "build your wedding" platform to test with couples and suppliers before the full build.',
    solution:
      'A calm, editorial site on its own domain with an olive-and-ivory brand, an interactive wedding builder, show-only previews of both the couple app and the supplier app, and early-access sign-up forms.',
    services: ['Brand & Website', 'Interactive Builder', 'Couple & Supplier Previews', 'Early-access Forms', 'Next.js'],
  },
  {
    id: 'voyager',
    title: 'Voyager',
    accentWord: 'Camper Conversions',
    subtitle: 'Bespoke camper vans · Wrexham, North Wales',
    url: 'https://voyagercamperconversions.com',
    domain: 'voyagercamperconversions.com',
    challenge:
      'A camper conversion specialist was stuck with a dated red site, an old stock photo and stock lists that were out of date.',
    solution:
      'A full black-and-white rebrand with a cinematic hero of their own van, a stock page where every van gets its own detail page and gallery, plus pages for conversions, hire and finance.',
    services: ['Rebrand', 'Stock Listings', 'Vehicle Detail Pages', 'Hire & Finance Pages', 'Local SEO'],
  },
  {
    id: 'dreamhome',
    title: 'Dream Home',
    accentWord: 'Mortgages',
    subtitle: 'Fee-free mortgage broker · Wakefield',
    url: 'https://dreamhomemortgages.co.uk',
    domain: 'dreamhomemortgages.co.uk',
    challenge:
      'A fee-free mortgage broker needed a bold, trustworthy site that explains who they help — with every FCA disclaimer in the right place.',
    solution:
      'A bold gold-and-black build with a who-we-help section for first-time buyers, the self-employed and landlords, a clear three-step process, full FCA regulatory text and a working contact form — live on their own domain.',
    services: ['Bold Brand Design', 'Multi-page Build', 'FCA Compliance', 'Web3Forms', 'Local SEO'],
  },
  {
    id: 'vector',
    title: 'Vector',
    accentWord: 'Specialist',
    subtitle: 'Removals, transport & installation · London',
    url: 'https://vectorspecialist.co.uk',
    domain: 'vectorspecialist.co.uk',
    challenge:
      'A London removals and installation company needed to come across as approachable and reliable — not like an industrial logistics firm.',
    solution:
      'A clean multi-page site rebuilt around reliable removals, transport and installation for homes and businesses, with clear service pages, a packing-materials price list and quote buttons on every page.',
    services: ['Copy Repositioning', 'Service Pages', 'Price List', 'Quote CTAs', 'Mobile-first'],
  },
  {
    id: 'rs1',
    title: 'RS1',
    accentWord: 'Capital',
    subtitle: 'Investment, lending & advisory · London / Spain',
    gradient: 'linear-gradient(135deg, #0a0a0a, #3a2e0a)',
    mono: 'RS1',
    url: 'https://rs1.uk',
    domain: 'rs1.uk',
    challenge:
      'A specialist investment and turnaround firm operating across the UK and Europe needed a website with the gravitas of a major institution.',
    solution:
      'A refined black-and-gold, multi-page build with an Acquisitions offering, a "Businesses We Buy" page, an FAQ accordion, WhatsApp contact and full structured data — migrated cleanly from the previous developer with zero email downtime.',
    services: [
      'Premium Brand Design',
      'Multi-page Build',
      'FAQ Accordion',
      'WhatsApp Integration',
      'Schema.org',
    ],
  },
  {
    id: 'scarlatt',
    title: 'Scarlatt',
    accentWord: 'Property',
    subtitle: 'Renovations & extensions · Cheshire',
    gradient: 'linear-gradient(135deg, #160607, #3a0d10)',
    mono: 'Scarlatt',
    url: 'https://scarlatt.co.uk',
    domain: 'scarlatt.co.uk',
    challenge:
      'A Cheshire renovation firm needed to show the quality of its work and rank locally, with project galleries that felt genuinely premium.',
    solution:
      'A bold editorial build with per-project case pages, snap-centering photo carousels tuned for mobile, Cheshire-targeted SEO and structured data, plus an enquiry form wired straight to their inbox.',
    services: [
      'Project Portfolio',
      'Mobile Carousels',
      'Local SEO',
      'Web3Forms',
      'Structured Data',
    ],
  },
  {
    id: 'boxed-fresh',
    title: 'The Boxed Fresh',
    accentWord: 'Meals Co.',
    subtitle: 'Chef-prepared meal prep · West Yorkshire',
    gradient: 'linear-gradient(135deg, #0c1f12, #123a1f)',
    mono: 'Boxed\nFresh',
    url: 'https://boxed-fresh.vercel.app',
    domain: 'boxed-fresh.vercel.app',
    challenge:
      'A high-protein meal-prep brand needed a premium, appetising site with a full menu and real macros — and a way out of scattered order forms.',
    solution:
      'A punchy multi-page build with studio-cut-out food photography, an interactive menu where every dish opens real kcal and macro data, and a clear ordering flow — with a password-locked orders dashboard on the roadmap.',
    services: [
      'Interactive Menu',
      'Macro Calculator',
      'Studio Photography',
      'Multi-page Build',
      'Ordering Flow',
    ],
  },
  {
    id: 'ecoheat',
    title: 'EcoHeat',
    accentWord: 'ASHP',
    subtitle: 'Renewable heating · Lancashire / North West',
    gradient: 'linear-gradient(135deg, #07231a, #0c4a34)',
    mono: 'EcoHeat',
    url: 'https://ecoheatashp.co.uk',
    domain: 'ecoheatashp.co.uk',
    challenge:
      'A 25-year, MCS-certified heating installer had a dated site with poor imagery that undersold a genuinely premium service.',
    solution:
      'A clean, modern rebuild with dedicated service pages for heat pumps, solar, underfloor and servicing, an accreditations bar (MCS, RECC, IWA), an Our Work gallery and a connected contact form — all on their own domain.',
    services: [
      'Service Pages',
      'Accreditations Bar',
      'Project Gallery',
      'Web3Forms',
      'Core Web Vitals',
    ],
  },
  {
    id: 'jaggerz',
    title: 'Jaggerz',
    accentWord: 'Takeaway',
    subtitle: 'Fresh food & coffee · Narberth, Pembrokeshire',
    desktopImg: '/work/jaggerz-desktop.jpg',
    mobileImg: '/work/jaggerz-mobile.jpg',
    url: 'https://jaggerztakeaway.co.uk',
    domain: 'jaggerztakeaway.co.uk',
    challenge:
      'A new takeaway in Narberth needed a site that showed its real menu and prices, felt fresh and appetising, and made it effortless for locals to call or find them.',
    solution:
      'A bold, warm one-page site with the real menu, live opening hours, real Google reviews and click-to-call — plus local SEO so it ranks for "takeaway Narberth". Built in days, on a custom domain.',
    services: [
      'Brand-aligned Design',
      'Real Menu & Pricing',
      'Mobile Responsive',
      'Google Reviews',
      'Local SEO',
      'Click-to-Call',
    ],
  },
]
