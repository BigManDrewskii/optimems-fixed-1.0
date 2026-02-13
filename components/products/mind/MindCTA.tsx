"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { CustomPrimaryButton } from "@/components/shared"
import { Link } from "@/i18n/navigation"

/**
 * MindCTA - Final call-to-action section
 *
 * Headline + subheadline + 2 buttons.
 */
export function MindCTA() {
  const t = useTranslations('mindPage.cta')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection
      spacing="grand"
    >
      <div className="max-w-4xl mx-auto">
        <BaseCard variant="standard" className="p-12 md:p-16 text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight ${isGreek ? 'greek-heading' : ''}`}
          >
            {t('headline')}
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}
          >
            {t('subheadline')}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CustomPrimaryButton
              href="/demo"
              label={t('primaryCTA')}
              className="px-8 py-3.5 rounded-full"
            />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50 transition-all duration-300"
            >
              {t('secondaryCTA')}
            </Link>
          </motion.div>
        </BaseCard>
      </div>
    </ProductPageSection>
  )
}
