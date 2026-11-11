import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Figtree } from 'next/font/google'
import './globals.css'
import RevealProvider from '@/components/RevealProvider'
import { SITE, business, towns, counties, services, faqsCore } from '@/data/site'

const head = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-head', display: 'swap' })
const body = Figtree({ subsets: ['latin'], weight: ['400', '500', '600'], variable: '--font-body', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.quantweb.co.uk'),
  title: {
    default: 'QuantWeb | Web Design South & West Wales — Pembrokeshire, Carmarthenshire, Swansea & Cardiff',
    template: '%s | QuantWeb Studio',
  },
  description:
    'QuantWeb — web design, apps, software and local SEO across South and West Wales. Fast, hand-coded websites from £550 for businesses in Pembrokeshire, Carmarthenshire, Ceredigion, Swansea, Neath Port Talbot, Bridgend, Cardiff, Newport and across the UK.',
  keywords: [
    'web design south west wales',
    'app development south wales',
    'software development south wales',
    'web platform development wales',
    'bespoke software wales',
    'web design west wales',
    'web designer pembrokeshire',
    'web design pembrokeshire',
    'web design carmarthenshire',
    'web design haverfordwest',
    'web design carmarthen',
    'web design llanelli',
    'web design tenby',
    'web design south wales',
    'web studio wales',
    'SEO agency south wales',
    'website design Cardiff',
    'web design Swansea',
    'web design Newport',
    'SEO agency Wales',
    'web design UK',
  ],
  authors: [{ name: 'QuantWeb Studio', url: 'https://www.quantweb.co.uk' }],
  creator: 'QuantWeb Studio',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.quantweb.co.uk',
    siteName: 'QuantWeb Studio',
    title: 'QuantWeb Studio | Web Design & SEO Agency South Wales',
    description:
      'Beautiful, high-performance websites and SEO that gets you found. Serving South Wales and the UK.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'QuantWeb Studio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuantWeb Studio | Web Design & SEO South Wales',
    description: 'Beautiful, high-performance websites and SEO that gets you found.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.quantweb.co.uk',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  other: {
    'geo.region': 'GB-WLS',
    'geo.placename': 'South Wales',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness'],
      '@id': `${SITE}/#business`,
      name: business.name,
      alternateName: business.altName,
      url: SITE,
      logo: `${SITE}/qw-logo.svg`,
      image: `${SITE}/og-image.jpg`,
      description:
        'QuantWeb is a web design, software and local SEO studio founded in South Wales by Keeron John. It hand-codes fast, SEO-ready websites for small businesses and tradespeople across South and West Wales — Pembrokeshire, Carmarthenshire, Ceredigion, Swansea, Neath Port Talbot, Bridgend, Cardiff, the Vale of Glamorgan, the South Wales valleys, Newport and Monmouthshire — and the rest of the UK, from £550 with no monthly retainers.',
      email: business.email,
      founder: { '@type': 'Person', name: business.owner, jobTitle: 'Web designer & founder' },
      address: { '@type': 'PostalAddress', addressRegion: 'Wales', addressCountry: 'GB' },
      areaServed: [
        ...counties.map((c) => ({ '@type': 'AdministrativeArea', name: c })),
        ...towns.map((t) => ({ '@type': 'City', name: t.name })),
        { '@type': 'Country', name: 'United Kingdom' },
      ],
      knowsAbout: ['Web design', 'Website development', 'Web application development', 'App development', 'Bespoke software', 'Local SEO', 'Search engine optimisation', 'Google Business Profile', 'Structured data', 'Website performance', 'Astro', 'Next.js'],
      makesOffer: services.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name, description: s.d } })),
      priceRange: 'From £550',
      sameAs: [business.instagram],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE}/#website`,
      url: SITE,
      name: business.name,
      publisher: { '@id': `${SITE}/#business` },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE}/#faq`,
      mainEntity: faqsCore.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${head.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body><RevealProvider>{children}</RevealProvider></body>
    </html>
  )
}
