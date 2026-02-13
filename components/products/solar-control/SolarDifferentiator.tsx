"use client"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import Link from "next/link"
import { AlertCircle, Zap } from "lucide-react"

/**
 * SolarDifferentiator - Comparison section with 2-column layout
 *
 * Shows the key difference from traditional SCADA in side-by-side comparison.
 */
export function SolarDifferentiator() {
  const t = useTranslations('solarControlPage.differentiator')

  const scadaRequirements = t.raw('scadaRequirements') as string[]
  const solarControlOffers = t.raw('solarControlOffers') as string[]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t('headline')}
          </h2>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left: Traditional SCADA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border/40 rounded-2xl bg-card/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold">
                {t('subheading')}
              </h3>
            </div>

            <ul className="space-y-3 border-l-2 border-dashed border-border/30 pl-4">
              {scadaRequirements.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right: +SolarControl */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-primary/40 rounded-2xl bg-card/5 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                +SolarControl offers:
              </h3>
            </div>

            <ul className="space-y-3 border-l-2 border-dashed border-primary/30 pl-4">
              {solarControlOffers.map((item, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                  className="text-sm text-foreground leading-relaxed"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Closing Statement + CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t('closingStatement')}
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
          >
            {t('ctaLabel')}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
