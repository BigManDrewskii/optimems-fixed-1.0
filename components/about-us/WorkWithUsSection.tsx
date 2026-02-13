"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

export function WorkWithUsSection() {
  const t = useTranslations('aboutUsPage.workWithUs')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection spacing="standard">
      <motion.div
        className="bg-muted/15 rounded-2xl p-12 lg:p-16 text-center border border-primary/20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isGreek ? 'greek-heading' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('headline')}
        </motion.h2>
        <motion.p
          className={`text-muted-foreground mb-8 max-w-4xl mx-auto text-lg md:text-xl ${isGreek ? 'greek-text' : ''}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('subline')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" asChild className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
            <Link href="/careers">
              {t('cta')}
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </ProductPageSection>
  )
}
