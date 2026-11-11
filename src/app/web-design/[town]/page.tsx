import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import GoogleReviews from '@/components/GoogleReviews'
import { towns, nearby, localClients, services, business, SITE, county, countyList, regions, regionOf, type Town } from '@/data/site'
import AreaHub from './AreaHub'

export const dynamicParams = false
export function generateStaticParams() {
  return [
    ...towns.map((t) => ({ town: t.slug })),
    ...countyList.filter((c) => c.page).map((c) => ({ town: c.slug })),
    ...regions.map((r) => ({ town: r.slug })),
  ]
}

// County / region hub resolution
function hub(slug: string): { kind: 'county' | 'region'; name: string; title: string; intro: string; list: Town[] } | null {
  const c = countyList.find((x) => x.page && x.slug === slug)
  if (c) return { kind: 'county', name: c.name, title: `Web Design ${c.name}`, intro: c.intro, list: towns.filter((t) => t.county === c.name) }
  const r = regions.find((x) => x.slug === slug)
  if (r) return { kind: 'region', name: r.name, title: r.title, intro: r.intro, list: towns.filter(r.filter) }
  return null
}

const find = (slug: string) => towns.find((t) => t.slug === slug)

export function generateMetadata({ params }: { params: { town: string } }): Metadata {
  const h = hub(params.town)
  if (h) {
    const description = `Web designer for ${h.name}: hand-coded websites with local SEO for ${h.list.slice(0, 3).map((x) => x.name).join(', ')} and more. From ${business.priceFrom}, no retainers.`
    return { title: { absolute: `${h.title} | Websites & Local SEO | QuantWeb` }, description, alternates: { canonical: `${SITE}/web-design/${params.town}` }, openGraph: { title: `${h.title} | QuantWeb`, description, url: `${SITE}/web-design/${params.town}`, images: ['/og-image.jpg'] } }
  }
  const t = find(params.town)
  if (!t) return {}
  const title = `Web Design ${t.name} | Websites & Local SEO`
  const description = `Web designer for ${t.name}, ${t.county}: fast, hand-coded websites with local SEO built in, from ${business.priceFrom}. No monthly retainers.`
  return {
    title: { absolute: `${title} | QuantWeb` },
    description,
    alternates: { canonical: `${SITE}/web-design/${t.slug}` },
    openGraph: { title, description, url: `${SITE}/web-design/${t.slug}`, images: ['/og-image.jpg'] },
    other: { 'geo.placename': `${t.name}, ${t.county}`, 'geo.position': `${t.lat};${t.lng}`, 'geo.region': 'GB-WLS' },
  }
}

export default function TownPage({ params }: { params: { town: string } }) {
  const h = hub(params.town)
  if (h) return <AreaHub slug={params.town} {...h} />
  const t = find(params.town)
  if (!t) notFound()
  const near = nearby(t)
  const inTown = localClients.filter((l) => l.town === t.name)
  const inCounty = localClients.filter((l) => l.county === t.county && l.town !== t.name)
  const anyLocal = inTown.length + inCounty.length > 0
  const faqs = [
    { q: `How much does a website cost in ${t.name}?`, a: `Websites for ${t.name} businesses start from ${business.priceFrom}. A professional business website typically costs between £550 and £8,000 depending on complexity — with QuantWeb there are no monthly retainers.` },
    { q: `Do you build websites for businesses in ${t.name}?`, a: `Yes. QuantWeb works with businesses in ${t.name} and across ${t.county}${anyLocal ? `, including ${[...inTown, ...inCounty].map((l) => l.name).join(', ')}` : ''}. Projects run remotely with regular calls, so you get a local designer without waiting around.` },
    { q: `Will my website show up on Google in ${t.name}?`, a: `Every site is built with local SEO from day one: page titles and copy written for ${t.name} searches, LocalBusiness schema, a sitemap, fast load times (98+ Lighthouse as standard) and help with your Google Business Profile. Local SEO can show movement within 6–8 weeks.` },
    { q: 'How long does a website take?', a: 'We design and build your site in advance of our first call, so you see your new website before you commit. Changes are usually turned around within a few working days.' },
    { q: `Who is a good web designer near ${t.name}?`, a: `QuantWeb is a ${regionOf(t)} web design studio that builds hand-coded, SEO-ready websites for ${t.name} and ${t.county} businesses from ${business.priceFrom}. See real client sites at ${SITE}/work.` },
    { q: `Who will I deal with?`, a: `You deal directly with the person designing and building your site — no account managers or outsourcing.` },
  ]
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Web design in ${t.name}`,
      serviceType: 'Web design and local SEO',
      provider: { '@id': `${SITE}/#business` },
      areaServed: { '@type': 'City', name: t.name, containedInPlace: { '@type': 'AdministrativeArea', name: t.county }, geo: { '@type': 'GeoCoordinates', latitude: t.lat, longitude: t.lng } },
      offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '550', description: 'Business websites from £550' },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE}/web-design` },
        ...(county(t.county).page ? [{ '@type': 'ListItem', position: 3, name: `Web design ${t.county}`, item: `${SITE}/web-design/${county(t.county).slug}` }] : []),
        { '@type': 'ListItem', position: county(t.county).page ? 4 : 3, name: `Web design ${t.name}`, item: `${SITE}/web-design/${t.slug}` },
      ],
    },
  ]
  return (
    <div className="qp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteNav />
      <main id="top">
        <section className="work-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/web-design">Areas</a><span>/</span>{county(t.county).page && <><a href={`/web-design/${county(t.county).slug}`}>{t.county}</a><span>/</span></>}<span>{t.name}</span></nav>
            <div className="eyebrow" style={{ marginTop: 18 }}>Web design · {t.county}</div>
            <h1>Web design in<br /><span className="blue">{t.name}.</span></h1>
            <p>
              QuantWeb is a {regionOf(t)} web design studio building fast, hand-coded websites with local SEO for businesses in {t.name}{t.note ? `, ${t.note}` : ''}. From {business.priceFrom}, no monthly retainers — and you deal directly with the person building your site.
            </p>
            <div className="actions" style={{ marginTop: 26 }}>
              <a className="btn primary" href="/#contact">Get a quote <span className="arrow">→</span></a>
              <a className="btn secondary" href="/work">View our work</a>
            </div>
          </div>
        </section>

        <section>
          <div className="container area-split">
            <div>
              <div className="eyebrow">Websites for {t.name}</div>
              <h2>A website that brings in {t.name} customers.</h2>
              <p>
                Most local businesses in {t.name} are found the same way: someone searches Google for what they need plus
                &ldquo;{t.name}&rdquo; or &ldquo;near me&rdquo;. QuantWeb builds your site to show up for those searches — clear
                service pages, {t.county} location signals, structured data and load times that Google rewards.
              </p>
              <p>{county(t.county).intro}</p>
              <p>
                Every build is hand-coded rather than built on a page builder, so it scores 98+ on Google Lighthouse and works
                properly on the phones your customers use. We design your site before our first call, so you see it before you
                commit.
              </p>
            </div>
            <div>
              <div className="eyebrow">{anyLocal ? `Local work in ${t.county}` : 'What we do'}</div>
              <div className="client-list" style={{ marginTop: 14 }}>
                {anyLocal
                  ? [...inTown, ...inCounty].map((l) => (
                      <div className="client" key={l.name}><strong>{l.name}</strong><span>{l.sector} · {l.town}</span></div>
                    ))
                  : services.map((s) => (
                      <div className="client" key={s.name}><strong>{s.name}</strong><span>{s.d}</span></div>
                    ))}
              </div>
            </div>
          </div>
        </section>

        {anyLocal && (
          <section className="services">
            <div className="container">
              <div className="services-head"><div><div className="eyebrow">Services</div><h2>Everything you need to grow online in {t.name}.</h2></div></div>
              <div className="service-grid service-grid--5">
                {services.map((s) => <article className="service-card" key={s.name}><h3>{s.name}</h3><p>{s.d}</p></article>)}
              </div>
            </div>
          </section>
        )}

        <GoogleReviews />

        <section className="faq" id="faq">
          <div className="container">
            <div className="services-head"><div><div className="eyebrow">FAQ</div><h2>Web design in {t.name}: questions, answered.</h2></div></div>
            <div className="faq-list">
              {faqs.map((f) => <div className="faq-item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}
            </div>
          </div>
        </section>

        <section className="county">
          <div className="container">
            <div className="eyebrow">Nearby</div>
            <div className="town-grid">
              {near.map((n) => <a className="town-link" key={n.slug} href={`/web-design/${n.slug}`}><span>Web design {n.name}</span><small>{n.county}</small></a>)}
              {county(t.county).page && <a className="town-link" href={`/web-design/${county(t.county).slug}`}><span>Web design {t.county}</span><small>County</small></a>}
              <a className="town-link" href={`/web-design/${regionOf(t) === 'West Wales' ? 'west-wales' : 'south-wales'}`}><span>Web design {regionOf(t)}</span><small>Region</small></a>
              <a className="town-link" href="/web-design"><span>All areas we cover</span><small>→</small></a>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Need a website in {t.name}?</h2>
            <p>Tell us about your business and we&apos;ll come back within one business day with a clear plan and quote.</p>
            <div className="actions"><a className="btn primary" href="/#contact">Start your project <span className="arrow">→</span></a><a className="btn secondary" href={`mailto:${business.email}`}>{business.email}</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
