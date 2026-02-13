"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { FeatureList } from "@/components/products/FeatureList"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Building2, Cpu, Target } from "lucide-react"

export function PartnershipRequirements() {
  const t = useTranslations('partnershipPage.requirements')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const categories = [
    {
      icon: Building2,
      key: 'business',
    },
    {
      icon: Cpu,
      key: 'technical',
    },
    {
      icon: Target,
      key: 'market',
    },
  ]

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('introduction'),
        align: "center",
        size: "standard"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, idx) => {
            const Icon = category.icon
            const requirements = t.raw(`${category.key}.requirements`) as string[]

            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <BaseCard variant="standard" className="h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className={`text-lg font-bold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                      {t(`${category.key}.title`)}
                    </h3>
                  </div>

                  {category.key === 'technical' && (
                    <p className={`text-sm text-muted-foreground mb-4 italic ${isGreek ? 'greek-text' : ''}`}>
                      {t('technical.subtitle')}
                    </p>
                  )}

                  <FeatureList
                    features={requirements}
                    columns={1}
                    size="sm"
                  />
                </BaseCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </ProductPageSection>
  )
}
