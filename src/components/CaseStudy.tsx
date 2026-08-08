import Image from 'next/image'
import type { CaseStudyData } from '@/data/caseStudies'
import styles from './CaseStudy.module.css'

function TickIcon() {
  return (
    <svg
      className={styles.chipIcon}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 6l2.5 2.5 4.5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export type CaseStudyProps = Pick<
  CaseStudyData,
  | 'title'
  | 'accentWord'
  | 'subtitle'
  | 'desktopImg'
  | 'mobileImg'
  | 'url'
  | 'domain'
  | 'challenge'
  | 'solution'
  | 'services'
> & {
  id: string
}

export default function CaseStudy({
  id,
  title,
  accentWord,
  subtitle,
  desktopImg,
  mobileImg,
  url,
  domain,
  challenge,
  solution,
  services,
}: CaseStudyProps) {
  const displayTitle = accentWord ? `${title} ${accentWord}` : title

  return (
    <article className={styles.caseStudy} aria-labelledby={`${id}-heading`}>
      <div className={styles.mediaRow}>
        <div className={styles.browser}>
          <div className={styles.browserBar} aria-hidden="true">
            <div className={styles.trafficLights}>
              <span className={styles.dotRed} />
              <span className={styles.dotAmber} />
              <span className={styles.dotGreen} />
            </div>
            <div className={styles.urlPill}>{domain}</div>
            <div className={styles.browserSpacer} />
          </div>
          <div className={styles.desktopPreview}>
            <Image
              src={desktopImg}
              alt={`${displayTitle} website desktop screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, 800px"
              className={styles.desktopImage}
              priority
            />
          </div>
        </div>

        <div className={styles.phoneCol}>
          <div className={styles.phoneFrame}>
            <div className={styles.phoneScreen}>
              <Image
                src={mobileImg}
                alt={`${displayTitle} website mobile screenshot`}
                fill
                sizes="240px"
                className={styles.mobileImage}
              />
            </div>
          </div>
          <span className={styles.mobileLabel}>MOBILE VIEW</span>
        </div>
      </div>

      <div className={styles.textCol}>
        <h2 className={styles.clientName} id={`${id}-heading`}>
          {accentWord ? (
            <>
              {title}{' '}
              <span className="accentItalic">{accentWord}</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className={styles.subtitle}>{subtitle}</p>

        <div className={styles.block}>
          <span className={styles.blockLabel}>The Challenge</span>
          <p className={styles.blockText}>{challenge}</p>
        </div>

        <div className={styles.block}>
          <span className={styles.blockLabel}>The Solution</span>
          <p className={styles.blockText}>{solution}</p>
        </div>

        <div className={styles.servicesBlock}>
          <span className={styles.blockLabel}>Services Delivered</span>
          <ul className={styles.chips} role="list">
            {services.map(service => (
              <li key={service} className={styles.chip}>
                <TickIcon />
                {service}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={url}
          className={styles.visitBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}
