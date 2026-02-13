"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"

/**
 * MindWhoIsItFor - Target audience section
 *
 * 4 audience cards: Households, Commercial, Aggregators, Communities
 */
export function MindWhoIsItFor() {
  const t = useTranslations('mindPage.whoIsItFor')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const audiences = [
    { key: 'households' },
    { key: 'commercial' },
    { key: 'aggregators' },
    { key: 'communities' },
  ]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {audiences.map((audience, idx) => (
            <motion.div
              key={audience.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <BaseCard variant="standard" className="p-6 h-full text-center hover:border-primary/30 transition-all">
                <h3 className={`text-xl font-bold mb-3 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {t(`${audience.key}.title`)}
                </h3>
                <p className={`text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {t(`${audience.key}.description`)}
                </p>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ProductPageSection>
  )
}
