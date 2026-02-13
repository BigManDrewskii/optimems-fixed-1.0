"use client"

import { useTranslations, useLocale } from "next-intl"
import { TeamMemberCard } from "./TeamMemberCard"
import { teamMembers } from "@/data/about-us"

export function TeamSection() {
  const t = useTranslations("aboutUsPage.team")
  const locale = useLocale()
  const isGreek = locale === "el"

  const founders = teamMembers.filter((m) => m.category === "founder")
  const advisors = teamMembers.filter((m) => m.category === "advisor")

  return (
    <section className="relative py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 flex flex-col items-center text-center md:mb-20">
          <h2
            className={`text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl ${isGreek ? "greek-heading" : ""}`}
          >
            {t("title")}
          </h2>
          <p
            className={`mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg ${isGreek ? "greek-text" : ""}`}
          >
            {t("description")}
          </p>
        </div>

        {/* Leadership Label */}
        <p
          className={`mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground md:mb-10 ${isGreek ? "greek-text" : ""}`}
        >
          {t("management")}
        </p>

        {/* Founders Grid — tight matrix */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
          {founders.map((member, i) => (
            <TeamMemberCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* Divider */}
        <div className="my-14 flex items-center gap-4 md:my-20">
          <div className="h-px flex-1 bg-border/50" />
          <p
            className={`text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground ${isGreek ? "greek-text" : ""}`}
          >
            {t("advisors")}
          </p>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        {/* Advisors Grid */}
        <div className="mx-auto grid max-w-sm grid-cols-1 gap-3 sm:gap-4">
          {advisors.map((member, i) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={i + founders.length}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
