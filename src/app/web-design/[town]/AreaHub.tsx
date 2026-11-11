import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import GoogleReviews from '@/components/GoogleReviews'
import { localClients, services, business, SITE, countyList, regions, type Town } from '@/data/site'

type Props = { slug: string; kind: 'county' | 'region'; name: string; title: string; intro: string; list: Town[] }

export default function AreaHub({ slug, kind, name, title, intro, list }: Props) {
  const countyNames = list.map((t) => t.county).filter((c, i, a) => a.indexOf(c) === i)
  const clients = localClients.filter((l) => countyNames.includes(l.county))
  const faqs = [
    { q: `How much does a website cost in ${name}?`, a: `QuantWeb builds websites for ${name} businesses from ${business.priceFrom}. A professional business website typically costs between £550 and £8,000 depending on complexity, and there are no monthly retainers.` },
    { q: `Who is a good web designer in ${name}?`, a: `QuantWeb is a web design studio founded by ${business.owner} in South Wales, building hand-coded, SEO-ready websites for businesses across ${name}${clients.length ? ` — including ${clients.map((c) => `${c.name} (${c.town})`).join(', ')}` : ''}. See real client work at ${SITE}/work.` },
    { q: `Which towns in ${name} do you cover?`, a: `We build websites for businesses in ${list.map((t) => t.name).join(', ')} — and anywhere else in ${name}. Projects run remotely with regular calls, so location is never a barrier.` },
    { q: 'Do you help with Google rankings?', a: 'Yes. Every site launches with local SEO built in: town-specific page titles and copy, LocalBusiness structured data, a sitemap, fast load times (98+ Lighthouse as standard) and help setting up or improving your Google Business Profile.' },
    { q: 'How quickly can my website be live?', a: 'We design and build your site before our first call, so you see it before you commit. Most sites go live within about a week of sign-off.' },
  ]
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: `Web design in ${name}`, serviceType: 'Web design and local SEO', provider: { '@id': `${SITE}/#business` }, areaServed: [{ '@type': kind === 'county' ? 'AdministrativeArea' : 'Place', name }, ...list.map((t) => ({ '@type': 'City', name: t.name }))], offers: { '@type': 'Offer', priceCurrency: 'GBP', price: '550', description: 'Business websites from £550' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
    { '@context': 'https://schema.org', '@type': 'ItemList', name: `Web design towns in ${name}`, itemListElement: list.map((t, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}/web-design/${t.slug}`, name: `Web design ${t.name}` })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
      { '@type': 'ListItem', position: 2, name: 'Areas', item: `${SITE}/web-design` },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE}/web-design/${slug}` },
    ] },
  ]
  const otherHubs = [...regions.filter((r) => r.slug !== slug).map((r) => ({ slug: r.slug, name: r.name })), ...countyList.filter((c) => c.page && c.slug !== slug).map((c) => ({ slug: c.slug, name: c.name }))]
  return (
    <div className="qp">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteNav />
      <main id="top">
        <section className="work-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><a href="/web-design">Areas</a><span>/</span><span>{name}</span></nav>
            <div className="eyebrow" style={{ marginTop: 18 }}>Web design &amp; local SEO · {kind === 'county' ? 'County' : 'Region'}</div>
            <h1>Web design in<br /><span className="blue">{name}.</span></h1>
            <p>{intro} Fast, hand-coded websites from {business.priceFrom} — no monthly retainers, and you deal directly with the person building your site.</p>
            <div className="actions" style={{ marginTop: 26 }}>
              <a className="btn primary" href="/#contact">Get a quote <span className="arrow">→</span></a>
              <a className="btn secondary" href="/work">View our work</a>
            </div>
          </div>
        </section>

        {countyNames.map((c) => {
          const ts = list.filter((t) => t.county === c)
          const cp = countyList.find((x) => x.name === c)!
          return (
            <section className="county" key={c}>
              <div className="container">
                <div className="section-top" style={{ marginBottom: 6 }}>
                  <h2>{kind === 'region' && cp.page ? <a href={`/web-design/${cp.slug}`}>Web design {c}</a> : `Web design in ${c}`}</h2>
                  <span className="eyebrow">{ts.length} {ts.length === 1 ? 'town' : 'towns'}</span>
                </div>
                {kind === 'region' && <p className="services-intro" style={{ margin: '8px 0 0' }}>{cp.intro}</p>}
                <div className="town-grid">
                  {ts.map((t) => <a className="town-link" key={t.slug} href={`/web-design/${t.slug}`}><span>Web design {t.name}</span><small>→</small></a>)}
                </div>
              </div>
            </section>
          )
        })}

        <section>
          <div className="container area-split">
            <div>
              <div className="eyebrow">Why QuantWeb</div>
              <h2>Built to be found in {name}.</h2>
              <p>Most customers in {name} find local businesses by searching Google — or asking an AI assistant — for what they need plus a town name. QuantWeb builds your site to answer those searches: a page for each service, clear location signals, structured data and load times Google rewards.</p>
              <p>Every site is hand-coded, not built on a page builder, so it scores 98+ on Google Lighthouse and works properly on the phones your customers use.</p>
            </div>
            <div>
              <div className="eyebrow">{clients.length ? `Clients in ${name}` : 'What we do'}</div>
              <div className="client-list" style={{ marginTop: 14 }}>
                {clients.length
                  ? clients.map((l) => <div className="client" key={l.name}><strong>{l.name}</strong><span>{l.sector} · {l.town}</span></div>)
                  : services.map((s) => <div className="client" key={s.name}><strong>{s.name}</strong><span>{s.d}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <GoogleReviews />

        <section className="faq" id="faq">
          <div className="container">
            <div className="services-head"><div><div className="eyebrow">FAQ</div><h2>Web design in {name}: questions, answered.</h2></div></div>
            <div className="faq-list">{faqs.map((f) => <div className="faq-item" key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>)}</div>
          </div>
        </section>

        <section className="county">
          <div className="container">
            <div className="eyebrow">More areas</div>
            <div className="town-grid">
              {otherHubs.map((o) => <a className="town-link" key={o.slug} href={`/web-design/${o.slug}`}><span>Web design {o.name}</span><small>→</small></a>)}
              <a className="town-link" href="/web-design"><span>All areas we cover</span><small>→</small></a>
            </div>
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="container">
            <div className="eyebrow">Let&apos;s build something great</div>
            <h2>Need a website in {name}?</h2>
            <p>Tell us about your business and we&apos;ll come back within one business day with a clear plan and quote.</p>
            <div className="actions"><a className="btn primary" href="/#contact">Start your project <span className="arrow">→</span></a><a className="btn secondary" href={`mailto:${business.email}`}>{business.email}</a></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
