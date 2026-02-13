"use client"

import { SectionHeader, BaseCard } from "@/components/shared"
import { testimonials } from "@/data/landing-page"
import { Marquee } from "@/components/magicui/marquee"
import { useTranslations } from "next-intl"
import { testimonialKeys } from "@/lib/i18n/translation-keys"
import { useState, useCallback, memo, useMemo } from "react"
import Image from "next/image"

function ThemeAwareLogo({ logo, lightThemeLogo, alt }: { logo: string; lightThemeLogo?: string; alt: string }) {
  return (
    <>
      {lightThemeLogo && (
        <Image
          src={lightThemeLogo}
          alt={alt}
          width={200}
          height={40}
          className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity hidden light:block"
        />
      )}
      <Image
        src={logo}
        alt={alt}
        width={200}
        height={40}
        className={`h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity ${lightThemeLogo ? 'hidden dark:block' : ''}`}
      />
    </>
  )
}

const FeaturedTestimonialCard = memo(function FeaturedTestimonialCard({
  testimonial,
  translationKey,
}: {
  testimonial: typeof testimonials[0]
  translationKey: string
}) {
  const t = useTranslations()

  return (
    <BaseCard
      variant='standard'
      rounded="3xl"
      scale={false}
      padding="lg"
      className="w-full max-w-5xl mx-auto border-primary/30 bg-background/95 shadow-xl"
    >
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
        {/* Avatar Section */}
        {testimonial.avatar && (
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
              <Image
                src={testimonial.avatar}
                alt={t(`testimonials.items.${translationKey}.author`)}
                width={128}
                height={128}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Content Section */}
        <div className="flex-1 space-y-4">
          {/* Quote */}
          <blockquote>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              {t(`testimonials.items.${translationKey}.quote`)}
            </p>
          </blockquote>

          {/* Author & Company Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4 border-t border-border/50">
            <div className="flex-1">
              <cite className="not-italic">
                <p className="text-base md:text-lg font-semibold text-foreground">
                  {t(`testimonials.items.${translationKey}.author`)}
                </p>
                <p className="text-sm text-muted-foreground">
                  {t(`testimonials.items.${translationKey}.role`)}, {t(`testimonials.items.${translationKey}.company`)}
                </p>
                {testimonial.location && (
                  <p className="text-xs text-primary mt-1">
                    {t(`testimonials.items.${translationKey}.location`)}
                  </p>
                )}
              </cite>
            </div>

            {/* Company Logo */}
            {testimonial.logo && (
              <div className="flex-shrink-0 sm:self-center">
                <ThemeAwareLogo
                  logo={testimonial.logo}
                  lightThemeLogo={testimonial.lightThemeLogo}
                  alt={t(`testimonials.items.${translationKey}.company`)}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </BaseCard>
  )
})

const TestimonialCard = memo(function TestimonialCard({
  index,
  onMouseEnter,
  onMouseLeave,
}: {
  index: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  const t = useTranslations()
  const key = testimonialKeys[index]
  const testimonial = testimonials[index]

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onMouseEnter?.()
    } else if (e.key === 'Escape') {
      onMouseLeave?.()
    }
  }, [onMouseEnter, onMouseLeave])

  const handleKeyUp = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onMouseLeave?.()
    }
  }, [onMouseLeave])

  return (
    <BaseCard variant='standard' scale={true}
      className="w-full max-w-xs mx-auto"
      padding="md"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onMouseEnter}
      onBlur={onMouseLeave}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      tabIndex={0}
      role="button"
      aria-label={`Read testimonial from ${t(`testimonials.items.${key}.author`)}`}
    >
      <blockquote className="mb-4">
        <p className="text-foreground leading-relaxed">
          "{t(`testimonials.items.${key}.quote`)}"
        </p>
      </blockquote>

      <footer className="flex items-center gap-3">
        <div className="flex-1">
          <cite className="not-italic font-semibold text-foreground text-sm block">
            {t(`testimonials.items.${key}.author`)}
          </cite>
          <p className="text-muted-foreground text-xs">
            {t(`testimonials.items.${key}.role`)}, {t(`testimonials.items.${key}.company`)}
          </p>
          <p className="text-primary text-xs mt-0.5">
            {t(`testimonials.items.${key}.location`)}
          </p>
        </div>
      </footer>
    </BaseCard>
  )
})

export const Testimonials = memo(function Testimonials() {
  const t = useTranslations()
  const [hoverCount, setHoverCount] = useState(0)

  const handleMouseEnter = useCallback(() => {
    setHoverCount(prev => prev + 1)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHoverCount(prev => prev - 1)
  }, [])

  const isPaused = hoverCount > 0

  // Memoize computed values to prevent recalculation
  const { featuredTestimonial, featuredIndex, marqueeTestimonials, firstColumn, secondColumn, thirdColumn } = useMemo(() => {
    const featuredTestimonial = testimonials.find(t => t.featured)
    const featuredIndex = testimonials.findIndex(t => t.featured)
    const marqueeTestimonials = testimonials.filter(t => !t.featured)
    const firstColumn = marqueeTestimonials.slice(0, 2)
    const secondColumn = marqueeTestimonials.slice(2, 4)
    const thirdColumn = marqueeTestimonials.slice(0, 2)
    return { featuredTestimonial, featuredIndex, marqueeTestimonials, firstColumn, secondColumn, thirdColumn }
  }, [])

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px] mb-16">
        <SectionHeader
          label={t('testimonials.label')}
          title={t('testimonials.title')}
          description={t('testimonials.subtitle')}
          className="max-w-3xl mx-auto"
        />
      </div>

      {/* Featured Testimonial */}
      {featuredTestimonial && (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-16">
          <FeaturedTestimonialCard
            testimonial={featuredTestimonial}
            translationKey={testimonialKeys[featuredIndex]}
          />
        </div>
      )}

      <div className="relative max-h-[800px] flex justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <div className="flex-1 max-w-xs">
          <Marquee pauseOnHover vertical isPaused={isPaused} className="[--duration:25s]">
            {firstColumn.map((testimonial) => {
              const actualIndex = testimonials.findIndex(t => t.id === testimonial.id)
              return (
                <div key={testimonial.id} className="py-3">
                  <TestimonialCard
                    index={actualIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              )
            })}
          </Marquee>
        </div>

        <div className="flex-1 max-w-xs hidden md:block">
          <Marquee reverse pauseOnHover vertical isPaused={isPaused} className="[--duration:30s]">
            {secondColumn.map((testimonial) => {
              const actualIndex = testimonials.findIndex(t => t.id === testimonial.id)
              return (
                <div key={testimonial.id} className="py-3">
                  <TestimonialCard
                    index={actualIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              )
            })}
          </Marquee>
        </div>

        <div className="flex-1 max-w-xs hidden lg:block">
          <Marquee pauseOnHover vertical isPaused={isPaused} className="[--duration:35s]">
            {thirdColumn.map((testimonial) => {
              const actualIndex = testimonials.findIndex(t => t.id === testimonial.id)
              return (
                <div key={testimonial.id} className="py-3">
                  <TestimonialCard
                    index={actualIndex}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  />
                </div>
              )
            })}
          </Marquee>
        </div>
      </div>
    </section>
  )
})
