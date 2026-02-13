"use client"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Dashboard16x9 } from "@/components/dashboard-demo-cta/components/layouts/Dashboard16x9"
import { Dashboard3x4 } from "@/components/dashboard-demo-cta/components/layouts/Dashboard3x4"

/**
 * SolarSoftware - Software platform with elegant layout
 *
 * Displays SolarShield platform in unified layout.
 */
export function SolarSoftware() {
  const t = useTranslations('solarControlPage.softwareOverview')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const features = t.raw('features') as string[]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Dashboard Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center text-foreground ${isGreek ? 'greek-heading' : ''}`}
        >
          SolarShield: Online Monitoring & Control
        </motion.h2>

        {/* Full-Width Dashboard Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative p-1.5 rounded-[20px] bg-[var(--dashboard-surface)] border border-[var(--dashboard-border)] shadow-2xl">
            {/* Top light reflection */}
            <div className="absolute inset-x-0 top-0 h-px rounded-t-[20px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

            {/* Aspect ratio wrapper - 16:9 on desktop, 3:4 on mobile */}
            <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden bg-[var(--dashboard-bg)]">
              {/* 16:9 layout - shown on lg+ screens */}
              <div className="hidden lg:block absolute inset-0">
                <Dashboard16x9 />
              </div>

              {/* 3:4 layout - shown on smaller screens */}
              <div className="lg:hidden absolute inset-0">
                <Dashboard3x4 />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className={`text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('introduction')}
            </p>
          </motion.div>

          {/* Features List - 2 Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (idx * 0.03) }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-2.5" role="presentation" aria-hidden="true" />
                  <span className={`text-base md:text-lg text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* API Section - Highlighted */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 pt-8 border-t-2 border-primary/20"
          >
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:border-primary/20 transition-colors">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="flex-1 text-left">
                <h4 className={`text-base md:text-lg font-semibold text-foreground mb-2 ${isGreek ? 'greek-heading' : ''}`}>
                  {t('apiSubtitle')}
                </h4>
                <p className={`text-sm md:text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {t('apiDescription')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
