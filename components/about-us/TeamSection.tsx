"use client"

import { useTranslations, useLocale } from "next-intl"
import { TeamMemberCard } from "./TeamMemberCard"
import { teamMembers } from "@/data/about-us"
import { BaseCard } from "@/components/shared/BaseCard"

export function TeamSection() {
  const t = useTranslations('aboutUsPage.team')
  const locale = useLocale()
  const isGreek = locale === 'el'

  // Split team members into rows of 2
  const rows = []
  for (let i = 0; i < teamMembers.length; i += 2) {
    rows.push(teamMembers.slice(i, i + 2))
  }

  return (
    <section className="relative py-20 md:py-24 lg:py-32 px-4 md:px-6">
      <div className="mx-auto max-w-[1400px]">
        {/* Patterned background card - theme-aware */}
        <BaseCard
          variant="patterned"
          pattern="default"
          outerPadding="lg"
          innerPadding="lg"
        >
          {/* Content container */}
          <div className="mx-auto" style={{ maxWidth: '1152px' }}>
            {/* Header - Left aligned */}
            <div className="mb-16 flex flex-col items-start gap-4">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[48px] ${isGreek ? 'greek-heading' : ''}`}>
                {t('title')}
              </h2>
              <p
                className={`text-lg text-muted-foreground leading-7 ${isGreek ? 'greek-text' : ''}`}
                style={{ maxWidth: '672px' }}
                dangerouslySetInnerHTML={{
                  __html: t('description').replace(/\n/g, '<br/>')
                }}
              />
            </div>

            {/* Team Grid - Rows of 2 cards */}
            <div className="flex flex-col gap-8">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-center justify-between gap-5">
                  {row.map((member) => (
                    <TeamMemberCard
                      key={member.id}
                      member={member}
                      index={member.id - 1}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </BaseCard>
      </div>
    </section>
  )
}
