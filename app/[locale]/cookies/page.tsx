import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Cookie Policy | Optimems",
  description: "Optimems Cookie Policy - Learn how we use cookies and similar technologies on our website.",
}

export default function CookiesPage() {
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
              <p className="text-xl text-muted-foreground">Learn how we use cookies and similar technologies on our website.</p>
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
                    This Cookie Policy explains what Cookies are and how Optimems uses them on our website.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
                  <p className="text-muted-foreground">
                    Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience and understand how you use our site.
                  </p>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">Essential Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Required for the website to function properly. These cannot be disabled.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Analytics Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Help us understand how visitors interact with our website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Functionality Cookies</h3>
                      <p className="text-muted-foreground text-sm">
                        Allow the website to remember choices you make and provide enhanced features.
                      </p>
                    </div>
                  </div>
                </BaseCard>

                <BaseCard variant="standard" className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
                  <p className="text-muted-foreground mb-4">
                    Most web browsers allow you to control cookies through their settings. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Block all cookies</li>
                    <li>Allow all cookies</li>
                    <li>Delete cookies when you close your browser</li>
                    <li>Receive a warning when a cookie is set</li>
                  </ul>
                </BaseCard>

                <BaseCard variant="standard" className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                  <p className="text-muted-foreground">
                    If you have any questions about our use of cookies, please contact us at{' '}
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
