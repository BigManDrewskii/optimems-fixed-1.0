"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

export function MissionSection() {
  const t = useTranslations('aboutUsPage.mission')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const paragraphs = [
    { key: 'statement', className: 'text-lg font-medium' },
    { key: 'details', className: 'text-base text-muted-foreground' },
    { key: 'accelerating', className: 'text-lg text-primary font-semibold' }
  ]

  return (
    <div className="relative">
      <ProductPageSection
        header={{
          title: t('title'),
          align: "left",
          size: "standard"
        }}
        spacing="spacious"
      >
        <div className="max-w-4xl space-y-8">
          {paragraphs.map((para, index) => (
            <motion.p
              key={para.key}
              className={`leading-relaxed ${para.className} ${isGreek ? 'greek-text' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {t(para.key)}
            </motion.p>
          ))}
        </div>
      </ProductPageSection>
    </div>
  )
}
