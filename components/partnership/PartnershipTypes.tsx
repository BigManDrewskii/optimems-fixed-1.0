"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { FeatureList } from "@/components/products/FeatureList"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Workflow, BarChart3, Building2, Code, Truck, Settings2 } from "lucide-react"

export function PartnershipTypes() {
  const t = useTranslations('partnershipPage.types')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const types = [
    {
      icon: Workflow,
      key: 'systemIntegrators',
    },
    {
      icon: BarChart3,
      key: 'consultants',
    },
    {
      icon: Building2,
      key: 'buildingDevelopers',
    },
    {
      icon: Code,
      key: 'softwareResellers',
    },
    {
      icon: Truck,
      key: 'equipmentDistributors',
    },
    {
      icon: Settings2,
      key: 'equipmentManufacturers',
    },
  ]

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('introduction'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {types.map((type, idx) => {
            const Icon = type.icon
            const benefits = t.raw(`${type.key}.benefits`) as string[]

            return (
              <motion.div
                key={type.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <BaseCard variant="standard" className="h-full p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className={`text-lg font-bold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                      {t(`${type.key}.title`)}
                    </h3>
                  </div>
                  <p className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {t(`${type.key}.description`)}
                  </p>
                  <FeatureList
                    features={benefits}
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
