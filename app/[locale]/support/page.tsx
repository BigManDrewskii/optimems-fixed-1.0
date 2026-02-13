import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { ArrowRight, Mail, Phone, FileQuestion } from "lucide-react"

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
                <GlassCard className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t("cards.email.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {t("cards.email.description")}
                  </p>
                  <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">
                    info@optimems.gr
                  </a>
                </GlassCard>
                <GlassCard className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t("cards.phone.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {t("cards.phone.description")}
                  </p>
                  <a href="tel:+302311257510" className="text-secondary hover:underline">
                    +30 2311 257 510
                  </a>
                </GlassCard>
                <GlassCard className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <FileQuestion className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{t("cards.docs.title")}</h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {t("cards.docs.description")}
                  </p>
                  <Link href="/docs" className="text-secondary hover:underline inline-flex items-center">
                    {t("cards.docs.link")}
                    <ArrowRight className="ml-1 w-3 h-3" aria-hidden="true" />
                  </Link>
                </GlassCard>
              </div>

              <GlassCard className="p-8 md:p-12">
                <h2 className="text-2xl font-bold mb-6 text-center">{t("faq.title")}</h2>
                <div className="space-y-4 max-w-2xl mx-auto">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">{t("faq.q1.question")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("faq.q1.answer")}
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">{t("faq.q2.question")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("faq.q2.answer")}
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">{t("faq.q3.question")}</h3>
                    <p className="text-muted-foreground text-sm">
                      {t("faq.q3.answer")}
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
