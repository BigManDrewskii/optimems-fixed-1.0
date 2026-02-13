"use client"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"

/**
 * SolarHero - Hero section with trust badge, headline, and CTA
 *
 * Main landing section with gradient background and CTA.
 */
export function SolarHero() {
  const t = useTranslations('solarControlPage.hero')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-center">
            {/* Left Column - Text Content */}
            <div className="relative z-10 max-w-[600px]">
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                {t('badge')}
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}
              >
                {t('headline')}
              </motion.h1>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-muted-foreground mb-4"
              >
                {t('tagline')}
              </motion.p>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-lg text-muted-foreground max-w-3xl mb-8"
              >
                {t('subheadline')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <CustomPrimaryButton
                  href="/demo"
                  label={t('primaryCTA')}
                  className="min-w-fit"
                />
                <a
                  href="#datasheet"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50 transition-all duration-300"
                >
                  {t('secondaryCTA')}
                </a>
              </motion.div>
            </div>

            {/* Right Column - Placeholder for Media */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative flex justify-center lg:justify-end overflow-hidden"
            >
              <div className="w-full max-w-[600px] aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl border border-border flex items-center justify-center">
                <p className="text-muted-foreground text-sm">SolarControl hero media placeholder</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
