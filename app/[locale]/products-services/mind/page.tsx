import { Metadata } from "next"
import { getTranslations } from "next-intl/server"
import { MindContent } from "./MindContent"
import { StructuredData } from "@/components/seo/StructuredData"
import { createOrganizationSchema, createProductSchema, createBreadcrumbSchema } from "@/lib/structured-data"

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'mindPage' })

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale,
      url: `https://optimems.gr/${locale}/products-services/mind`,
      siteName: 'Optimems',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('meta.title'),
      description: t('meta.description'),
    },
    alternates: {
      canonical: `https://optimems.gr/${locale}/products-services/mind`,
      languages: {
        el: 'https://optimems.gr/el/products-services/mind',
        en: 'https://optimems.gr/en/products-services/mind',
      },
    },
  }
}

export default async function MindPage({ params }: PageProps) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'mindPage' })

  // Create structured data
  const organizationSchema = createOrganizationSchema()
  const productSchema = createProductSchema(
    '+Mind',
    t('meta.description')
  )
  const breadcrumbSchema = createBreadcrumbSchema([
    { name: 'Home', url: `https://optimems.gr/${locale}` },
    { name: 'Products', url: `https://optimems.gr/${locale}/products-services` },
    { name: '+Mind', url: `https://optimems.gr/${locale}/products-services/mind` }
  ])

  return (
    <>
      <StructuredData data={organizationSchema} />
      <StructuredData data={productSchema} />
      <StructuredData data={breadcrumbSchema} />
      <MindContent />
    </>
  )
}
