"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BaseCard } from "../BaseCard"
import { Check } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import { getVideoSrc } from "@/data/videos"

export interface WarrantyCardProps {
  className?: string
  isInView?: boolean
  displayOrder?: number
  href?: string
}

const warrantyFeatures = [
  "Continuous software updates",
  "DSO compliance updates",
  "Email technical support",
  "Hardware replacement coverage"
]

export function WarrantyCard({
  className,
  isInView = true,
  displayOrder = 0,
  href,
}: WarrantyCardProps) {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"
  const [videoSrc, setVideoSrc] = useState<{ webm?: string; mp4?: string } | null>(null)

  useEffect(() => {
    const getVideo = () => {
      const isLight = document.documentElement.classList.contains('light')
      return getVideoSrc(isLight ? 'logoAnimationLight' : 'logoAnimationDark', isLight)
    }
    setVideoSrc(getVideo())
  }, [])

  const cardContent = (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      <div className="p-6 md:p-8 order-2 md:order-1 flex flex-col justify-center">
        <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors ${isGreek ? "greek-heading" : ""}`}>
          {t("warranty.title")}
        </h3>

        <ul className="space-y-3">
          {warrantyFeatures.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-foreground leading-relaxed">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative order-1 md:order-2 aspect-video overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          {videoSrc && (
            <>
              <source src={videoSrc.webm} type="video/webm" />
              {videoSrc.mp4 && <source src={videoSrc.mp4} type="video/mp4" />}
            </>
          )}
        </video>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        />

        <div className="hidden md:block absolute inset-0 border-l border-border/10 pointer-events-none" />
      </div>
    </div>
  )

  const animatedContent = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: displayOrder * 0.1 }}
      className="h-full group"
    >
      <BaseCard
        variant='standard'
        rounded="2xl"
        hover={true}
        overflow={true}
        className={className}
      >
        {cardContent}
      </BaseCard>
    </motion.div>
  )

  return href ? (
    <motion.a
      href={href}
      className="block h-full"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {animatedContent}
    </motion.a>
  ) : (
    animatedContent
  )
}
