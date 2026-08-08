import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CaseStudy from '@/components/CaseStudy'
import { caseStudies } from '@/data/caseStudies'
import styles from './work.module.css'

export const metadata: Metadata = {
  title: 'Selected Work',
  description:
    'Real client sites designed, built and shipped by QuantWeb Studio — web design and SEO for businesses across Wales and the UK.',
}

export default function WorkPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Nav />
      <main id="main" className={styles.main}>
        <div className={styles.inner}>
          <header className={styles.head}>
            <h1 className={styles.title}>
              Selected <span className="accentItalic">work</span>
            </h1>
            <p className={styles.sub}>
              Real client sites we&apos;ve designed, built and shipped.
            </p>
          </header>

          <div className={styles.studies}>
            {caseStudies.map(study => (
              <CaseStudy key={study.id} {...study} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
