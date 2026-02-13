"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { CustomPrimaryButton } from "@/components/shared"
import { Video } from "@/components/shared/Video"
import { useTheme } from "next-themes"
import { getVideoSrc } from "@/data/videos"

/**
 * MindHero - Hero section with video background
 *
 * Center-aligned hero with trust badge, bold headline, 9 supported assets grid, and CTAs.
 * Video background with bottom gradient overlay.
 */
export function MindHero() {
  const t = useTranslations('mindPage.hero')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()

  const supportedAssets = t.raw('supportedAssets') as string[]

  const videoSources = getVideoSrc('mindHero', false) || undefined

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
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
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 z-10">
        <div className="text-center">
          {/* Optimems Mind Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8"
          >
            <img
              src={resolvedTheme === 'dark' ? '/images/logos/optimems-mind.svg' : '/images/logos/optimems-mind-light.svg'}
              alt="Optimems Mind"
              className="h-8 md:h-10 lg:h-12 w-auto mx-auto"
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.08] tracking-tight text-foreground ${isGreek ? 'greek-heading' : ''}`}
          >
            {t('headline')}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-2xl md:text-3xl text-foreground mb-12 max-w-4xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}
          >
            {t('subheadline')}
          </motion.p>

          {/* Supported Assets Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 max-w-5xl mx-auto mb-12"
          >
            {supportedAssets.map((asset, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + (idx * 0.05) }}
                className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}
              >
                {asset}
                {idx < supportedAssets.length - 1 && <span className="mx-3 text-border/40">•</span>}
              </motion.span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <CustomPrimaryButton
              href="/demo"
              label={t('primaryCTA')}
              className="px-8 py-3.5 rounded-full"
            />
            <a
              href="#datasheet"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50 transition-all duration-300"
            >
              {t('secondaryCTA')}
            </a>
          </motion.div>

          {/* Compatibility Note */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}
          >
            {t('compatibilityNote')}
          </motion.p>
        </div>
      </div>
    </section>
  )
}
