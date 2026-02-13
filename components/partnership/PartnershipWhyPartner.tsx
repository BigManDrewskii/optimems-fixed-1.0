"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { FeatureList } from "@/components/products/FeatureList"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Megaphone } from "lucide-react"

export function PartnershipWhyPartner() {
  const t = useTranslations('partnershipPage.whyPartner')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const benefits = [
    {
      icon: TrendingUp,
      key: 'benefit1',
    },
    {
      icon: DollarSign,
      key: 'benefit2',
    },
    {
      icon: Megaphone,
      key: 'benefit3',
    },
  ]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        description: t('introduction'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            const whatItMeansBenefits = t.raw(`${benefit.key}.benefits`) as string[]

            return (
              <motion.div
                key={benefit.key}
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
                  </div>

                  <h3 className={`text-xl md:text-2xl font-bold mb-4 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                    {t(`${benefit.key}.headline`)}
                  </h3>

                  <p className={`text-base text-muted-foreground mb-6 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {t(`${benefit.key}.description`)}
                  </p>

                  <div className="border-t border-border/30 pt-4">
                    <p className={`text-sm font-semibold text-primary mb-3 ${isGreek ? 'greek-heading' : ''}`}>
                      {t(`${benefit.key}.whatItMeans`)}
                    </p>
                    <FeatureList
                      features={whatItMeansBenefits}
                      columns={1}
                      size="sm"
                    />
                  </div>
                </BaseCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </ProductPageSection>
  )
}
