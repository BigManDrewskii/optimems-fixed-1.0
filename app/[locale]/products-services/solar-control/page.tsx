import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { SolarControlContent } from "./SolarControlContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'solarControlPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `https://optimems.gr/${locale}/products-services/solar-control`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `https://optimems.gr/${locale}/products-services/solar-control`,
      languages: {
        el: 'https://optimems.gr/el/products-services/solar-control',
        en: 'https://optimems.gr/en/products-services/solar-control',
      },
    },
  }
}

export default async function SolarControlPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'solarControlPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const productSchema = createProductSchema(
    '+SolarControl',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `https://optimems.gr/${locale}` },
    { name: 'Products', url: `https://optimems.gr/${locale}/products-services` },
    { name: '+SolarControl', url: `https://optimems.gr/${locale}/products-services/solar-control` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <SolarControlContent />
    </>
  )
}
