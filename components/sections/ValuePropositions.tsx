"use client"

import { motion } from "framer-motion"
import { TrendingUp, Coins, ShieldCheck, Zap, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { valuePropKeys } from "@/lib/i18n/translation-keys"
import { valuePropositions, contactCTA } from "@/data/landing-page"
import { SectionHeader, BaseCard, CustomPrimaryButton } from "@/components/shared"
import { Link } from "@/i18n/navigation"

interface CompactValuePropCardProps {
  valueProp: typeof valuePropositions[0]
  index: number
}

function CompactValuePropCard({ valueProp, index }: CompactValuePropCardProps) {
  const t = useTranslations('home')
  const key = valuePropKeys[index]

  const iconMap = {
    profit: TrendingUp,
    revenue: Coins,
    investment: ShieldCheck,
    deployment: Zap,
  }

  const IconComponent = iconMap[valueProp.icon as keyof typeof iconMap]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <BaseCard
        variant="standard"
        rounded="xl"
        scale={false}
        padding="md"
        className="h-full group hover:-translate-y-1 transition-transform duration-300"
      >
        {/* Icon with larger background and hover effects */}
        <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/15">
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            whileInView={{ scale: [1, 1.1, 1], rotate: [0, 3, 0] }}
            whileTap={{ scale: 1.25, rotate: 3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="md:hidden cursor-pointer"
          >
            <IconComponent
              className="w-8 h-8 text-primary"
              strokeWidth={2}
            />
          </motion.div>
          <IconComponent
            className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-125 group-hover:rotate-3 hidden md:block"
            strokeWidth={2}
          />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-foreground mb-2">
          {t(`valuePropositions.${key}.title`)}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {t(`valuePropositions.${key}.description`)}
        </p>
      </BaseCard>
    </motion.div>
  )
}

function CTACard() {
  const t = useTranslations('home')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      <BaseCard
        variant="cta"
        colorScheme="primary"
        rounded="2xl"
        scale={true}
        shadow={true}
        padding="lg"
        className="h-full"
      >
        <div className="flex flex-col h-full justify-center items-center text-center">
          <h3 className="text-xl font-bold text-background mb-4">
            {t('valuePropositions.ctaCard.title')}
          </h3>
          <CustomPrimaryButton
            href={contactCTA.primaryCTA.href}
            label={t('valuePropositions.ctaCard.buttonLabel')}
          />
        </div>
      </BaseCard>
    </motion.div>
  )
}

export function ValuePropositions() {
  const t = useTranslations('home')

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-6xl mx-auto">
          {/* Centered Section Header */}
          <SectionHeader
            label={t('valuePropositions.eyebrow')}
            title={t('valuePropositions.title')}
            description={t('valuePropositions.description')}
            align="center"
            className="mb-12"
          />

          {/* Card Grid - 4 cards horizontally */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 4 value prop cards */}
            <CompactValuePropCard valueProp={valuePropositions[0]} index={0} />
            <CompactValuePropCard valueProp={valuePropositions[1]} index={1} />
            <CompactValuePropCard valueProp={valuePropositions[2]} index={2} />
            <CompactValuePropCard valueProp={valuePropositions[3]} index={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
