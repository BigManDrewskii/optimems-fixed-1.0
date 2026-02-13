"use client"

import { Linkedin, Twitter } from "lucide-react"
import { useLocale } from "next-intl"
import { motion } from "framer-motion"
import type { TeamMember } from "@/data/about-us"
import { BaseCard } from "@/components/shared"

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const locale = useLocale()
  const isGreek = locale === 'el'

  // Get initials for placeholder
  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ width: '100%', maxWidth: '544px' }}
    >
      <BaseCard
        variant="standard"
        rounded="xl"
        padding="md"
        className="hover:shadow-lg"
      >
        <div className="flex gap-6 min-h-[172px]">
        {/* Profile Placeholder - 160px x 160px square */}
        <div className="relative h-[160px] w-[160px] flex-shrink-0 rounded bg-muted flex items-center justify-center">
          <span className="text-5xl font-bold text-muted-foreground/80">{initials}</span>
        </div>

        {/* Content - Right side */}
        <div className="flex-1 flex flex-col">
          {/* Name */}
          <div className="mb-1 pb-1">
            <h4 className={`text-xl font-bold text-foreground leading-7 ${isGreek ? 'greek-text' : ''}`}>
              {member.name}
            </h4>
          </div>

          {/* Role - Purple accent */}
          <div className="mb-3 pb-3">
            <p className={`text-base font-medium text-primary leading-6 ${isGreek ? 'greek-text' : ''}`}>
              {member.role}
            </p>
          </div>

          {/* Description */}
          <div className="mb-4 pb-4 flex-1 flex items-center">
            <p className={`text-base text-muted-foreground leading-6 ${isGreek ? 'greek-text' : ''}`}>
              {member.description}
            </p>
          </div>

          {/* Social Icons - LinkedIn and X only */}
          <div className="flex items-center gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${member.name} LinkedIn`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label={`${member.name} X (Twitter)`}
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      </BaseCard>
    </motion.div>
  )
}
