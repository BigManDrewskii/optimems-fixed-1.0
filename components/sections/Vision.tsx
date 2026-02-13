"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import Link from "next/link"

export function Vision() {
  const t = useTranslations('home')

  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-[1152px] relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6 md:mb-10"
        >
          <div className="flex flex-col gap-2 md:gap-3 items-center">
            <p className="text-xs uppercase tracking-[1.32px] leading-4 text-primary">
              {t('vision.sectionTitle')}
            </p>
            <h2 className="text-2xl md:text-4xl lg:text-[48px] font-bold text-foreground leading-tight md:leading-[60px] tracking-[-0.72px]">
              {t('vision.statement')}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed md:leading-8 max-w-[768px]">
              {t('vision.tagline')}
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 backdrop-blur-md rounded-xl md:rounded-2xl bg-card/60 border border-border/50 p-5 md:p-10 hover:border-secondary transition-all duration-200"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-[0.16px]">
                {t('vision.themes.promotingGreenEnergy.title')}
              </h3>
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.16px]">
                {t('vision.themes.promotingGreenEnergy.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 backdrop-blur-md rounded-xl md:rounded-2xl bg-card/60 border border-border/50 p-5 md:p-10 hover:border-secondary transition-all duration-200"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-[0.16px]">
                {t('vision.themes.gridStability.title')}
              </h3>
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.16px]">
                {t('vision.themes.gridStability.description')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex-1 rounded-xl md:rounded-2xl bg-primary/10 border border-primary/20 p-5 md:p-6 flex flex-col gap-4 md:gap-5 hover:border-secondary transition-all duration-200"
          >
            <div className="flex flex-col gap-3 md:gap-4">
              <h3 className="text-lg md:text-xl font-semibold text-foreground tracking-[0.16px]">
                {t('vision.exploreSolutions')}
              </h3>
              <p className="text-sm md:text-base text-foreground/60 tracking-[0.16px]">
                {t('vision.exploreDescription')}
              </p>
            </div>
            <Button asChild variant="primary" size="default" className="gap-2">
              <Link href="/demo">
                {t('vision.exploreCTA')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
