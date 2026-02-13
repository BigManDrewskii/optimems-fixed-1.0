"use client"
import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { CustomPrimaryButton } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { useTranslations, useLocale } from "next-intl"
import Link from "next/link"

/**
 * SolarHeroNew - Compact hero section for Concept A redesign
 *
 * More compact hero with trust badge, headline, subheadline, and dual CTAs.
 */
export function SolarHeroNew() {
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
          <div className="relative z-10 max-w-4xl mx-auto text-center">
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
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${isGreek ? 'greek-heading' : ''}`}
            >
              {t('headline')}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
            >
              {t('subheadline')}
            </motion.p>

            {/* Dual CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <CustomPrimaryButton
                href="/"
                label={t('primaryCTA')}
                className="min-w-fit max-w-fit"
              />
              <Button asChild variant="outline" className="min-w-fit max-w-fit h-[52px] sm:h-[56px] md:h-[60px] px-8 rounded-full">
                <Link href="/contact">
                  {t('secondaryCta')}
                </Link>
              </Button>
            </motion.div>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
