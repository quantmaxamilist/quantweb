export type CaseStudyData = {
  id: string
  title: string
  accentWord?: string
  subtitle: string
  desktopImg: string
  mobileImg: string
  url: string
  domain: string
  challenge: string
  solution: string
  services: string[]
}

export const caseStudies: CaseStudyData[] = [
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
