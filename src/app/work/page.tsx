import type { Metadata } from 'next'
import { caseStudies } from '@/data/caseStudies'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import QuoteForm from '@/components/QuoteForm'

export const metadata: Metadata = {
  title: 'Our Work — QuantWeb',
  description:
    'Real client websites designed, built and shipped by QuantWeb — high-performance web design and SEO for businesses across South Wales and the UK.',
  alternates: { canonical: 'https://www.quantweb.co.uk/work' },
}

const sectors: Record<string, string> = {
  asteria: 'Wedding platform',
  voyager: 'Automotive',
  dreamhome: 'Mortgages & finance',
  vector: 'Removals & logistics',
  rs1: 'Finance & investment',
  scarlatt: 'Property & renovation',
  'boxed-fresh': 'Food & e-commerce',
  ecoheat: 'Renewable energy',
  jaggerz: 'Food & takeaway',
}

const shots: Record<string, string> = {
  asteria: '/work-asteria.jpg',
  voyager: '/work-voyager.jpg',
  dreamhome: '/work-dreamhome.jpg',
  vector: '/work-vector.jpg',
  rs1: '/work-rs1.jpg',
  scarlatt: '/work-scarlatt.jpg',
  'boxed-fresh': '/work-boxedfresh.jpg',
  ecoheat: '/work-ecoheat.jpg',
  jaggerz: '/work-jaggerz.jpg',
}

export default function WorkPage() {
  return (
    <div className="qp">
      <SiteNav />
      <main id="top">
        <section className="work-hero">
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span>/</span><span>Our work</span></nav>
            <span className="eyebrow" style={{ marginTop: 12 }}>Our work</span>
            <h1>Websites that <span className="blue">actually perform.</span></h1>
            <p>Real client sites we&apos;ve designed, built and shipped — for businesses across South Wales and the UK. Every one is live.</p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="cases">
              {caseStudies.map((cs) => (
                <article className="case frame" key={cs.id}>
                  <div className="inner">
                    <div>
                      <span className="pill">{sectors[cs.id] ?? cs.subtitle}</span>
                      <h3>{cs.title}{cs.accentWord ? ` ${cs.accentWord}` : ''}</h3>
                      <div className="sub">{cs.subtitle}</div>
                      <div className="blk"><b>The challenge</b><p>{cs.challenge}</p></div>
                      <div className="blk"><b>What we did</b><p>{cs.solution}</p></div>
                      <div className="chips">{cs.services.map((s) => <span key={s}>{s}</span>)}</div>
                      <a className="btn p" href={cs.url} target="_blank" rel="noopener noreferrer">Visit live site ↗</a>
                    </div>
                    <div className="img"><img src={shots[cs.id]} alt={`${cs.title} ${cs.accentWord ?? ''} website`.trim()} loading="lazy" /></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" style={{ paddingTop: 20 }}>
          <div className="wide">
            <div className="dark" style={{ paddingBottom: 60 }}>
              <span className="pill">Free quote · reply within one business day</span>
              <h2 style={{ marginBottom: 30 }}>Want results like these? <b>Let&apos;s talk.</b></h2>
              <QuoteForm />
              <p className="qalt">Prefer email? <a href="mailto:admin@quantweb.co.uk">admin@quantweb.co.uk</a></p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
