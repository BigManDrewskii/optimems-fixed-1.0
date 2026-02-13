"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"

/**
 * MindKeyFeatures - Key Features & Capabilities section
 *
 * Displays 8 core features with rich descriptions.
 * Icon-free design using typography and cards.
 */
export function MindKeyFeatures() {
  const t = useTranslations('mindPage.keyFeatures')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const features = t.raw('features') as Array<{
    title: string
    description: string
  }>

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('subheadline'),
        align: "center",
        size: "large"
      }}
      spacing="spacious"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
            >
              <BaseCard variant="standard" className="h-full p-6">
                <h3 className={`text-lg font-bold mb-3 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {feature.title}
                </h3>
                <p className={`text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {feature.description}
                </p>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ProductPageSection>
  )
}
