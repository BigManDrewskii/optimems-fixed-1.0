"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { Brain } from "lucide-react"
import { OrbitGraphic } from "@/components/products/mind/OrbitGraphic"

/**
 * MindSolution - Solution section with 2-column layout
 *
 * Introduces +Mind as the intelligent control center.
 */
export function MindSolution() {
  const t = useTranslations('mindPage.solution')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection
      spacing="spacious"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column: Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${isGreek ? 'greek-heading' : ''}`}>
              {t('headline')}
            </h2>
            <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('introduction')}
            </p>
            <p className={`text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('coreFunctionality')}
            </p>
          </motion.div>

          {/* Right Column: Orbit Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <OrbitGraphic />
          </motion.div>

        </div>


      </div>
    </ProductPageSection>
  )
}
