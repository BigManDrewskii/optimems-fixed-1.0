"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Shield, Zap, AlertTriangle, Settings, TrendingUp, Clock } from "lucide-react"
import { BaseCard } from "@/components/shared/BaseCard"

/**
 * SolarProblem - Problem section with icon-driven cards
 *
 * Displays industry challenges with numbered icon cards.
 */
export function SolarProblem() {
  const t = useTranslations('solarControlPage.problem')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const challenges = t.raw('challenges') as Array<{ title: string; description: string }>

  const icons = [Shield, Zap, AlertTriangle, Settings, TrendingUp, Clock]

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center leading-tight ${isGreek ? 'greek-heading' : ''}`}
        >
          {t('headline')}
        </motion.h2>

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
        >
          {t('introduction')}
        </motion.p>

        {/* Grid of Challenge Cards with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, idx) => {
            const IconComponent = icons[idx]
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <BaseCard variant="standard" className="h-full p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-lg font-bold mb-2 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                        {challenge.title}
                      </h3>
                      <p className={`text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                        {challenge.description}
                      </p>
                    </div>
                  </div>
                </BaseCard>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-base text-muted-foreground max-w-4xl mx-auto"
        >
          {t('closing')}
        </motion.p>
      </div>
    </section>
  )
}

