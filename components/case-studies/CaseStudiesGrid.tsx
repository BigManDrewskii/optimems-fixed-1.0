"use client"

import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { CaseStudyCard } from "./CaseStudyCard"
import { useTranslations } from "next-intl"

const CASE_STUDIES = [
  "lamda",
  "checkwatt",
  "soumpasis",
  "pcc",
  "motorOil",
  "sunlight",
] as const

export function CaseStudiesGrid() {
  const t = useTranslations("caseStudiesPage.cases")

  return (
    <AnimatedSection animation="fadeIn" className="pt-24 pb-8 md:pb-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {CASE_STUDIES.map((caseKey, index) => (
            <CaseStudyCard
              key={caseKey}
              client={t(`${caseKey}.client`)}
              tags={t.raw(`${caseKey}.tags`) as string[]}
              description={t(`${caseKey}.description`)}
              focusAreas={t.raw(`${caseKey}.focusAreas`) as string[]}
            />
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}
