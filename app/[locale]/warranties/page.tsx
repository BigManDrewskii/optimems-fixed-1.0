"use client"

import { AppLayout } from "@/app/app-layout"
import { useTranslations, useLocale } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { BaseCard } from "@/components/shared/BaseCard"
import { CustomPrimaryButton } from "@/components/shared"
import { Shield, HeadphonesIcon, RefreshCw } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { CheckCircle2 } from "lucide-react"

/**
 * Warranties Page - Comprehensive warranty information for all Optimems products
 */
export default function WarrantiesPage() {
  const t = useTranslations('warrantiesPage')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const features = t.raw('overview.features') as Record<string, { title: string, description: string }>

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 lg:pt-48">
          <AnimatedSection>
            <Container>
              <div className="max-w-4xl mx-auto pb-16 md:pb-24">
                <SectionHeader
                  title={t('hero.headline')}
                  description={t('hero.subheadline')}
                  align="center"
                  size="large"
                />
              </div>
            </Container>
          </AnimatedSection>
        </div>

        {/* Overview Section */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24">
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">{t('overview.badge')}</span>
                </div>
              </div>

              {/* Title and Description */}
              <div className="text-center mb-12">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                  {t('overview.title')}
                </h2>
                <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
                  {t('overview.description')}
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(features).map(([key, feature]) => {
                  const icons: Record<string, any> = {
                    hardware: Shield,
                    software: RefreshCw,
                    support: HeadphonesIcon,
                    compliance: Shield
                  }
                  const Icon = icons[key] || Shield

                  return (
                    <BaseCard key={key} variant="standard" scale={true} className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    </BaseCard>
                  )
                })}
              </div>
            </div>
          </Container>
        </AnimatedSection>

        {/* Product Warranties Section */}
        <AnimatedSection>
          <Container>
            <div className="max-w-6xl mx-auto py-16 md:py-24">
              <SectionHeader
                title="Product Coverage"
                description="Warranty details for each Optimems product"
                align="center"
                size="standard"
              />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
                {/* SolarControl Warranty */}
                <BaseCard variant="standard" scale={true} className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className={`text-xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                      {t('solarControl.title')}
                    </h3>
                  </div>
                  <p className={`text-muted-foreground mb-6 ${isGreek ? 'greek-text' : ''}`}>
                    {t('solarControl.description')}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
                    {t('solarControl.badge')}
                  </div>
                  <ul className="space-y-3">
                    {(t.raw('solarControl.coverage') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${isGreek ? 'greek-text' : ''}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </BaseCard>

                {/* Mind Warranty */}
                <BaseCard variant="standard" scale={true} className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className={`text-xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                      {t('mind.title')}
                    </h3>
                  </div>
                  <p className={`text-muted-foreground mb-6 ${isGreek ? 'greek-text' : ''}`}>
                    {t('mind.description')}
                  </p>
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium text-primary mb-6">
                    {t('mind.badge')}
                  </div>
                  <ul className="space-y-3">
                    {(t.raw('mind.coverage') as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className={`text-sm ${isGreek ? 'greek-text' : ''}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </BaseCard>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        {/* Support Section */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24">
              <SectionHeader
                title={t('support.title')}
                description={t('support.description')}
                align="center"
                size="standard"
              />

              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
                  <HeadphonesIcon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{t('support.responseTime')}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  {(t.raw('support.features') as Array<{ icon: string, title: string, description: string }>).map((feature, idx) => {
                    const icons: Record<string, any> = {
                      HeadphonesIcon,
                      RefreshCw,
                      Shield
                    }
                    const Icon = icons[feature.icon] || HeadphonesIcon

                    return (
                      <div key={idx} className="text-center">
                        <div className="inline-flex w-16 h-16 rounded-2xl bg-primary/10 items-center justify-center mb-4 mx-auto">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h4 className={`font-semibold mb-2 ${isGreek ? 'greek-heading' : ''}`}>{feature.title}</h4>
                        <p className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>{feature.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </Container>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <Container>
            <div className="max-w-3xl mx-auto py-16 md:py-24">
              <BaseCard variant="standard" className="p-8 md:p-12 text-center">
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                  {t('cta.title')}
                </h2>
                <p className={`text-muted-foreground mb-8 max-w-2xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
                  {t('cta.description')}
                </p>
                <div className="flex justify-center">
                  <CustomPrimaryButton
                    href={t('cta.buttonHref')}
                    label={t('cta.button')}
                  />
                </div>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
