"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared"
import { SectionHeader } from "@/components/shared"
import { AnimatedSection } from "@/components/shared"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { BookOpen, FileText, Download, ArrowRight } from "lucide-react"
import { useTranslations } from "next-intl"

export default function DocsPage() {
  const t = useTranslations("docs")

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 lg:pt-48">
          <AnimatedSection animation="fadeIn" as="section">
            <SectionHeader
              title={t("hero.title")}
              description={t("hero.description")}
              align="center"
              size="large"
              className="mb-32"
            />
          </AnimatedSection>
        </div>

        <Container>

          {/* Document Categories */}
          <AnimatedSection animation="fadeIn" as="section" className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* User Manuals Card */}
              <div className="group relative rounded-xl border border-border/30 bg-card/60 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <BookOpen className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">{t("cards.userManuals.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("cards.userManuals.description")}</p>
                <span className="text-primary group-hover:underline inline-flex items-center font-medium">
                  {t("cards.userManuals.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              {/* API Documentation Card */}
              <div className="group relative rounded-xl border border-border/30 bg-card/60 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <FileText className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">{t("cards.apiDocs.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("cards.apiDocs.description")}</p>
                <span className="text-primary group-hover:underline inline-flex items-center font-medium">
                  {t("cards.apiDocs.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </span>
              </div>

              {/* Data Sheets Card */}
              <div className="group relative rounded-xl border border-border/30 bg-card/60 p-8 transition-all hover:border-primary/50 hover:shadow-lg">
                <Download className="w-10 h-10 text-primary mb-4" aria-hidden="true" />
                <h3 className="text-xl font-semibold mb-3">{t("cards.dataSheets.title")}</h3>
                <p className="text-muted-foreground mb-4">{t("cards.dataSheets.description")}</p>
                <span className="text-primary group-hover:underline inline-flex items-center font-medium">
                  {t("cards.dataSheets.cta")}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </AnimatedSection>

          {/* Support Section */}
          <AnimatedSection animation="fadeIn" as="section">
            <div className="relative rounded-2xl border border-border/30 bg-card/60 p-12 md:p-16 text-center">
              <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">{t("support.title")}</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("support.description")}
                </p>
                <Button asChild size="lg" variant="primary" className="min-w-[200px]">
                  <Link href="/support">{t("support.cta")}</Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </main>
    </AppLayout>
  )
}
