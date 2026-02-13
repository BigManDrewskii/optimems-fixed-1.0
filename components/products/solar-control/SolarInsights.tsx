"use client"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

/**
 * SolarInsights - Insights Add-On section
 *
 * Displays advanced analytics features and differentiator.
 */
export function SolarInsights() {
  const t = useTranslations('solarControlPage.insightsAddOn')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const analyticsFeatures = t.raw('features') as string[]

  const dataLoggerStates = t.raw('dataLoggerStates') as string[]

  const continuityBenefits = t.raw('continuityBenefits') as string[]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>
          <p className={`text-base text-muted-foreground max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
            {t('introduction')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Analytics Features */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className={`text-lg font-semibold mb-5 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('subheadline')}
            </h3>
            <ul className="space-y-3">
              {analyticsFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (idx * 0.04) }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                  <span className={`text-sm text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
            <p className={`text-xs text-muted-foreground mt-4 ${isGreek ? 'greek-text' : ''}`}>
              {t('allPresented')}
            </p>
          </motion.div>

          {/* Right: Key Differentiator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-primary/5 rounded-2xl p-6 lg:p-8"
          >
            <h3 className={`text-lg font-semibold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
              Seamless Continuity
            </h3>

            <p className={`text-sm text-muted-foreground mb-4 ${isGreek ? 'greek-text' : ''}`}>
              {t('differentiatorIntro')}
            </p>

            <div className="flex flex-wrap gap-2 mb-5">
              {dataLoggerStates.map((state, idx) => (
                <span
                  key={idx}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/50 text-xs ${isGreek ? 'greek-text' : ''}`}
                >
                  <span className="w-1 h-1 rounded-full bg-destructive" />
                  <span className="text-muted-foreground">{state}</span>
                </span>
              ))}
            </div>

            <p className={`text-sm font-medium mb-5 ${isGreek ? 'greek-text' : ''}`}>
              {t('differentiatorConclusion')}
            </p>

            <div className="space-y-2.5 pt-4 border-t border-border/20">
              {continuityBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className={`text-xs text-foreground ${isGreek ? 'greek-text' : ''}`}>
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
