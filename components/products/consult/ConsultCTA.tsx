"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { CustomPrimaryButton } from "@/components/shared"

/**
 * ConsultCTA - Final call-to-action section for consulting page
 *
 * Simple card CTA with headline, subheadline, and Book Consultation button.
 */
export function ConsultCTA() {
  const t = useTranslations('consultPage.cta')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection spacing="grand">
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

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <CustomPrimaryButton
              href={t('buttonHref')}
              label={t('buttonLabel')}
              className="px-8 py-3.5 rounded-full text-lg"
            />
          </motion.div>
        </BaseCard>
      </div>
    </ProductPageSection>
  )
}
