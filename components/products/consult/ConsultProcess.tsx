"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { 
  Search, 
  FileText, 
  Settings, 
  CheckCircle,
  ArrowRight
} from "lucide-react"

interface ProcessStep {
  number: number
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  details: string[]
}

/**
 * ConsultProcess - Process workflow section
 */
export function ConsultProcess() {
  const t = useTranslations('consultPage.process')

  const steps: ProcessStep[] = [
    {
      number: 1,
      icon: Search,
      title: t('step1.title'),
      description: t('step1.description'),
      details: t.raw('step1.details') as string[]
    },
    {
      number: 2,
      icon: FileText,
      title: t('step2.title'),
      description: t('step2.description'),
      details: t.raw('step2.details') as string[]
    },
    {
      number: 3,
      icon: Settings,
      title: t('step3.title'),
      description: t('step3.description'),
      details: t.raw('step3.details') as string[]
    },
    {
      number: 4,
      icon: CheckCircle,
      title: t('step4.title'),
      description: t('step4.description'),
      details: t.raw('step4.details') as string[]
    }
  ]

  return (
    <AnimatedSection className="py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subheadline')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Step Card */}
              <div className="relative p-6 rounded-2xl bg-background border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors duration-300 h-full">
                {/* Elegant Number Badge - Top Right Corner */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Details List */}
                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}