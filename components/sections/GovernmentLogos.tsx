"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function GovernmentLogos() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        {/* Centered heading */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-widest text-foreground/60">
            {t('governmentLogos.label')}
          </p>
        </div>

        {/* Centered logos */}
        <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 opacity-70">
          <div className="relative" style={{ width: 210, height: 63 }}>
            <img
              src={resolvedTheme === 'dark' ? "/images/logos/digital-reform-logo-dark.svg" : "/images/logos/digital-reform-logo-light.svg"}
              alt="Digital Reform"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative" style={{ width: 225, height: 43 }}>
            <img
              src={resolvedTheme === 'dark' ? "/images/logos/hellenic-democracy-logo-dark.svg" : "/images/logos/hellenic-democracy-logo-light.svg"}
              alt="Hellenic Democracy"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative" style={{ width: 198, height: 54 }}>
            <img
              src={resolvedTheme === 'dark' ? "/images/logos/ellada2-logo-dark.svg" : "/images/logos/ellada2-logo-light.svg"}
              alt="Ellada 2.0"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="relative" style={{ width: 151, height: 42 }}>
            <img
              src={resolvedTheme === 'dark' ? "/images/logos/society-info-logo-dark.svg" : "/images/logos/society-info-logo-light.svg"}
              alt="Society Info"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Centered prominent link */}
        <div className="text-center mt-10">
          <Link
            href="/contact" // Was /rnd-projects — hidden until page is ready
            className="text-sm uppercase tracking-wide text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            {t('governmentLogos.cta')}
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
