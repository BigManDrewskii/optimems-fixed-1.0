"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { BaseCard } from "../BaseCard"
import { Check } from "lucide-react"
import { useTheme } from "next-themes"
import { useLocale, useTranslations } from "next-intl"

export interface WarrantyCardProps {
  className?: string
  isInView?: boolean
  displayOrder?: number
  href?: string
}

export function WarrantyCard({
  className,
  isInView = true,
  displayOrder = 0,
  href,
}: WarrantyCardProps) {
  const [mounted, setMounted] = useState(false)
  const t = useTranslations("warranty")
  const { resolvedTheme } = useTheme()
  const locale = useLocale()
  const isGreek = locale === "el"

  useEffect(() => {
    setMounted(true)
  }, [])

  const warrantyFeatures = t.raw("features") as string[]

  const videoSource = resolvedTheme === "light"
    ? "/videos/optimems-logo-animation-black-logo.webm"
    : "/videos/optimems-logo-animation.webm"

  const cardContent = (
    <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
      {/* Text Content - Left side */}
      <div className="p-6 md:p-8 order-2 md:order-1 flex flex-col justify-center">
        {/* Title */}
        <h3 className={`text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors ${isGreek ? "greek-heading" : ""}`}>
          {t("title")}
        </h3>

        {/* Features list with checkmarks */}
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

      {/* Video - Right side */}
      <div className="relative order-1 md:order-2 aspect-video overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
        <video
          key={resolvedTheme}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/webm" />
        </video>

        {/* Motion wrapper for fade-in effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute inset-0 pointer-events-none"
        />

        {/* Decorative border - only on desktop */}
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
