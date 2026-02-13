"use client"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { BaseCard } from "@/components/shared/BaseCard"
import { Shield, HeadphonesIcon, RefreshCw } from "lucide-react"

/**
 * SolarWarranty - Warranty & support section
 *
 * Displays warranty information with two-column layout.
 */
export function SolarWarranty() {
  const t = useTranslations('solarControlPage.warranty')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const features = t.raw('includes') as string[]
  const supportBenefits = t.raw('supportBenefits') as string[]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>
          <p className={`text-base text-muted-foreground max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
            {t('description')}
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Warranty Coverage */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <BaseCard
              variant="standard"
              scale={true}
              padding="lg"
              className="h-full"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className={`text-lg font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {t('coverageTitle')}
                </h3>
              </div>

              <p className={`text-sm text-muted-foreground mb-5 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('details')}
              </p>

              <h4 className={`text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3 ${isGreek ? 'greek-text' : ''}`}>
                {t('includedLabel')}
              </h4>
              <ul className="space-y-2.5">
                {features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
                    className={`flex items-start gap-2.5 text-sm text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}
                  >
                    <span className="text-primary font-semibold flex-shrink-0 mt-0.5">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </BaseCard>
          </motion.div>

          {/* Right: Support & Ongoing Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <BaseCard
              variant="standard"
              scale={true}
              padding="lg"
              className="h-full bg-primary/5"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HeadphonesIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className={`text-lg font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {t('supportTitle')}
                </h3>
              </div>

              <p className={`text-sm text-muted-foreground mb-5 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('supportDescription')}
              </p>

              <div className="space-y-3">
                {supportBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.06) }}
                    className="flex items-start gap-3"
                  >
                    <RefreshCw className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className={`text-sm text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </BaseCard>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
