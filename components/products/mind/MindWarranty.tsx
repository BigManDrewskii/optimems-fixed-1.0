"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { BaseCard } from "@/components/shared/BaseCard"

/**
 * MindWarranty - Warranty and support section
 *
 * Displays warranty information with elegant card design matching SolarWarranty.
 */
export function MindWarranty() {
  const t = useTranslations('mindPage.warranty')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const benefits = t.raw('benefits') as string[]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <BaseCard
          variant="patterned"
          pattern="default"
          outerPadding="lg"
          innerPadding="lg"
          rounded="3xl"
        >
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`text-2xl md:text-3xl font-bold mb-5 ${isGreek ? 'greek-heading' : ''}`}
            >
              {t('headline')}
            </motion.h2>

            {/* Equipment Warranty Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <p className={`text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('equipment')}
              </p>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className={`text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4 ${isGreek ? 'greek-text' : ''}`}>
                Included:
              </h3>
              <ul className="space-y-3">
                {benefits.map((benefit, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                    className={`flex items-start gap-3 text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}
                  >
                    <span className="text-primary font-semibold flex-shrink-0 mt-0.5">•</span>
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </BaseCard>
      </div>
    </section>
  )
}
