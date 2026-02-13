"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

function ThemeBackgroundImage({ lightSrc, darkSrc, alt }: { lightSrc: string; darkSrc: string; alt: string }) {
  return (
    <>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${lightSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label={alt}
      />
      <div
        className="absolute inset-0 light:hidden"
        style={{
          backgroundImage: `url(${darkSrc})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundRepeat: 'no-repeat',
        }}
        role="img"
        aria-label={alt}
      />
    </>
  )
}

export function ValuesSection() {
  const t = useTranslations('aboutUsPage.values')
  const tWork = useTranslations('aboutUsPage.workWithUs')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const values = [
    {
      title: t('innovation.title'),
      description: t('innovation.description')
    },
    {
      title: t('sustainability.title'),
      description: t('sustainability.description')
    },
    {
      title: t('holistic.title'),
      description: t('holistic.description')
    }
  ]

  return (
    <div className="relative">
      <ProductPageSection
        header={{
          title: t('title'),
          align: "center",
          size: "standard"
        }}
        spacing="standard"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border shadow-lg rounded-xl md:rounded-2xl overflow-hidden"
          >
            <div
              className="relative"
              style={{ minHeight: '400px' }}
            >
              <ThemeBackgroundImage
                lightSrc="/images/sections/values-card-bg-light.jpg"
                darkSrc="/images/sections/values-card-bg-dark.jpg"
                alt="Company values background"
              />
              <div className="absolute inset-0 bg-background/75" />

              <div className="relative z-10 px-4 md:px-8 lg:px-16 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className={`text-2xl md:text-xl font-semibold leading-8 tracking-wide text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                        {value.title}
                      </h3>
                      <p className={`text-sm md:text-base leading-relaxed text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 shadow-lg rounded-xl md:rounded-2xl overflow-hidden"
          >
            <div
              className="relative"
              style={{ minHeight: '350px' }}
            >
              <ThemeBackgroundImage
                lightSrc="/images/sections/cta-card-about-us-banner-light.jpg"
                darkSrc="/images/sections/cta-card-about-us-banner-dark.jpg"
                alt="Work with us background"
              />
              <div className="absolute inset-0 bg-background/75" />

              <div className="relative z-10 p-12 lg:p-16 text-center flex flex-col items-center justify-center" style={{ minHeight: '350px' }}>
                <motion.h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isGreek ? 'greek-heading' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {tWork('headline')}
                </motion.h2>
                <motion.p
                  className={`text-muted-foreground mb-8 text-lg md:text-xl ${isGreek ? 'greek-text' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {tWork('subline')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button variant="primary" size="lg" asChild className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <Link href="/careers">
                      {tWork('cta')}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </ProductPageSection>
    </div>
  )
}
