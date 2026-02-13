'use client'

import { Link } from '@/i18n/navigation'
import { BaseCard } from '@/components/shared'
import { BlogBannerPlaceholder } from './BlogBannerPlaceholder'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useTranslations, useLocale } from 'next-intl'
import { useEffect, useState } from 'react'

interface BlogCardProps {
  post: {
    slug: string
    title: string
    date: string
    author: string
    featured_image: string | null
    category: string
    tags: string[]
    excerpt: string
  }
}

export function BlogCard({ post }: BlogCardProps) {
  const headingId = `post-${post.slug}-title`
  const { resolvedTheme } = useTheme()
  const locale = useLocale()
  const t = useTranslations('blog')
  const [mounted, setMounted] = useState(false)
  const [imageSrc, setImageSrc] = useState<string | null>(null)

  // Handle client-side mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Derive light image from dark image path
  const getLightImage = (darkPath: string): string => {
    return darkPath.replace('-dark.jpeg', '-light.jpeg')
  }

  // Update image source when theme changes
  useEffect(() => {
    if (post.featured_image) {
      if (mounted && resolvedTheme === 'light' && post.featured_image.endsWith('-dark.jpeg')) {
        setImageSrc(getLightImage(post.featured_image))
      } else {
        setImageSrc(post.featured_image)
      }
    } else {
      setImageSrc(null)
    }
  }, [post.featured_image, resolvedTheme, mounted])

  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <BaseCard
        variant="standard"
        rounded="xl"
        className="h-full overflow-hidden flex flex-col hover:border-secondary/50 transition-all duration-300 p-0"
        aria-labelledby={headingId}
      >
        {/* Hero Image / Placeholder */}
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <BlogBannerPlaceholder category={post.category} variant="card" />
          )}

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-background/90 backdrop-blur-sm rounded-full border border-border/50">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 flex flex-col flex-1">
          <div className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
            {new Date(post.date).toLocaleDateString(locale, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>

          <h2
            id={headingId}
            className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3 flex-1 leading-relaxed"
          >
            {post.title}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2 md:line-clamp-3 text-sm">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between">
            <span className="text-xs md:text-sm text-muted-foreground">
              {t('by')} {post.author}
            </span>
            {post.tags.length > 0 && (
              <div className="flex gap-1.5">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="bg-muted text-muted-foreground text-[10px] md:text-xs px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </BaseCard>
    </Link>
  )
}
