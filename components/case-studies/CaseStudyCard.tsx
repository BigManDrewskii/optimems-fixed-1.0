"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

interface CaseStudyCardProps {
  client: string
  tags: string[]
  description: string
  focusAreas: string[]
}

export function CaseStudyCard({ client, tags, description, focusAreas }: CaseStudyCardProps) {
    const t = useTranslations("caseStudies")
  const isGreek = useLocale() === 'el'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group h-full"
    >
      <div className="bg-card border border-border rounded-2xl p-8 h-full flex flex-col hover:border-primary/50 transition-all duration-300">
        {/* Industry Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Client Name */}
        <h3 className={`text-2xl font-bold mb-4 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
          {client}
        </h3>

        {/* Description */}
        <p className={`text-muted-foreground mb-6 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
          {description}
        </p>

        {/* Key Focus Areas */}
        <div className="mt-auto">
          <p className={`text-xs uppercase tracking-wider text-muted-foreground mb-3 ${isGreek ? 'greek-text' : ''}`}>
            {t("keyFocusAreas")}
          </p>
          <ul className="space-y-2">
            {focusAreas.map((area, index) => (
              <li key={index} className={`flex items-start gap-2 text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                <span className="text-primary mt-1">•</span>
                <span>{area}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Arrow Indicator */}
        <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className={`text-sm font-medium ${isGreek ? 'greek-text' : ''}`}>
            {t("learnMore")}
          </span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  )
}
