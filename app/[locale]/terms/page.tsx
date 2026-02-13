import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service | Optimems",
  description: "Optimems Terms of Service - Terms and conditions governing the use of our website and services.",
}

export default function TermsPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
              <p className="text-xl text-muted-foreground">Terms and conditions governing the use of our website and services.</p>
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
                    By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
                  <p className="text-muted-foreground mb-4">
                    This website and its contents are intended for informational purposes only. You may not use this website for any unlawful purpose or in any way that could damage, disable, or impair our services.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
                  <p className="text-muted-foreground mb-4">
                    All content, features, and functionality of this website are owned by Optimems and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-muted-foreground">
                    You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit any content from this website without our prior written consent.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
                  <p className="text-muted-foreground">
                    Optimems shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or our services.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about these Terms of Service, please contact us at{' '}
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
