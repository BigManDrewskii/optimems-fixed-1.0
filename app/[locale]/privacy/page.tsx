import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy | Optimems",
  description: "Learn how we collect, use, and protect your personal data.",
}

export default function PrivacyPage() {
  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        <AnimatedSection>
          <Container>
            <div className="mb-8 max-w-4xl mx-auto">
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                Back to Home
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-xl text-muted-foreground">Learn how we collect, use, and protect your personal data.</p>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection>
          <Container>
            <div className="pb-20 md:py-28 max-w-4xl mx-auto">
              <div className="prose prose-neutral max-w-none">
                <BaseCard variant="standard" className="p-8 mb-8">
                  <p className="text-muted-foreground mb-4">
                    Last updated: January 2026
                  </p>
                  <p className="text-muted-foreground">
                    At Optimems, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                  <p className="text-muted-foreground mb-4">
                    We may collect the following types of information:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Name and contact information</li>
                    <li>Company information</li>
                    <li>Usage data and analytics</li>
                    <li>Technical information about your device</li>
                  </ul>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                  <p className="text-muted-foreground mb-4">
                    We use your information to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Provide and improve our services</li>
                    <li>Respond to your inquiries</li>
                    <li>Send you relevant communications</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
                  <p className="text-muted-foreground">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about this Privacy Policy, please contact us at{' '}
                    <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">
                      info@optimems.gr
                    </a>
                  </p>
                </BaseCard>
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
