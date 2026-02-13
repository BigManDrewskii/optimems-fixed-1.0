'use client'

import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { BlogBannerPlaceholder } from './BlogBannerPlaceholder'
import { Link } from '@/i18n/navigation'

interface BlogHeroBannerProps {
  featuredImage: string | null
  title: string
  category: string
}

export function BlogHeroBanner({ featuredImage, title, category }: BlogHeroBannerProps) {
  const { resolvedTheme } = useTheme()
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
    if (featuredImage) {
      if (mounted && resolvedTheme === 'light' && featuredImage.endsWith('-dark.jpeg')) {
        setImageSrc(getLightImage(featuredImage))
      } else {
        setImageSrc(featuredImage)
      }
    } else {
      setImageSrc(null)
    }
  }, [featuredImage, resolvedTheme, mounted])

  return (
    <div className="relative w-full aspect-[21/9] md:aspect-[25/9] overflow-hidden bg-muted">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover blur-[1px] scale-105"
          priority
          style={{ filter: 'brightness(0.9)' }}
        />
      ) : (
        <BlogBannerPlaceholder category={category} title={title} variant="hero" />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />

      {/* Category Badge */}
      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <Link
          href={`/blog?category=${category}`}
          className="inline-block px-3 py-1.5 text-sm font-semibold bg-background/90 backdrop-blur-sm rounded-full border border-border/50 hover:bg-background transition-colors"
          aria-label={`View all posts in ${category}`}
        >
          {category}
        </Link>
      </div>
    </div>
  )
}
