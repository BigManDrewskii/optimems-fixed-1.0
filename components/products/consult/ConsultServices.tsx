"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { CustomPrimaryButton } from "@/components/shared"
import { 
  Factory, 
  Zap, 
  BarChart3, 
  Network,
  ArrowRight,
  CheckCircle
} from "lucide-react"

interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  href: string
  gradient: string
}

/**
 * ConsultServices - Services grid section showcasing 4 main consulting categories
 */
export function ConsultServices() {
  const t = useTranslations('consultPage.services')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const services: ServiceCard[] = [
    {
      icon: Factory,
      title: t('service1.title'),
      description: t('service1.description'),
      features: t.raw('service1.features') as string[],
      href: t('service1.href'),
      gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Zap,
      title: t('service2.title'),
      description: t('service2.description'),
      features: t.raw('service2.features') as string[],
      href: t('service2.href'),
      gradient: 'from-purple-500/20 to-pink-500/20'
    },
    {
      icon: BarChart3,
      title: t('service3.title'),
      description: t('service3.description'),
      features: t.raw('service3.features') as string[],
      href: t('service3.href'),
      gradient: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Network,
      title: t('service4.title'),
      description: t('service4.description'),
      features: t.raw('service4.features') as string[],
      href: t('service4.href'),
      gradient: 'from-orange-500/20 to-red-500/20'
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/30 rounded-2xl border border-border/50 backdrop-blur-sm" />
              
              {/* Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />

              {/* Card Content */}
              <div className="relative p-8 lg:p-10">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
                  <service.icon className="w-6 h-6 text-foreground" />
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <a
                  href={service.href}
                  className="group/btn w-full justify-between p-0 h-auto text-primary hover:text-primary hover:bg-transparent inline-flex items-center transition-colors"
                >
                  <span>{t('learnMore')}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              {t('cta.title')}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl">
              {t('cta.description')}
            </p>
            <CustomPrimaryButton href={t('cta.href')} label={t('cta.button')} />
          </div>
        </motion.div>
      </Container>
    </AnimatedSection>
  )
}