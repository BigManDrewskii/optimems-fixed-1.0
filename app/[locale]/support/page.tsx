import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight, Mail, Phone, MessageCircle, FileQuestion } from "lucide-react"

export const metadata = {
  title: "Support | Optimems",
  description: "Get help with Optimems energy management solutions. Contact our support team or browse FAQs.",
}

export default function SupportPage() {
  const t = useTranslations("support")

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 lg:pt-48">
          <AnimatedSection>
            <Container>
              <div className="text-center max-w-4xl mx-auto">
                <SectionHeader
                  title={t("hero.title")}
                  description={t("hero.description")}
                  align="center"
                  size="large"
                  className="mb-16"
                />
              </div>
            </Container>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Container>
            <div className="py-20 md:py-28">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <BaseCard variant="standard" className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    For general inquiries and non-urgent matters.
                  </p>
                  <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">
                    info@optimems.gr
                  </a>
                </BaseCard>
                <BaseCard variant="standard" className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Phone Support</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Available Mon-Fri, 9am-6pm EET.
                  </p>
                  <a href="tel:+302311257510" className="text-secondary hover:underline">
                    +30 2311 257 510
                  </a>
                </BaseCard>
                <BaseCard variant="standard" className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <FileQuestion className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Documentation</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Browse our knowledge base and guides.
                  </p>
                  <Link href="/docs" className="text-secondary hover:underline inline-flex items-center">
                    View Docs
                    <ArrowRight className="ml-1 w-3 h-3" aria-hidden="true" />
                  </Link>
                </BaseCard>
              </div>

              <BaseCard variant="standard" className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">How do I get started with +SolarControl?</h3>
                    <p className="text-muted-foreground text-sm">
                      Contact our sales team to schedule a demo. We&apos;ll help you determine the right solution for your needs and guide you through the installation process.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">What inverters are compatible with your solutions?</h3>
                    <p className="text-muted-foreground text-sm">
                      We support 60+ hardware manufacturers including Huawei, Sungrow, SMA, Solaredge, and many more. Check our documentation for the full list.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Do you offer technical support?</h3>
                    <p className="text-muted-foreground text-sm">
                      Yes! We offer comprehensive technical support. Contact us via email or phone for assistance.
                    </p>
                  </div>
                </div>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
