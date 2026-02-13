"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"

/**
 * MindProblem - Problem section showing energy management challenges
 *
 * Displays the complexity of modern energy systems with pain points.
 */
export function MindProblem() {
  const t = useTranslations('mindPage.problem')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const painPoints = t.raw('painPoints') as string[]

  return (
    <ProductPageSection
      spacing="spacious"
      header={{
        title: t('headline'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Opening Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className={`text-xl md:text-2xl text-center text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('opening')}
          </p>
        </motion.div>



        {/* Challenge Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <p className={`text-xl text-center text-muted-foreground leading-relaxed mb-12 ${isGreek ? 'greek-text' : ''}`}>
            {t('challenge')}
          </p>


        </motion.div>

        {/* Pain Points Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className={`text-2xl md:text-3xl font-bold mb-8 text-center ${isGreek ? 'greek-heading' : ''}`}>
            Key Challenges
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, idx) => (
              <motion.div
                key={point.replace(/\s+/g, '-').toLowerCase()}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 + (idx * 0.05) }}
                whileHover={{ y: -4 }}
                className="border border-border/30 rounded-xl bg-card/50 p-6 hover:border-primary/30 transition-all"
              >
                <p className={`text-muted-foreground text-base leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {point}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <BaseCard variant="standard" className="p-8 text-center">
            <p className={`text-lg md:text-xl font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('bottomLine')}
            </p>
          </BaseCard>
        </motion.div>
      </div>
    </ProductPageSection>
  )
}
