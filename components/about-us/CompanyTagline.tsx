"use client"

import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

export function CompanyTagline() {
  const t = useTranslations('aboutUsPage.tagline')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <AnimatedSection animation="fadeIn">
      <div
        className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 flex items-center justify-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 opacity-80 light:hidden"
          style={{
            backgroundImage: `url('/images/sections/about-us-hero-background-dark.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0 opacity-80 hidden light:block"
          style={{
            backgroundImage: `url('/images/sections/about-us-hero-background-light.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Theme-aware gradient overlay for seamless transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <Container>
          <div className="text-center max-w-5xl mx-auto relative z-10">
            <motion.h1
              className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 ${isGreek ? 'greek-heading' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {t('headline')}
            </motion.h1>
            <motion.p
              className={`text-xl md:text-2xl text-foreground max-w-4xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              {t('subline')}
            </motion.p>
          </div>
        </Container>
      </div>
    </AnimatedSection>
  )
}
