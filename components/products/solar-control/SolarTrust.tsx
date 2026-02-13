"use client"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import Image from "next/image"
import { useTheme } from "next-themes"

/**
 * SolarTrust - Trust section with logo cards
 *
 * Displays EU manufacturing and certification with prominent logos,
 * plus key statistics in 2×2 grid layout.
 */
export function SolarTrust() {
  const t = useTranslations('solarControlPage.trust')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const benefits = t.raw('inHouseBenefits') as string[]

  return (
    <section className="w-full relative flex flex-col items-center justify-center px-8 py-16 max-w-[1152px] mx-auto text-center">
      <div className="flex flex-col items-start w-full gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center w-full"
        >
          <h2 className={`text-[48px] font-bold leading-[60px] tracking-wide ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center w-full"
        >
          <p className={`text-[18px] text-muted-foreground leading-[28px] ${isGreek ? 'greek-text' : ''}`}>
            {t('subheadline')}
          </p>
        </motion.div>

        {/* 2-Column Card Grid with Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full mt-4">

          {/* Card 1: EU Manufacturing */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-border/30 rounded-xl bg-card/5 p-6 md:p-8 flex flex-col items-center"
          >
            {/* Centered EU Logo - Icon Only */}
            <div className="flex justify-center mb-6">
              <Image
                src="/images/sections/manufactured-in-eu-logo.svg"
                alt="Manufactured in EU"
                width={80}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </div>

            {/* Title - Below Logo, Full Width */}
            <h3 className={`text-center text-xl font-semibold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
              {t('inHouseTitle')}
            </h3>

            {/* Description - Full Width */}
            <p className={`text-center text-sm text-muted-foreground leading-relaxed mb-6 ${isGreek ? 'greek-text' : ''}`}>
              {t('inHouseDescription')}
            </p>

            {/* Bullet Points */}
            <div className="w-full space-y-3 text-center">
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 text-primary leading-5">•</div>
                <p className={`text-sm leading-5 text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                  {benefits[0]}
                </p>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="flex-shrink-0 text-primary leading-5">•</div>
                <p className={`text-sm leading-5 text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                  {benefits[1]}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Certification */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="border border-border/30 rounded-xl bg-card/5 p-6 md:p-8 flex flex-col items-center"
          >
            {/* Centered Auth Logo - Icon Only */}
            <div className="flex justify-center mb-6">
              <Image
                src={resolvedTheme === 'dark' ? '/images/sections/auth-logo-certified.svg' : '/images/logos/auth-logo-certified-light.svg'}
                alt="Officially Certified"
                width={80}
                height={80}
                className="h-20 w-auto"
                priority
              />
            </div>

            {/* Title - Below Logo, Full Width */}
            <h3 className={`text-center text-xl font-semibold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
              {t('certifiedLabel')}
            </h3>

            {/* Description - Full Width */}
            <p className={`text-center text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('certifiedDescription')}
            </p>
          </motion.div>

        </div>

        {/* Stats Grid - All 4 Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-start gap-8 w-full pt-6 border-t border-border/30"
        >
          {/* Stat 1 */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <p className="text-[36px] font-bold text-primary leading-10">
              {t('stats.stat1.value')}
            </p>
            <p className={`text-[14px] text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
              {t('stats.stat1.description')}
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <p className="text-[36px] font-bold text-primary leading-10">
              {t('stats.stat2.value')}
            </p>
            <p className={`text-[14px] text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
              {t('stats.stat2.description')}
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <p className="text-[36px] font-bold text-primary leading-10">
              {t('stats.stat3.value')}
            </p>
            <p className={`text-[14px] text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
              {t('stats.stat3.description')}
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <p className="text-[36px] font-bold text-primary leading-10">
              {t('stats.stat4.value')}
            </p>
            <p className={`text-[14px] text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
              {t('stats.stat4.description')}
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
