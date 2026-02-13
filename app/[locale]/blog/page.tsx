import { AppLayout } from "@/app/app-layout"
import { getAllPosts, getPaginatedPosts } from '@/lib/blog'
import { BlogCard } from '@/components/blog/BlogCard'
import { CategoryFilter } from '@/components/blog/CategoryFilter'
import { Pagination } from '@/components/blog/Pagination'
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { getTranslations } from 'next-intl/server'

const POSTS_PER_PAGE = 6

interface BlogPageProps {
  params: Promise<{ locale: string }>
  searchParams: Promise<{ category?: string; page?: string }>
}

export async function generateMetadata({ params }: BlogPageProps) {
  const resolvedParams = await params
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'blog' })

  return {
    title: `${t('title')} | Optimems`,
    description: t('subtitle'),
  }
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const { locale } = resolvedParams
  const category = resolvedSearchParams.category || ''
  const page = parseInt(resolvedSearchParams.page || '1', 10)

  const t = await getTranslations({ locale, namespace: 'blog' })

  let allPosts = getAllPosts(locale)

  if (category) {
    allPosts = allPosts.filter((post) => post.category === category)
  }

  const { posts, totalPages } = getPaginatedPosts(allPosts, page, POSTS_PER_PAGE)

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        <AnimatedSection>
          <Container>
            <div className="pt-32 md:pt-40 lg:pt-48 mb-20 max-w-6xl mx-auto">
              <SectionHeader
                label={t('title')}
                title={t('title')}
                description={t('subtitle')}
              />
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection>
          <Container>
            <div className="py-8 md:py-12 max-w-6xl mx-auto">
              <CategoryFilter />

              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-muted-foreground">{t('noPosts')}</p>
                </div>
              )}

              <Pagination
                currentPage={page}
                totalPages={totalPages}
                baseUrl="/blog"
              />
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
