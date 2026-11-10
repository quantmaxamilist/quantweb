import { MetadataRoute } from 'next'

// Search engines and AI search/answer engines are all welcome to read the site.
const aiBots = [
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Applebot', 'Applebot-Extended',
  'Bingbot', 'DuckAssistBot', 'MistralAI-User', 'CCBot', 'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiBots.map((b) => ({ userAgent: b, allow: '/' })),
    ],
    sitemap: 'https://www.quantweb.co.uk/sitemap.xml',
    host: 'https://www.quantweb.co.uk',
  }
}
