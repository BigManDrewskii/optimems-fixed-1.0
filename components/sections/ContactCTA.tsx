"use client"

import { motion } from "framer-motion"
import { Dashboard16x9 } from "@/components/dashboard-demo-cta/components/layouts/Dashboard16x9"
import { Dashboard3x4 } from "@/components/dashboard-demo-cta/components/layouts/Dashboard3x4"
import { CustomPrimaryButton } from "@/components/shared"
import { useTranslations, useLocale } from "next-intl"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"

export function ContactCTA() {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Theme-Aware Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className={cn(
              "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight",
              "text-foreground",
              isGreek && "greek-heading"
            )}>
              {t('dashboardCTA.headline')}
            </h2>

            <p className={cn(
              "text-lg md:text-xl leading-relaxed",
              "text-muted-foreground",
              isGreek && "greek-text"
            )}>
              {t('dashboardCTA.subheadline')}
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-start"
            >
              <CustomPrimaryButton
                href={t('dashboardCTA.primaryCTA.href')}
                label={t('dashboardCTA.primaryCTA.label')}
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Dashboard (Always Dark) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard container - laptop bezel frame */}
            <div className="relative p-1.5 rounded-[20px] bg-[var(--dashboard-surface)] border border-[var(--dashboard-border)] shadow-2xl">
              {/* Top light reflection */}
              <div className="absolute inset-x-0 top-0 h-px rounded-t-[20px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />

              {/* Aspect ratio wrapper - 16:9 on desktop, 3:4 on mobile */}
              <div className="relative aspect-[16/9] rounded-[16px] overflow-hidden bg-[var(--dashboard-bg)]">
                {/* 16:9 layout - shown on lg+ screens */}
                <div className="hidden lg:block absolute inset-0">
                  <Dashboard16x9 />
                </div>

                {/* 3:4 layout - shown on smaller screens */}
                <div className="lg:hidden absolute inset-0">
                  <Dashboard3x4 />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
