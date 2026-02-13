"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

/**
 * SolarSolution - Solution section with 2-column layout
 *
 * Left: Narrative (headline, subheadline, description, closing)
 * Right: Features/Benefits as bullet list with checkmarks
 */
export function SolarSolution() {
  const t = useTranslations('solarControlPage.solution')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const benefits = t.raw('benefits') as string[]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className={`text-3xl md:text-4xl font-bold leading-tight ${isGreek ? 'greek-heading' : ''}`}>
              {t('headline')}
            </h2>
            {t('subheadline') && (
              <p className="text-lg text-muted-foreground">
                {t('subheadline')}
              </p>
            )}
            <p className="text-base">
              {t('description')}
            </p>
            <p className="text-sm text-muted-foreground">
              {t('closing')}
            </p>
          </motion.div>

          {/* Right Column: Features/Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            {t('details') && (
              <p className="text-sm text-muted-foreground italic">
                {t('details')}
              </p>
            )}

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
