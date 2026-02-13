"use client"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { Shield, Cpu, Lock } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

/**
 * SolarWhoBenefits - Who Benefits section
 *
 * Displays three audience cards: Park Owners, Aggregators, DSOs & TSOs.
 */
export function SolarWhoBenefits() {
  const t = useTranslations('solarControlPage.whoBenefits')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const cards = [
    {
      icon: Shield,
      title: t('parkOwners.title'),
      headline: t('parkOwners.headline'),
      description: t('parkOwners.description'),
      benefits: t.raw('parkOwners.benefits') as string[],
    },
    {
      icon: Cpu,
      title: t('aggregators.title'),
      headline: t('aggregators.headline'),
      description: t('aggregators.description'),
      benefits: t.raw('aggregators.benefits') as string[],
    },
    {
      icon: Lock,
      title: t('dsosTsos.title'),
      headline: t('dsosTsos.headline'),
      description: t('dsosTsos.description'),
      benefits: t.raw('dsosTsos.benefits') as string[],
    },
  ]

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        align: "center",
        size: "standard"
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BaseCard variant="standard" className="h-full p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className={`text-lg font-bold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                    {card.title}
                  </h3>
                </div>
                <h4 className={`text-base font-semibold text-primary mb-3 ${isGreek ? 'greek-heading' : ''}`}>
                  {card.headline}
                </h4>
                <p className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {card.description}
                </p>
                <ul className="space-y-2">
                  {card.benefits.map((benefit, benefitIdx) => (
                    <li key={benefitIdx} className={`flex items-start gap-2 text-xs ${isGreek ? 'greek-text' : ''}`}>
                      <span className="text-primary font-semibold mt-0.5">•</span>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </BaseCard>
            </motion.div>
          ))}
        </div>
      </div>
    </ProductPageSection>
  )
}
