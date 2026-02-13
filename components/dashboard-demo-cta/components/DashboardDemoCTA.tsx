"use client"

import { motion } from "framer-motion"
import { Dashboard16x9 } from "./layouts/Dashboard16x9"
import { Dashboard3x4 } from "./layouts/Dashboard3x4"

export interface DashboardDemoCTAProps {
  headline?: string
  subheadline?: string
  primaryCTA?: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  id?: string
  className?: string
}

export function DashboardDemoCTA({
  headline = "Experience the Future of Solar Energy Management",
  subheadline = "Our refined dashboard delivers real-time insights, seamless control, and unmatched operational clarity for your solar infrastructure.",
  primaryCTA = { label: "Start Free Trial", href: "#signup" },
  secondaryCTA = { label: "Watch Demo", href: "#demo" },
  id = "dashboard-demo",
  className = "",
}: DashboardDemoCTAProps) {
  return (
    <section
      id={id}
      className={`relative bg-background py-24 md:py-32 overflow-hidden ${className}`}
    >

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {headline}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subheadline}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-lg"
              >
                {primaryCTA.label}
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground border border-border hover:border-secondary rounded-lg transition-colors hover:bg-muted/20"
              >
                {secondaryCTA.label}
              </a>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 space-y-3"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Real-time monitoring and control</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>Intelligent automation and alerts</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Seamless integration with existing infrastructure</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dashboard Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard container */}
            <div className="relative rounded-2xl bg-[var(--dashboard-bg)] p-1.5 ring-1 ring-foreground/10 shadow-2xl">
              {/* Aspect ratio wrapper - 16:9 on desktop, 3:4 on mobile */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[var(--dashboard-bg)]">
                {/* 16:9 layout - shown on lg+ screens */}
                <div className="hidden lg:block absolute inset-0">
                  <Dashboard16x9 />
                </div>

                {/* 3:4 layout - shown on smaller screens */}
                <div className="lg:hidden absolute inset-0">
                  <Dashboard3x4 />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 rounded-full shadow-lg"
            >
              Live Demo
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default DashboardDemoCTA
