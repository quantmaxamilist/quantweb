export type CaseStudyData = {
  id: string
  domain: string
  desktopImage: string
  mobileImage: string
  clientName: string
  accentWord?: string
  subtitle: string
  challenge: string
  solution: string
  services: string[]
  websiteUrl: string
}

export const caseStudies: CaseStudyData[] = [
  {
    id: 'jaggerz',
    domain: 'jaggerztakeaway.co.uk',
    desktopImage: '/work/jaggerz-desktop.jpg',
    mobileImage: '/work/jaggerz-mobile.jpg',
    clientName: 'Jaggerz',
    accentWord: 'Takeaway',
    subtitle: 'Fresh food & coffee · Narberth, Pembrokeshire',
    challenge:
      'A new takeaway in Narberth needed a site that showed its real menu and prices, felt fresh and appetising, and made it effortless for locals to call or find them.',
    solution:
      "A bold, warm one-page site with the real menu, live opening hours, real Google reviews and click-to-call — plus local SEO so it ranks for 'takeaway Narberth'. Built in days, on a custom domain.",
    services: [
      'Brand-aligned Design',
      'Real Menu & Pricing',
      'Mobile Responsive',
      'Google Reviews',
      'Local SEO',
      'Click-to-Call',
    ],
    websiteUrl: 'https://jaggerztakeaway.co.uk',
  },
]
