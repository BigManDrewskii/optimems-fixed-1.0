"use client"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { Thermometer } from "lucide-react"

/**
 * SolarHardware - Hardware overview with expanded content
 *
 * Displays industrial hardware features with detailed description and two-column layout.
 */
export function SolarHardware() {
  const t = useTranslations('solarControlPage.hardwareOverview')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const keyFeatures = t.raw('keyFeatures.features') as { title: string; description: string }[]
  const technicalSpecs = t.raw('technicalSpecs.specs') as string[]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="text-sm font-medium text-primary">{t("badge")}</span>
          </motion.div>

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
            <span className="text-foreground">{t("title")}</span>{' '}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className={`text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Hero Description Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <GlassCard className="p-8 md:p-12 text-center">
            <p className={`text-lg md:text-xl leading-relaxed text-muted-foreground max-w-4xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
              {t("description")}
            </p>
          </GlassCard>
        </motion.div>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-12 text-center ${isGreek ? 'greek-heading' : ''}`}>
            {t("keyFeatures.title")}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyFeatures.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (idx * 0.1) }}
                whileHover={{ y: -4 }}
              >
                <GlassCard className="p-6 h-full text-center hover:border-primary/30 transition-all duration-300">
                  <h4 className={`text-lg font-bold mb-2 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {feature.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Specs List */}
            <div>
              <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${isGreek ? 'greek-heading' : ''}`}>
                {t("technicalSpecs.title")}
              </h3>

              <div className="space-y-4">
                {technicalSpecs.map((spec, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + (idx * 0.08) }}
                    className="p-4 rounded-xl bg-card/50 hover:bg-card/80 transition-colors"
                  >
                    <p className={`text-base leading-relaxed text-foreground ${isGreek ? 'greek-text' : ''}`}>
                      {spec}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Operating Range Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <GlassCard className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Thermometer className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className={`text-xl font-bold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                      {t("operatingRange.title")}
                    </h4>
                    <p className="text-sm text-muted-foreground">{t("operatingRange.subtitle")}</p>
                  </div>
                </div>

                <div className="text-center py-8">
                  <div className={`text-5xl md:text-6xl font-bold text-primary mb-2 ${isGreek ? 'greek-heading' : ''}`}>
                    -20°C
                  </div>
                  <div className="flex items-center justify-center gap-4 my-4">
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                    <span className="text-2xl text-muted-foreground">{t("operatingRange.to")}</span>
                    <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                  </div>
                  <div className={`text-5xl md:text-6xl font-bold text-primary ${isGreek ? 'greek-heading' : ''}`}>
                    +60°C
                  </div>
                </div>

                <div className="border-t border-border pt-6 mt-6">
                  <p className={`text-sm text-muted-foreground text-center ${isGreek ? 'greek-text' : ''}`}>
                    {t("operatingRange.footer")}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
