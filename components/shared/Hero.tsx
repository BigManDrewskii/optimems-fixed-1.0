"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/shared/Container"
import { Video } from "@/components/shared"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { getVideoSrc } from "@/data/videos"
import { useTheme } from "next-themes"

export interface HeroProps {
  /**
   * Content
   */
  headline?: string
  subheadline?: string
  description?: string

  /**
   * Media
   */
  logo?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  backgroundImage?: string
  video?: {
    src: string
    poster?: string
  }
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
    priority?: boolean
  }

  /**
   * Trust Badge
   */
  trustBadge?: {
    enabled: boolean
    text: string
  }

  /**
   * CTAs
   */
  primaryCTA?: {
    label: string
    href: string
    className?: string
  }
  secondaryCTA?: {
    label: string
    href: string
    className?: string
  }

  /**
   * Supported Assets
   */
  supportedAssets?: Array<{
    icon?: ReactNode
    text: string
  }>

  /**
   * Layout & Styling
   */
  variant?: "default" | "compact" | "full-width"
  align?: "left" | "center" | "right"
  className?: string
  spacing?: "compact" | "standard" | "spacious"
  showBottomGradient?: boolean
}

const animationVariants = {
  default: {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  },
}

export function Hero({
  headline,
  subheadline,
  description,
  logo,
  backgroundImage,
  video,
  image,
  trustBadge,
  primaryCTA,
  secondaryCTA,
  supportedAssets,
  variant = "default",
  align = "center",
  className = "",
  spacing = "standard",
  showBottomGradient = false,
}: HeroProps) {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === "light"

  const spacingClasses = {
    compact: "pt-16 md:pt-20 pb-8 md:pb-12 lg:pb-16",
    standard: "pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24",
    spacious: "pt-40 md:pt-48 lg:pt-56 pb-20 md:pb-24 lg:pb-32",
  }

  const alignClasses = {
    left: "text-left lg:text-left",
    center: "text-center",
    right: "text-right lg:text-right",
  }

  const containerClasses = `
    ${spacingClasses[spacing]}
    ${alignClasses[align]}
    ${className}
  `.trim()

  const videoSources = video ? (getVideoSrc(video.src, isLight) || undefined) : undefined

  return (
    <section
      className={`relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] overflow-hidden ${containerClasses}`}
      aria-labelledby={headline ? "hero-heading" : undefined}
    >
      {/* Background Layer */}
      {video && (
        <div className="absolute inset-0 opacity-40">
          <Video
            src=""
            sources={videoSources}
            autoplay
            muted
            loop
            playsInline
            className="w-full h-full"
          />
          {/* Bottom gradient overlay for dark theme */}
          {showBottomGradient && (
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          )}
        </div>
      )}

      {backgroundImage && !video && (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority={false}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <Container>
        <div className={`relative z-10 max-w-4xl mx-auto ${variant === "compact" ? "text-center lg:text-left" : "text-center lg:text-left"}`}>
          {/* Trust Badge */}
          {trustBadge?.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              {trustBadge.text}
            </motion.div>
          )}

          {/* Logo */}
          {logo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <div className="relative flex justify-center" style={{ width: logo.width, height: logo.height }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}

          {/* Main Headline */}
          <motion.h1
            id="hero-heading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground ${isGreek ? "greek-heading" : ""}`}
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {subheadline}
            </motion.p>
          )}

          {/* Description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
          )}

          {/* Supported Assets Grid */}
          {supportedAssets && supportedAssets.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto mb-12"
            >
              {supportedAssets.map((asset, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + (idx * 0.05) }}
                  className={`text-sm text-muted-foreground ${isGreek ? "greek-text" : ""}`}
                >
                  {asset.icon && <span className="mr-2">{asset.icon}</span>}
                  {asset.text}
                  {idx < supportedAssets.length - 1 && <span className="mx-3 text-border/40">•</span>}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* Hero Image */}
          {image && !video && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative flex justify-center lg:justify-end overflow-hidden max-w-[650px] mx-auto mt-8"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority={image.priority ?? false}
                className="w-full h-auto block animate-float"
              />
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 ${align === "left" ? "lg:justify-start" : align === "right" ? "lg:justify-end" : ""}`}
          >
            {primaryCTA && (
              <CustomPrimaryButton
                href={primaryCTA.href}
                label={primaryCTA.label}
                className={primaryCTA.className}
              />
            )}

            {secondaryCTA && (
              <Button asChild variant="outline" size="lg" className="min-w-fit">
                <Link href={secondaryCTA.href} className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium">
                  {secondaryCTA.label}
                </Link>
              </Button>
            )}
          </motion.div>
        </div>
      </Container>

      {/* Bottom Gradient Overlay */}
      {showBottomGradient && !video && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-transparent opacity-20" />
        </div>
      )}
    </section>
  )
}
