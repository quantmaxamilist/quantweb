import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.quantweb.co.uk'

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Add new pages here as you create them:
    // {
    //   url: `${base}/services/web-design-south-wales`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${base}/services/seo-agency-south-wales`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.9,
    // },
    // {
    //   url: `${base}/blog`,
    //   lastModified: new Date(),
    //   changeFrequency: 'weekly',
    //   priority: 0.7,
    // },
  ]
}
