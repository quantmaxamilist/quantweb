import CaseStudy from '@/components/CaseStudy'
import { caseStudies } from '@/data/caseStudies'
import styles from './OurWork.module.css'

export default function OurWork() {
  return (
    <section className={styles.section} id="our-work" aria-labelledby="our-work-heading">
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.eyebrow}>Our work</p>
          <span className="eyebrowRule" aria-hidden="true" />
          <h2 className={styles.title} id="our-work-heading">
            Real clients. Real <span className="accentItalic">results.</span>
          </h2>
          <p className={styles.sub}>
            Live sites we&apos;ve built for businesses across Wales and the UK.
          </p>
        </div>

        <div className={styles.studies}>
          {caseStudies.map(study => (
            <CaseStudy key={study.id} data={study} />
          ))}
        </div>
      </div>
    </section>
  )
}
