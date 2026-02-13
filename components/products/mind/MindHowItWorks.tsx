"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { CheckCircle2 } from "lucide-react"

/**
 * MindHowItWorks - 3-step process section
 *
 * Monitor → Forecast → Optimize & Execute
 */
export function MindHowItWorks() {
  const t = useTranslations('mindPage.howItWorks')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const steps = [
    { key: 'step1', number: 1 },
    { key: 'step2', number: 2 },
    { key: 'step3', number: 3 },
  ]

  const bullets = t.raw('step3.bullets') as string[]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        description: t('subheadline'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Steps */}
        <div className="space-y-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div
              key={step.key}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BaseCard variant="standard" className="p-8">
                <div className="flex items-start gap-6">
                  {/* Step Number */}
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="flex-1">
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                      {t(`${step.key}.title`)}
                    </h3>
                    <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                      {t(`${step.key}.description`)}
                    </p>

                    {/* Step 3 Bullets */}
                    {step.key === 'step3' && (
                      <ul className="mt-6 space-y-3">
                        {bullets.map((bullet, bulletIdx) => (
                          <li key={bulletIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                            <span className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </BaseCard>
            </motion.div>
          ))}
        </div>

        {/* Result Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <BaseCard variant="standard" className="p-8 text-center bg-primary/5">
            <p className={`text-lg md:text-xl font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('result')}
            </p>
          </BaseCard>
        </motion.div>
      </div>
    </ProductPageSection>
  )
}
