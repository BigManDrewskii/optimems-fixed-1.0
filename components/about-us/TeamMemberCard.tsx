"use client"

import Image from "next/image"
import { Linkedin } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import type { TeamMember } from "@/data/about-us"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const t = useTranslations("aboutUsPage.team.members")
  const locale = useLocale()
  const isGreek = locale === "el"

  const name = t(member.nameKey)
  const role = t(member.roleKey)
  const bio = t(member.bioKey)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
    >
      {/* 9:16 Photo Container */}
      <div className="relative aspect-[9/12] w-full overflow-hidden bg-muted">
        <Image
          src={member.image}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* LinkedIn — appears on hover */}
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-neutral-800 opacity-0 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-[#0A66C2] group-hover:opacity-100"
          aria-label={`${name} LinkedIn`}
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <h4
          className={`text-[15px] font-semibold leading-tight text-foreground sm:text-base ${isGreek ? "greek-text" : ""}`}
        >
          {name}
        </h4>
        <p
          className={`mt-1 text-xs font-medium leading-snug text-primary sm:text-[13px] ${isGreek ? "greek-text" : ""}`}
        >
          {role}
        </p>
        <p
          className={`mt-2.5 text-xs leading-relaxed text-muted-foreground sm:text-[13px] ${isGreek ? "greek-text" : ""}`}
        >
          {bio}
        </p>
      </div>
    </motion.div>
  )
}
