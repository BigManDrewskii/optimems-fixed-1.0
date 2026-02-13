"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { CustomPrimaryButton } from "@/components/shared"
import { Video } from "@/components/shared/Video"
import { useTheme } from "next-themes"
import { getVideoSrc } from "@/lib/assets"
import { useState, useEffect } from "react"

/**
 * ConsultHero - Hero section with video background for consulting services
 *
 * Center-aligned hero with trust badge, bold headline, services overview, and CTAs.
 * Video background with bottom gradient overlay.
 */
export function ConsultHero() {
  const t = useTranslations('consultPage.hero')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    setIsClient(true)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get optimized video sources
  const videoSources = getVideoSrc('consult', resolvedTheme === 'light', isMobile) || {
    webm: '/videos/consult_compressed.webm',
    mp4: '/videos/consult_compressed.mp4'
  }

  // Delay video loading to prioritize LCP (poster image)
  useEffect(() => {
    setIsClient(true)
    const timer = setTimeout(() => {
      setShouldLoadVideo(true)
    }, 1500) // Start loading video after 1.5s
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-40">
        {isClient ? (
          <Video
            src=""
            sources={videoSources}
            autoplay={shouldLoadVideo}
            muted
            loop
            playsInline
            preload={shouldLoadVideo ? "metadata" : "none"}
            loading="lazy"
            className="w-full h-full"
            title="Consulting services video background"
            poster="/images/sections/consult-hero-poster-web.jpg"
          />
        ) : (
          // Fallback to poster image during SSR
          <img
            src="/images/sections/consult-hero-poster-web.jpg"
            alt="Consulting services background"
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 z-10">
        <div className="text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-tight"
          >
            {t('headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            {t('subheadline')}
          </motion.p>

          {/* Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto"
          >
            {t('supportingLine')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex justify-center"
          >
            <CustomPrimaryButton
              href={t('primaryCTA.href')}
              label={t('primaryCTA.label')}
              className="w-full sm:w-auto px-8 py-3 text-lg"
            />
          </motion.div>

          {/* Services Overview - Minimal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {t.raw('serviceHighlights').map((service: string, index: number) => (
              <div key={service.toString()} className="text-center">
                <p className="text-sm text-muted-foreground">{service}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}