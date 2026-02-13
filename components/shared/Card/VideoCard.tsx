"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { BaseCard } from "../BaseCard"
import { Video } from "../Video"
import { getVideoSrc } from "@/lib/assets"
import { useTheme } from "next-themes"

export interface VideoCardProps {
  title?: string
  description?: string
  tagline?: string
  features?: string[]
  videoKey: string
  href?: string
  logo?: { dark: string; light: string }
  aspectRatio?: 'video' | 'square'
  showVignette?: boolean
  className?: string
  isInView?: boolean
  displayOrder?: number
  children?: React.ReactNode
}

function ThemeAwareLogo({ logo, title }: { logo?: { dark: string; light: string }; title?: string }) {
  if (!logo) return null
  return (
    <div className="mb-3 md:mb-4">
      <img
        src={logo.light}
        alt={title || 'Logo'}
        className="h-6 md:h-8 w-auto hidden light:block"
      />
      <img
        src={logo.dark}
        alt={title || 'Logo'}
        className="h-6 md:h-8 w-auto light:hidden"
      />
    </div>
  )
}

export function VideoCard({
  title,
  description,
  tagline,
  features,
  videoKey,
  href,
  logo,
  aspectRatio = 'video',
  showVignette = true,
  className,
  isInView = true,
  displayOrder = 0,
  children,
}: VideoCardProps) {
  const { resolvedTheme } = useTheme()
  const [videoData, setVideoData] = useState<{ webm?: string; mp4?: string } | null>(null)

  useEffect(() => {
    const data = getVideoSrc(videoKey, resolvedTheme === 'light')
    setVideoData(data)
  }, [videoKey, resolvedTheme])

  const cardContent = (
    <>
      {videoData && (
        <div className={`relative w-full ${aspectRatio === 'video' ? 'aspect-video' : 'aspect-square'} overflow-hidden bg-background`}>
          <Video
            src={videoData.webm || ""}
            sources={videoData ? { webm: videoData.webm, mp4: videoData.mp4 } : undefined}
            preload="none"
            className="w-full h-full"
          />
        </div>
      )}

      <div className="p-4 md:p-6 lg:p-8">
        <ThemeAwareLogo logo={logo} title={title} />

        {title && (
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
        )}

        {tagline && (
          <p className="text-sm md:text-lg text-foreground leading-relaxed mb-3 md:mb-4">
            {tagline}
          </p>
        )}

        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 md:mb-6">
            {description}
          </p>
        )}

        {features && features.length > 0 && (
          <ul className="space-y-1.5 md:space-y-2 mb-4 md:mb-6">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </>
  )

  const animatedContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: displayOrder * 0.1 }}
      className="h-full group"
    >
      <BaseCard
        variant='standard'
        rounded="2xl"
        hover={true}
        fullHeight={true}
        overflow={true}
        className={className}
      >
        {cardContent}
      </BaseCard>
    </motion.div>
  )

  return href ? (
    <Link href={href} className="block h-full">
      {animatedContent}
    </Link>
  ) : (
    animatedContent
  )
}
