"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { VideoCard } from "@/components/shared/Card/VideoCard"
import { products } from "@/data/landing-page"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"
import { SectionHeader } from "@/components/shared/SectionHeader"

const logoMap: Record<string, { dark: string; light: string }> = {
  '+SolarControl': { dark: '/images/logos/optimems-solar-control.svg', light: '/images/logos/optimems-solar-control-light.svg' },
  '+Mind': { dark: '/images/logos/optimems-mind.svg', light: '/images/logos/optimems-mind-light.svg' },
}

function ProductsServicesPage() {
  const t = useTranslations()

  const getProductFeatures = (index: number): string[] => {
    if (index === 0) {
      return [
        t('products.solarControl.features.0'),
        t('products.solarControl.features.1'),
        t('products.solarControl.features.2'),
        t('products.solarControl.features.3'),
      ]
    }
    return [
      t('products.mind.features.0'),
      t('products.mind.features.1'),
      t('products.mind.features.2'),
      t('products.mind.features.3'),
    ]
  }

  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Hero Section - Title & Subtitle */}
        <AnimatedSection>
          <div className="relative pt-32 md:pt-40 lg:pt-48 pb-20">
            <Container>
              <SectionHeader
                title={t('products.title')}
                description={t('products.subtitle')}
              />
            </Container>
          </div>
        </AnimatedSection>

        {/* Products Grid - 2 Columns with VideoCard */}
        <AnimatedSection>
          <Container>
            <div className="pb-20">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
                {products.map((product, index) => (
                  <VideoCard
                    key={product.name}
                    videoKey={product.name === '+SolarControl' ? 'solarControl' : 'mindAiCore'}
                    href={product.href}
                    logo={logoMap[product.name]}
                    tagline={index === 0 ? t('products.solarControl.tagline') : t('products.mind.tagline')}
                    description={index === 0 ? t('products.solarControl.description') : t('products.mind.description')}
                    features={getProductFeatures(index)}
                    displayOrder={index}
                  >
                    <Button variant="primary" size="sm" className="group whitespace-nowrap">
                      {t('products.learnMore')}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </VideoCard>
                ))}
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}

export default ProductsServicesPage
