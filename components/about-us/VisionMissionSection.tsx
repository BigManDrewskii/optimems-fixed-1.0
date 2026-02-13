"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"

export function VisionMissionSection() {
  const t = useTranslations('aboutUsPage')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <AnimatedSection>
      <Container>
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className={`text-3xl md:text-4xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                {t('vision.title')}
              </h2>

              <p className={`text-base md:text-lg text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('vision.description')}
              </p>

              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/sections/about_mission_light.jpg"
                  alt={t('vision.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover hidden light:block"
                />
                <Image
                  src="/images/sections/about_mission_dark.jpg"
                  alt={t('vision.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover light:hidden"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className={`text-3xl md:text-4xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                {t('mission.title')}
              </h2>

              <p className={`text-lg font-medium leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('mission.statement')}
              </p>

              <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('mission.details')}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 p-6 rounded-xl bg-muted/10 border border-primary/20"
              >
                <p className={`text-lg font-semibold text-primary ${isGreek ? 'greek-text' : ''}`}>
                  {t('mission.accelerating')}
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
