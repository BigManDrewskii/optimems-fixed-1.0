"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { 
  Cpu, 
  Database, 
  Shield, 
  TrendingUp,
  Zap,
  BarChart3,
  Globe,
  Cloud
} from "lucide-react"

interface TechnologyCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  highlights: string[]
}

/**
 * ConsultTechnology - Technology showcase section
 */
export function ConsultTechnology() {
  const t = useTranslations('consultPage.technology')

  const technologies: TechnologyCard[] = [
    {
      icon: Cpu,
      title: t('tech1.title'),
      description: t('tech1.description'),
      highlights: t.raw('tech1.highlights') as string[]
    },
    {
      icon: Database,
      title: t('tech2.title'),
      description: t('tech2.description'),
      highlights: t.raw('tech2.highlights') as string[]
    },
    {
      icon: Shield,
      title: t('tech3.title'),
      description: t('tech3.description'),
      highlights: t.raw('tech3.highlights') as string[]
    },
    {
      icon: TrendingUp,
      title: t('tech4.title'),
      description: t('tech4.description'),
      highlights: t.raw('tech4.highlights') as string[]
    },
    {
      icon: Zap,
      title: t('tech5.title'),
      description: t('tech5.description'),
      highlights: t.raw('tech5.highlights') as string[]
    },
    {
      icon: BarChart3,
      title: t('tech6.title'),
      description: t('tech6.description'),
      highlights: t.raw('tech6.highlights') as string[]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

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

        {/* Technology Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-6 rounded-2xl bg-background border border-border/50 backdrop-blur-sm h-full">
                {/* Icon */}
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/20 mb-4">
                  <tech.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {tech.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {tech.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  {tech.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Stats/Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {[
            {
              icon: Globe,
              value: t('stats.globalProjects'),
              label: t('stats.globalProjectsLabel')
            },
            {
              icon: Cloud,
              value: t('stats.dataPoints'),
              label: t('stats.dataPointsLabel')
            },
            {
              icon: Zap,
              value: t('stats.optimization'),
              label: t('stats.optimizationLabel')
            },
            {
              icon: Shield,
              value: t('stats.reliability'),
              label: t('stats.reliabilityLabel')
            }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <div className="inline-flex p-3 rounded-full bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}