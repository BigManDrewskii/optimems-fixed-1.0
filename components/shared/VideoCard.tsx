"use client"

import { motion } from "framer-motion"
import { BaseCard } from "./BaseCard"
import { Video } from "./Video"
import { FeatureList } from "./FeatureList"
import { Link } from "@/i18n/navigation"

export interface VideoCardProps {
  title: string
  description: string
  tagline?: string
  features?: string[]
  videoSrc: string
  href?: string
  logoSrc?: string
  aspectRatio?: 'video' | 'square'
  className?: string
  isInView?: boolean
  index?: number
}

export function VideoCard({
  title,
  description,
  tagline,
  features,
  videoSrc,
  href,
  logoSrc,
  aspectRatio = 'video',
  className,
  isInView = true,
  index = 0,
}: VideoCardProps) {
  const cardContent = (
    <>
      {/* Video Banner */}
      <div className="relative w-full aspect-video overflow-hidden bg-black/20">
        <Video
          src={videoSrc}
          preload="metadata"
          loading="eager"
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        {logoSrc && (
          <div className="mb-4">
            <img src={logoSrc} alt={title} className="h-8 w-auto" />
          </div>
        )}

        <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-3 leading-tight">
          {title}
        </h3>

        {tagline && (
          <p className="text-base text-primary font-medium mb-4">{tagline}</p>
        )}

        <p className="text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {features && <FeatureList features={features} />}
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
    >
      {href ? (
        <Link href={href} className="block h-full">
          <BaseCard variant='standard' scale={true} className={className} hover>
            {cardContent}
          </BaseCard>
        </Link>
      ) : (
        <BaseCard variant='standard' scale={true} className={className} hover>
          {cardContent}
        </BaseCard>
      )}
    </motion.div>
  )
}
