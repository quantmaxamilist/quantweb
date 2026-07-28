import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import RevealProvider from '@/components/RevealProvider'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.quantweb.co.uk'),
  title: {
    default: 'QuantWeb Studio | Web Design & SEO Agency South Wales',
    template: '%s | QuantWeb Studio',
  },
  description:
    'QuantWeb Studio — South Wales web design and SEO agency. We build fast, beautiful websites and drive organic traffic for businesses across Cardiff, Swansea, Newport and the UK.',
  keywords: [
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
      '@type': 'LocalBusiness',
      '@id': 'https://www.quantweb.co.uk/#business',
      name: 'QuantWeb Studio',
      url: 'https://www.quantweb.co.uk',
      logo: 'https://www.quantweb.co.uk/favicon.svg',
      image: 'https://www.quantweb.co.uk/og-image.jpg',
      description:
        'QuantWeb Studio is a web design and SEO agency based in South Wales, building high-performance websites and delivering organic growth for businesses across the UK.',
      telephone: '+44-XXXX-XXXXXX',
      email: 'hello@quantweb.co.uk',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'South Wales',
        addressRegion: 'Wales',
        addressCountry: 'GB',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '51.4816', longitude: '-3.1791' },
      areaServed: [
        { '@type': 'Place', name: 'South Wales' },
        { '@type': 'Place', name: 'Cardiff' },
        { '@type': 'Place', name: 'Swansea' },
        { '@type': 'Place', name: 'Newport' },
        { '@type': 'Place', name: 'Bridgend' },
        { '@type': 'Place', name: 'United Kingdom' },
      ],
      priceRange: '££',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.quantweb.co.uk/#website',
      url: 'https://www.quantweb.co.uk',
      name: 'QuantWeb Studio',
      publisher: { '@id': 'https://www.quantweb.co.uk/#business' },
      inLanguage: 'en-GB',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://www.quantweb.co.uk/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How much does a website cost in South Wales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'A professional business website in South Wales typically costs between £350 and £8,000 depending on complexity. At QuantWeb Studio, pricing starts from £350 for a clean, fast, fully optimised site.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does SEO take to work in the UK?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Local SEO can show movement within 6–8 weeks. Competitive UK-wide rankings typically take 3–6 months. We focus on quick local wins first, then build long-term authority.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with businesses outside South Wales?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes — while based in South Wales, we work with businesses across the UK. All project work runs remotely with regular video calls and clear communication throughout.',
          },
        },
        {
          '@type': 'Question',
          name: 'What makes QuantWeb different from other web agencies?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We combine web design and SEO under one roof. Most agencies do one or the other. We build your site to rank from day one — design, code, and content strategy aligned from the start.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body><RevealProvider>{children}</RevealProvider></body>
    </html>
  )
}
