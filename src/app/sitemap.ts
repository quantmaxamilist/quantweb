import { MetadataRoute } from 'next'
import { SITE, towns, countyList, regions } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE}/work`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE}/web-design`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    ...regions.map((r) => ({ url: `${SITE}/web-design/${r.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85 })),
    ...countyList.filter((c) => c.page).map((c) => ({ url: `${SITE}/web-design/${c.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 })),
    ...towns.map((t) => ({ url: `${SITE}/web-design/${t.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
  ]
}
