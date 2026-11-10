import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import GoogleReviews from '@/components/GoogleReviews'
import { towns, countyList, regions, localClients, business, SITE } from '@/data/site'

export const metadata: Metadata = {
  title: { absolute: 'Web Design South & West Wales | Every Town We Cover | QuantWeb' },
  description: `Web design & local SEO in ${towns.length} towns across South & West Wales — Pembrokeshire, Carmarthenshire, Swansea, Cardiff, Newport and more. From £350.`,
  alternates: { canonical: `${SITE}/web-design` },
  openGraph: { title: 'Web Design South & West Wales | QuantWeb', url: `${SITE}/web-design`, images: ['/og-image.jpg'] },
}

const groups = (['West Wales', 'South Wales'] as const).map((r) => ({ r, counties: countyList.filter((c) => c.region === r) }))

const schema = [
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
    { '@type': 'ListItem', position: 2, name: 'Web design in South & West Wales', item: `${SITE}/web-design` },
  ] },
  { '@context': 'https://schema.org', '@type': 'ItemList', name: 'Towns QuantWeb builds websites for', numberOfItems: towns.length, itemListElement: towns.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/web-design/${t.slug}`, name: `Web design ${t.name}, ${t.county}` })) },
  { '@context': 'https://schema.org', '@type': 'Service', name: 'Web design and local SEO in South & West Wales', provider: { '@id': `${SITE}/#business` }, areaServed: countyList.map((c) => ({ '@type': 'AdministrativeArea', name: c.name })), offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '350' } },
]

export default function AreasPage() {
  return (
    <div className="qwhome">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteNav />
      <main id="top">
        <section className="work-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Areas</span></nav>
            <div className="eyebrow" style={{ marginTop: 18 }}>Web design &amp; local SEO</div>
            <h1>Web design across<br /><span className="blue">South &amp; West Wales.</span></h1>
            <p>
              QuantWeb is a web design studio founded in Pembrokeshire by {business.owner}. We build fast, hand-coded websites with local SEO
              built in for businesses in {towns.length} towns across {countyList.length} counties of South and West Wales — from {business.priceFrom}, with no monthly retainers.
            </p>
            <div className="actions" style={{ marginTop: 22 }}>
              {regions.map((r) => <a key={r.slug} className="btn secondary" href={`/web-design/${r.slug}`}>{r.title}</a>)}
            </div>
          </div>
        </section>
        {groups.map(({ r, counties }) => (
          <div key={r}>
            <section className="county region-head"><div className="container"><div className="eyebrow">{r}</div><h2><a href={`/web-design/${r === 'West Wales' ? 'west-wales' : 'south-wales'}`}>Web design in {r} →</a></h2></div></section>
            {counties.map((c) => {
              const list = towns.filter((t) => t.county === c.name)
              const clients = localClients.filter((l) => l.county === c.name)
              return (
                <section className="county" key={c.name}>
                  <div className="container">
                    <div className="section-top" style={{ marginBottom: 6 }}>
                      <h3 className="county-h">{c.page ? <a href={`/web-design/${c.slug}`}>Web design {c.name}</a> : `Web design ${c.name}`}</h3>
                      <span className="eyebrow">{list.length} {list.length === 1 ? 'town' : 'towns'}</span>
                    </div>
                    <p className="services-intro" style={{ margin: '8px 0 0' }}>{c.intro}{clients.length > 0 && ` Recent work here: ${clients.map((l) => `${l.name} (${l.town})`).join(', ')}.`}</p>
                    <div className="town-grid">
                      {list.map((t) => <a className="town-link" key={t.slug} href={`/web-design/${t.slug}`}><span>Web design {t.name}</span><small>→</small></a>)}
                    </div>
                  </div>
                </section>
              )
            })}
          </div>
        ))}
        <GoogleReviews />
        <section className="cta" id="contact">
          <div className="container">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Ready to grow your business?</h2>
            <p>Tell us about your business and we&apos;ll come back within one business day with a clear plan and quote.</p>
            <div className="actions"><a className="btn primary" href="/#contact">Start your project <span className="arrow">→</span></a><a className="btn secondary" href={`mailto:${business.email}`}>{business.email}</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
