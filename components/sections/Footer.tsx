
"use client"

import { Mail, ChevronDown } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { OptimemsLogo } from "@/components/shared"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"

function FooterSection({ title, links, isOpen, onToggle }: { title: string; links: { label: string; href: string }[]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/30 sm:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex items-center justify-between w-full min-h-[44px] py-3 sm:py-3 sm:mb-3 text-xs font-semibold uppercase tracking-wider text-secondary"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform sm:hidden ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>
      <ul className={`space-y-1.5 sm:space-y-2 ${isOpen ? 'block' : 'hidden sm:block'}`}>
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-muted-foreground hover:text-secondary text-xs transition-colors block py-1 sm:py-0.5"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('footer')
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const footerSections = [
    {
      title: t('products.title'),
      links: t.raw('products.links')
    },
    {
      title: t('company.title'),
      links: t.raw('company.links')
    },
    {
      title: t('resources.title'),
      links: t.raw('resources.links')
    },
    {
      title: t('legal.title'),
      links: t.raw('legal.links')
    }
  ]

  const socialLinks = [
    { platform: 'X', href: 'https://x.com/optimems' },
    { platform: 'Facebook', href: 'https://www.facebook.com/optimems' },
    { platform: 'YouTube', href: 'https://www.youtube.com/@optimems' },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/optimems' },
  ]

  if (!mounted) {
    return (
      <footer className="relative pb-0 pt-8 sm:pt-12 bg-transparent" role="contentinfo">
        <div className="relative z-20 mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
          <div
            className="rounded-t-xl sm:rounded-t-3xl border-t-2 border-border p-4 sm:p-6 md:p-10 bg-background/95 min-h-[300px]"
            style={{
              backgroundColor: 'hsl(var(--background))',
            }}>
            <div className="animate-pulse space-y-4">
              <div className="h-6 w-32 bg-muted rounded" />
              <div className="h-4 w-48 bg-muted/50 rounded" />
              <div className="grid grid-cols-3 gap-4">
                <div className="h-16 bg-muted/30 rounded" />
                <div className="h-16 bg-muted/30 rounded" />
                <div className="h-16 bg-muted/30 rounded" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <footer className="relative pb-0 pt-8 sm:pt-12 bg-transparent" role="contentinfo">
      <div className="relative z-20 mx-auto max-w-[1400px] px-3 sm:px-6 lg:px-8">
        <div
          className="rounded-t-xl sm:rounded-t-3xl backdrop-blur-md border-0 border-t-2 border-primary shadow-xl p-4 sm:p-6 md:p-10 bg-background/95"
          style={{
            backgroundColor: 'hsl(var(--background))',
            backgroundImage: `url('/images/sections/grid-pattern-${resolvedTheme === 'dark' ? 'dark' : 'light'}.png')`,
            backgroundRepeat: 'repeat',
          }}>
          <div className="mb-6 sm:mb-8">
            <a className="flex items-center gap-2.5 mb-3 w-fit hover:opacity-80 transition-opacity" href="/" aria-label="Optimems home">
              <OptimemsLogo className="w-8 h-8 sm:w-9 sm:h-9" />
            </a>

            <p className="text-muted-foreground text-xs mb-2">
              {t('address')}
            </p>

            <a
              href={`mailto:info@optimems.com`}
              className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-secondary text-xs transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="truncate max-w-[180px]">info@optimems.com</span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 sm:gap-6 mb-6 sm:mb-8">
            {footerSections.map((section, index) => (
              <FooterSection
                key={section.title}
                title={section.title}
                links={section.links}
                isOpen={openSections[index] || false}
                onToggle={() => toggleSection(index)}
              />
            ))}
          </div>

          <div className="pt-4 sm:pt-4">
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 w-full sm:w-auto text-[10px] sm:text-xs">
                <p className="text-muted-foreground text-[10px] sm:text-xs text-center sm:text-left">
                  {t('vat')}
                </p>
              </div>

              <p className="text-muted-foreground text-[10px] sm:text-xs text-center sm:text-left">
                {t('copyright', { year: new Date().getFullYear() })}
              </p>

              <div className="flex items-center gap-4 sm:gap-3">
                {socialLinks.map((social) => {
                  const isDark = resolvedTheme === "dark"
                  const iconMap: { [key: string]: string } = {
                    'X': isDark ? '/images/logos/social-x.svg' : '/images/logos/social-x-dark.svg',
                    'Facebook': isDark ? '/images/logos/social-facebook.svg' : '/images/logos/social-facebook-dark.svg',
                    'YouTube': isDark ? '/images/logos/social-youtube.svg' : '/images/logos/social-youtube-dark.svg',
                    'LinkedIn': isDark ? '/images/logos/social-linkedin.svg' : '/images/logos/social-linkedin-dark.svg',
                  }
                  const iconSrc = iconMap[social.platform]
                  if (!iconSrc) return null

                  return (
                    <a
                      key={social.platform}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-all duration-200"
                      aria-label={`${social.platform} (opens in new tab)`}
                    >
                      <img
                        src={iconSrc}
                        alt={`${social.platform} social icon`}
                        className="h-6 w-6 sm:h-5 sm:w-5"
                      />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
