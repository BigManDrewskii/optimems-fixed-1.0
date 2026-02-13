import { AppLayout } from "@/app/app-layout"
import { Hero } from "@/components/sections/Hero"
import dynamic from "next/dynamic"
import { Vision } from "@/components/sections/Vision"
import { ContactCTA } from "@/components/sections/ContactCTA"
import { GovernmentLogos } from "@/components/sections/GovernmentLogos"
import { Skeleton } from "@/components/ui/skeleton"
import { getAllPosts } from "@/lib/blog"
import {
  UserSegmentsSkeleton,
  StatsSkeleton,
  ProductsSkeleton,
  ValuePropositionsSkeleton,
  BlogPreviewSkeleton,
} from "@/components/sections/landing-skeletons"
import { StructuredData } from "@/components/seo/StructuredData"

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <Skeleton className="h-[800px] w-full max-w-[1400px] mx-auto" />,
  ssr: true
})

// Dynamic imports for below-fold sections (reduces initial bundle)
const UserSegments = dynamic(
  () => import('@/components/sections/UserSegments').then(mod => ({ default: mod.UserSegments })),
  {
    ssr: true,
    loading: () => <UserSegmentsSkeleton />
  }
)

const Stats = dynamic(
  () => import('@/components/sections/Stats').then(mod => ({ default: mod.Stats })),
  {
    ssr: true,
    loading: () => <StatsSkeleton />
  }
)

const Products = dynamic(
  () => import('@/components/sections/Products').then(mod => ({ default: mod.Products })),
  {
    ssr: true,
    loading: () => <ProductsSkeleton />
  }
)

const ValuePropositions = dynamic(
  () => import('@/components/sections/ValuePropositions').then(mod => ({ default: mod.ValuePropositions })),
  {
    ssr: true,
    loading: () => <ValuePropositionsSkeleton />
  }
)

const BlogPreviewWrapper = dynamic(
  () => import('@/components/sections/BlogPreviewWrapper').then(mod => ({ default: mod.BlogPreviewWrapper })),
  {
    ssr: true,
    loading: () => <BlogPreviewSkeleton />
  }
)

// Featured blog posts to show on homepage
const featuredSlugs = [
  '2025-06-26-optimems-nbg-business-seeds',
  '2025-06-02-optimems-web-summit-vancouver',
  '2025-05-10-job-opening-tech-support'
]

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  // Fetch featured posts from actual blog data (server-side)
  const allPosts = getAllPosts(locale)
  const featuredPosts = allPosts.filter(post => featuredSlugs.includes(post.slug))

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Optimems",
    "url": "https://optimems.gr",
    "logo": "https://optimems.gr/favicon.ico",
    "description": "AI-powered energy management solutions for grid optimization, renewable energy integration, and real-time energy command.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GR",
      "addressLocality": "Athens"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+30-21-0-XXX-XXXX",
      "contactType": "customer service",
      "availableLanguage": ["English", "Greek"]
    },
    "sameAs": [
      "https://twitter.com/optimems",
      "https://www.linkedin.com/company/optimems"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Optimems",
    "url": "https://optimems.gr",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://optimems.gr/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <AppLayout>
      <StructuredData data={organizationSchema} />
      <StructuredData data={websiteSchema} />
      <div className="flex flex-col min-h-screen w-full relative">

        <div className="flex-1">
          <Hero />
          <UserSegments />
          <Stats />
          <GovernmentLogos />
          <Products />
          <ValuePropositions />
          <Testimonials />
          {/* <Vision /> */}
          <BlogPreviewWrapper featuredPosts={featuredPosts} />
          <ContactCTA />
        </div>
      </div>
    </AppLayout>
  )
}
