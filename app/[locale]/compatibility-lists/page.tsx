"use client"

import { AppLayout } from "@/app/app-layout"
import { useTranslations } from "next-intl"
import { CompatibilityTable } from "@/components/CompatibilityTable"
import { Container } from "@/components/shared"
import { SectionHeader } from "@/components/shared"
import { AnimatedSection } from "@/components/shared"
import { manufacturers } from "@/data/compatibility"

export default function CompatibilityListsPage() {
  const t = useTranslations("compatibilityLists")

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 lg:pt-48">
          <Container>
            <AnimatedSection animation="fadeIn" as="section">
              <SectionHeader
                title={t("title")}
                description={t("subtitle")}
                align="center"
                size="large"
                className="mb-24"
              />
            </AnimatedSection>
          </Container>
        </div>

        <Container>
          <AnimatedSection animation="fadeIn" as="section">
            <CompatibilityTable manufacturers={manufacturers} />

            <footer className="mt-12 max-w-4xl mx-auto">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t("footnote")}
              </p>
            </footer>
          </AnimatedSection>
        </Container>
      </main>
    </AppLayout>
  )
}
