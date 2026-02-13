"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/shared/Container"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"

export function PartnershipHero() {
  const t = useTranslations('partnershipPage.hero')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] pt-32 md:pt-40 lg:pt-48 pb-16 md:pb-20 lg:pb-24 overflow-hidden">
        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              {t('badge')}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}
            >
              {t('headline')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-muted-foreground mb-4"
            >
              {t('subheadline')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-lg text-muted-foreground max-w-3xl mb-3 leading-relaxed ${isGreek ? 'greek-text' : ''}`}
            >
              {t('body1')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-lg text-muted-foreground max-w-3xl mb-3 leading-relaxed ${isGreek ? 'greek-text' : ''}`}
            >
              {t('body2')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`text-lg text-muted-foreground max-w-3xl mb-8 leading-relaxed ${isGreek ? 'greek-text' : ''}`}
            >
              {t('body3')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="w-fit"
            >
              <CustomPrimaryButton
                href="/contact"
                label={t('primaryCTA')}
              />
            </motion.div>
          </div>
        </Container>
      </div>
    </motion.div>
  )
}
