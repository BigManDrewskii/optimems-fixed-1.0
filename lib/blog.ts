import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import { default as html } from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export interface BlogPost {
  slug: string
  title: string
  date: string
  author: string
  featured_image: string | null
  category: string
  tags: string[]
  excerpt: string
  published: boolean
  content: string
}

function getLocaleDirectory(locale: string): string {
  return path.join(postsDirectory, locale)
}

function getFallbackDirectory(): string {
  return path.join(postsDirectory, 'en')
}

export function getAllPosts(locale: string = 'en'): BlogPost[] {
  const localeDir = getLocaleDirectory(locale)
  const fallbackDir = getFallbackDirectory()

  // Try locale directory first, fallback to English
  let targetDir = localeDir
  if (!fs.existsSync(targetDir)) {
    targetDir = fallbackDir
  }

  const fileNames = fs.readdirSync(targetDir)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(targetDir, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        featured_image: data.featured_image,
        category: data.category,
        tags: data.tags || [],
        excerpt: data.excerpt,
        published: data.published,
        content,
      }
    })
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return allPosts
}

export function getPostsByCategory(category: string, locale: string = 'en'): BlogPost[] {
  const posts = getAllPosts(locale)
  return posts.filter((post) => post.category === category)
}

export function getPostBySlug(slug: string, locale: string = 'en'): BlogPost | null {
  const localeDir = getLocaleDirectory(locale)
  const fallbackDir = getFallbackDirectory()

  // Try locale-specific file first
  let fullPath = path.join(localeDir, `${slug}.md`)

  // Fallback to English if locale version doesn't exist
  if (!fs.existsSync(fullPath)) {
    fullPath = path.join(fallbackDir, `${slug}.md`)
  }

  // Return null if neither exists
  if (!fs.existsSync(fullPath)) {
    return null
  }

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      featured_image: data.featured_image,
      category: data.category,
      tags: data.tags || [],
      excerpt: data.excerpt,
      published: data.published,
      content,
    }
  } catch {
    return null
  }
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function getPaginatedPosts(
  posts: BlogPost[],
  page: number,
  limit: number
): { posts: BlogPost[]; total: number; totalPages: number } {
  const total = posts.length
  const totalPages = Math.ceil(total / limit)
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedPosts = posts.slice(start, end)

  return {
    posts: paginatedPosts,
    total,
    totalPages,
  }
}

export function getAllTags(locale: string = 'en'): string[] {
  const posts = getAllPosts(locale)
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => {
      tags.add(tag)
    })
  })
  return Array.from(tags).sort()
}

export function getRelatedPosts(
  currentSlug: string,
  category: string,
  locale: string = 'en',
  limit: number = 3
): BlogPost[] {
  const posts = getPostsByCategory(category, locale)
    .filter((post) => post.slug !== currentSlug)
    .slice(0, limit)
  return posts
}
