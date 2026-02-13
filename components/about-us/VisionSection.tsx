"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

export function VisionSection() {
  const t = useTranslations('aboutUsPage.vision')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <div className="relative">
      <ProductPageSection
        header={{
          title: t('label'),
          align: "center",
          size: "standard"
        }}
        spacing="standard"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className={`text-lg text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('description')}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <BaseCard variant="standard" className="p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="aspect-video bg-primary/20 rounded-lg flex items-center justify-center">
                <svg className="w-24 h-24 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </BaseCard>
          </motion.div>
        </div>
      </ProductPageSection>
    </div>
  )
}
