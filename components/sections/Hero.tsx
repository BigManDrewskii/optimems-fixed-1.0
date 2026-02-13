"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { hero, socialProof } from "@/data/landing-page"
import { CustomPrimaryButton, MarqueeSection } from "@/components/shared"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function Hero() {
  const t = useTranslations('home')

  const heroImage = '/images/hero/solar-control-hero-graphic.png'

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 flex items-center overflow-hidden" aria-labelledby="hero-heading">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-4 lg:gap-6 items-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center lg:text-left max-w-[550px] lg:max-w-[600px] mx-auto lg:mx-0"
          >
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight"
            >
              {t('hero.headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0"
            >
              {t('hero.subheadline')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-flex flex-wrap gap-3 md:gap-4 items-center justify-center lg:justify-start pt-2"
            >
              <CustomPrimaryButton
                href={hero.primaryCTA.href}
                label={t('hero.primaryCTA')}
              />

              <Button variant="ghost" size="lg" asChild>
                <Link href={hero.secondaryCTA.href}>
                  {t('hero.secondaryCTA')}
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-6 md:pt-8"
            >
              <MarqueeSection
                items={socialProof.logos}
                duration={20}
                pauseOnHover={true}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end overflow-hidden"
          >
            <div className="w-full max-w-[500px] md:max-w-[550px] lg:max-w-[600px] xl:max-w-[650px]">
              <Image
                src={heroImage}
                alt="Solar energy management system dashboard showing real-time grid optimization and energy control interface"
                className="w-full h-auto block animate-float"
                width={650}
                height={650}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
