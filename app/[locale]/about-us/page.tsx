import { AppLayout } from "@/app/app-layout"
import { getAllPosts } from '@/lib/blog'
import { CompanyTagline } from "@/components/about-us/CompanyTagline"
import { VisionMissionSection } from "@/components/about-us/VisionMissionSection"
import { CEOMessageSection } from "@/components/about-us/CEOMessageSection"
import { TeamSection } from "@/components/about-us/TeamSection"
import { ValuesSection } from "@/components/about-us/ValuesSection"
import { BlogSection } from "@/components/about-us/BlogSection"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  return {
    title: locale === 'el'
      ? "Σχετικά με Εμάς | Optimems"
      : "About Us | Optimems",
    description: locale === 'el'
      ? "Μάθετε για την αποστολή, το όραμα, την ομάδα και τις αξίες της Optimems που οδηγούν την ενεργειακή μετάβαση."
      : "Learn about Optimems mission, vision, team, and values driving the energy transition.",
  }
}

export default async function AboutUsPage() {
  const allPosts = getAllPosts()

  return (
    <AppLayout>
      <main className="min-h-screen">
        <CompanyTagline />
        <VisionMissionSection />
        <CEOMessageSection />
        <TeamSection />
        <ValuesSection />
        <BlogSection posts={allPosts} />
        {/* Footer included via AppLayout */}
      </main>
    </AppLayout>
  )
}
