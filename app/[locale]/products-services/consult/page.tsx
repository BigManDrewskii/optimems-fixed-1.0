import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { ConsultContent } from "./ConsultContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'consultPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `https://optimems.gr/${locale}/products-services/consult`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `https://optimems.gr/${locale}/products-services/consult`,
      languages: {
        el: 'https://optimems.gr/el/products-services/consult',
        en: 'https://optimems.gr/en/products-services/consult',
      },
    },
  }
}

export default async function ConsultPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'consultPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const serviceSchema = createProductSchema(
    'Consulting Services',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `https://optimems.gr/${locale}` },
    { name: 'Products', url: `https://optimems.gr/${locale}/products-services` },
    { name: 'Consulting', url: `https://optimems.gr/${locale}/products-services/consult` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={serviceSchema} />
      <StructuredData data={breadcrumbSchema} />
      <ConsultContent />
    </>
  )
}