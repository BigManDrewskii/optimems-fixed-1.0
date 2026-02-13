import { AppLayout } from "@/app/app-layout"
import { notFound } from 'next/navigation'
import { Link } from '@/i18n/navigation'
import { getPostBySlug, getAllPosts, markdownToHtml, getRelatedPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { BlogHeroBanner } from '@/components/blog/BlogHeroBanner'
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { StructuredData } from "@/components/seo/StructuredData"
import { createArticleSchema, createBreadcrumbSchema, createOrganizationSchema } from "@/lib/structured-data"
import { Clock } from '@/lib/icons'
import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'

interface BlogPostPageProps {
  params: Promise<{ slug: string; locale: string }>
}

// Calculate reading time (avg 200 words per minute)
function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  return Math.max(1, Math.ceil(words / wordsPerMinute))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug, resolvedParams.locale)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: `${post.title} | Optimems Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export async function generateStaticParams() {
  // Explicitly generate params for both locales
  const locales = ['el', 'en'] as const
  const posts = getAllPosts('en') // All posts exist in both locales with same slugs
  const params: Array<{ slug: string; locale: string }> = []

  for (const locale of locales) {
    for (const post of posts) {
      params.push({ slug: post.slug, locale })
    }
  }

  return params
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params
  const { slug, locale } = resolvedParams
  const post = getPostBySlug(slug, locale)
  const t = await getTranslations({ locale, namespace: 'blog' })

  if (!post) {
    notFound()
  }

  const contentHtml = await markdownToHtml(post.content)
  const relatedPosts = getRelatedPosts(post.slug, post.category, locale, 3)
  const readingTime = calculateReadingTime(post.content)

  // Create structured data
  const articleSchema = createArticleSchema({
    title: post.title,
    description: post.excerpt,
    date: post.date,
    author: post.author,
    url: `https://optimems.gr/blog/${post.slug}`,
    image: post.featured_image || undefined
  })

  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `https://optimems.gr/${locale}` },
    { name: 'Blog', url: `https://optimems.gr/${locale}/blog` },
    { name: post.category, url: `https://optimems.gr/${locale}/blog?category=${post.category}` },
    { name: post.title, url: `https://optimems.gr/${locale}/blog/${post.slug}` }
  ])

  return (
    <>
      <StructuredData data={createOrganizationSchema()} />
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <AppLayout>
        <main className="min-h-screen">
        <article>
          {/* Hero Banner Section */}
          <section>
            <BlogHeroBanner
              featuredImage={post.featured_image}
              title={post.title}
              category={post.category}
            />
          </section>

          {/* Header Section */}
          <section>
            <Container>
              <div className="-mt-20 md:-mt-24 relative z-10 max-w-4xl mx-auto">
                <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 md:p-10 shadow-lg">
                  <Link
                    href="/blog"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
                    aria-label="Return to blog listing"
                  >
                    {t('backToBlog')}
                  </Link>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
                    {post.title}
                  </h1>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-xs">
                          {post.author.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <span className="font-medium text-foreground">{post.author}</span>
                    </div>
                    <span>•</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString(locale, {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    <span>•</span>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      <span>{readingTime} {t('minRead')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Content Section */}
          <section>
            <Container>
              <div className="py-12 md:py-16 max-w-3xl mx-auto px-6">
                <div
                  className={cn(
                    "prose-content",
                    locale === "el" && "prose-content-greek"
                  )}
                  dangerouslySetInnerHTML={{ __html: contentHtml }}
                />

                {/* Tags */}
                {post.tags.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${tag}`}
                          className="bg-muted hover:bg-muted/80 text-muted-foreground text-sm px-4 py-2 rounded-full transition-colors"
                        >
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Container>
          </section>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <section>
              <Container>
                <div className="py-12 md:py-16 max-w-6xl mx-auto border-t border-border">
                  <SectionHeader
                    label={t('relatedPostsLabel')}
                    title={t('relatedPostsTitle')}
                    description={t('relatedPostsDescription')}
                    className="mb-8"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost) => (
                      <BlogCard key={relatedPost.slug} post={relatedPost} />
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}
        </article>
      </main>
    </AppLayout>
    </>
  )
}
