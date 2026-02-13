"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { FeatureList } from "@/components/products/FeatureList"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { FileText, Phone, Rocket } from "lucide-react"

export function PartnershipHowToStart() {
  const t = useTranslations('partnershipPage.howToStart')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const steps = [
    { key: 'step1', number: 1, icon: FileText },
    { key: 'step2', number: 2, icon: Phone },
    { key: 'step3', number: 3, icon: Rocket },
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
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <BaseCard variant="standard" className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex-1">
                      <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                        {t(`${step.key}.headline`)}
                      </h3>
                      <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                        {t(`${step.key}.description`)}
                      </p>

                      {step.key === 'step1' && (
                        <div className="mt-6">
                          <p className="text-sm text-muted-foreground mb-3">
                            {t('step1.estimatedTime')}
                          </p>
                        </div>
                      )}

                      {step.key === 'step2' && (
                        <div className="mt-6">
                          <p className="text-sm text-muted-foreground">
                            {t('step2.timeline')}
                          </p>
                        </div>
                      )}

                      {step.key === 'step3' && (
                        <div className="mt-6">
                          <p className="text-sm text-muted-foreground">
                            {t('step3.timeline')}
                          </p>
                        </div>
                      )}
                    </div>
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
