"use client"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Video } from "@/components/shared/Video"
import { useTheme } from "next-themes"
import { Sun, Wind, Droplets, Leaf, Trees, Battery } from "lucide-react"
import { getVideoSrc } from "@/data/videos"

/**
 * SolarWhatIs - "What is SolarControl" section with minimal layout
 *
 * Displays the two main components of the system in simple layout.
 */
export function SolarWhatIs() {
  const t = useTranslations('solarControlPage.whatIsSolarControl')
  const { resolvedTheme } = useTheme()
  const isLight = resolvedTheme === "light"
  
  const hardwareVideo = getVideoSrc('hardwareBanner', isLight)
  const softwareVideo = getVideoSrc('softwareBanner', isLight)

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t('headline')}
          </h2>
        </motion.div>

        {/* Hardware & Software - 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Hardware - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border/30 rounded-xl bg-card/5 p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('hardwareTitle')}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              {t('hardwareDescription')}
            </p>
            {/* Hardware Video Banner */}
            <div className="border border-border/20 rounded-lg overflow-hidden">
              <Video
                src=""
                sources={hardwareVideo || undefined}
                aspectRatio="video"
                autoplay={true}
                muted={true}
                loop={true}
                playsInline={true}
              />
            </div>
          </motion.div>

          {/* Software - Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="border border-border/30 rounded-xl bg-card/5 p-8"
          >
            <h3 className="text-xl font-semibold mb-4">
              {t('softwareTitle')}
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm mb-6">
              {t('softwareDescription')}
            </p>
            {/* Software Video Banner */}
            <div className="border border-border/20 rounded-lg overflow-hidden">
              <Video
                src=""
                sources={softwareVideo || undefined}
                aspectRatio="video"
                autoplay={true}
                muted={true}
                loop={true}
                playsInline={true}
              />
            </div>
          </motion.div>
        </div>

        {/* Supported Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-12"
        >
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-foreground uppercase tracking-wider">
              {t('supportedTechLabel')}
            </p>
          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'PV', icon: Sun },
              { name: 'Wind', icon: Wind },
              { name: 'Small Hydro', icon: Droplets },
              { name: 'Biogas', icon: Leaf },
              { name: 'Biomass', icon: Trees },
              { name: 'Batteries', icon: Battery }
            ].map((tech, idx) => {
              const IconComponent = tech.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + (idx * 0.05) }}
                  className="border border-border/40 rounded-xl bg-card/10 p-4 hover:border-primary/40 hover:bg-card/15 hover:shadow-md transition-all duration-300 cursor-default group"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <IconComponent className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-xs font-medium text-foreground">
                      {tech.name}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
