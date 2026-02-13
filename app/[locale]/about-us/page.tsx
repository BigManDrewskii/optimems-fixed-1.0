import { AppLayout } from "@/app/app-layout"
import { getAllPosts } from '@/lib/blog'
import { CompanyTagline } from "@/components/about-us/CompanyTagline"
import { VisionMissionSection } from "@/components/about-us/VisionMissionSection"
import { CEOMessageSection } from "@/components/about-us/CEOMessageSection"
import { TeamSection } from "@/components/about-us/TeamSection"
import { ValuesSection } from "@/components/about-us/ValuesSection"
import { BlogSection } from "@/components/about-us/BlogSection"

export const metadata = {
  title: "About Us | Optimems",
  description: "Learn about Optimems mission, vision, team, and values driving the energy transition.",
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
