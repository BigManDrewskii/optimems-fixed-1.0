import { MetadataRoute } from 'next'
import { routing } from '@/i18n/routing'
import { getAllPosts } from '@/lib/blog'

const baseUrl = 'https://optimems.gr'

const routes = [
  '',
  '/about-us',
  '/products-services',
  '/products-services/mind',
  '/products-services/solar-control',
  '/products-services/consult',
  '/blog',
  '/contact',
  // '/careers', // Temporarily hidden
  '/partnership',
  '/case-studies',
  '/rnd-projects',
  '/compatibility-lists',
  '/warranties',
  '/demo',
  '/support',
  '/login',
  '/signup',
  '/privacy',
  '/terms',
  '/cookies',
  '/docs',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = []

  // Add static routes for each locale
  for (const locale of routing.locales) {
    for (const route of routes) {
      urls.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => [l, `${baseUrl}/${l}${route}`])
          ),
        },
      })
    }
  }

  // Add individual blog post routes for each locale
  for (const locale of routing.locales) {
    const posts = getAllPosts(locale)
    for (const post of posts) {
      urls.push({
        url: `${baseUrl}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            routing.locales.map((l) => {
              // Try to get the same post in the other locale
              const otherLocalePost = getAllPosts(l).find(p => p.slug === post.slug)
              return [l, otherLocalePost ? `${baseUrl}/${l}/blog/${post.slug}` : `${baseUrl}/${l}/blog`]
            })
          ),
        },
      })
    }
  }

  return urls
}
