"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Badge } from "@/components/ui/badge"

/**
 * MindTechnology - Technology & Architecture section
 *
 * Consolidated section covering hardware, software, and architectural advantages.
 * Icon-free design using badges and clean typography.
 */
export function MindTechnology() {
  const t = useTranslations('mindPage.technology')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const hardwareFeatures = t.raw('hardware.features') as string[]
  const protocols = t.raw('hardware.protocols') as string[]
  const securityFeatures = t.raw('hardware.security') as string[]
  const softwareFeatures = t.raw('software.features') as string[]

  const advantages = [
    {
      title: t('advantages.modular.title'),
      description: t('advantages.modular.description')
    },
    {
      title: t('advantages.secure.title'),
      description: t('advantages.secure.description')
    },
    {
      title: t('advantages.remote.title'),
      description: t('advantages.remote.description')
    },
    {
      title: t('advantages.compatible.title'),
      description: t('advantages.compatible.description')
    }
  ]

  return (
    <ProductPageSection
      spacing="grand"
      className="bg-gradient-to-b from-background to-background/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge className="mb-4" variant="secondary">
            {t('subheadline')}
          </Badge>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('introduction')}
          </p>
        </motion.div>

        {/* Hardware Foundation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
            {t('hardware.headline')}
          </h3>
          <p className={`text-muted-foreground mb-6 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('hardware.description')}
          </p>

          {/* Core Features */}
          <div className="bg-muted/30 rounded-xl p-6 mb-6">
            <h4 className={`text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 ${isGreek ? 'greek-text' : ''}`}>
              Core Features
            </h4>
            <ul className="space-y-3">
              {hardwareFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
                  className={`flex items-start gap-3 text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}
                >
                  <span className="text-primary font-semibold flex-shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Communication Protocols */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className={`text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 ${isGreek ? 'greek-text' : ''}`}>
                Communication Protocols
              </h4>
              <ul className="space-y-2">
                {protocols.map((protocol, idx) => (
                  <li
                    key={idx}
                    className={`text-sm text-foreground font-mono ${isGreek ? 'greek-text' : ''}`}
                  >
                    {protocol}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-muted/30 rounded-xl p-6">
              <h4 className={`text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4 ${isGreek ? 'greek-text' : ''}`}>
                Security & Compliance
              </h4>
              <ul className="space-y-3">
                {securityFeatures.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                    className={`flex items-start gap-3 text-sm text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}
                  >
                    <span className="text-primary font-semibold flex-shrink-0 mt-0.5">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Software Platform */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className={`text-2xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
            {t('software.headline')}
          </h3>
          <div className="bg-muted/30 rounded-xl p-6">
            <ul className="space-y-3">
              {softwareFeatures.map((feature, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (idx * 0.05) }}
                  className={`flex items-start gap-3 text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}
                >
                  <span className="text-primary font-semibold flex-shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Architectural Advantages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={`text-2xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
            {t('advantages.headline')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 + (idx * 0.05) }}
                className="border border-primary/20 rounded-xl p-6 bg-background"
              >
                <h4 className={`text-lg font-bold mb-3 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {adv.title}
                </h4>
                <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {adv.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </ProductPageSection>
  )
}
