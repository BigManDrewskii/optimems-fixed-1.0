"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { workflow } from "@/data/landing-page"
import { useTranslations } from "next-intl"
import { workflowStepKeys } from "@/lib/i18n/translation-keys"
import { Link } from "@/i18n/navigation"

const iconFiles = [
  { dark: "/images/sections/workflow-icon-01-dark.svg", light: "/images/sections/workflow-icon-01-light.svg" },
  { dark: "/images/sections/workflow-icon-02-dark.svg", light: "/images/sections/workflow-icon-02-light.svg" },
  { dark: "/images/sections/workflow-icon-03-dark.svg", light: "/images/sections/workflow-icon-03-light.svg" },
  { dark: "/images/sections/workflow-icon-04-dark.svg", light: "/images/sections/workflow-icon-04-light.svg" },
]

function WorkflowIcon({ icon, alt }: { icon: { dark: string; light: string }; alt: string }) {
  return (
    <>
      <img
        src={icon.light}
        alt={alt}
        className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-32 object-contain hidden light:block"
      />
      <img
        src={icon.dark}
        alt={alt}
        className="w-14 h-14 md:w-20 md:h-20 lg:w-32 lg:h-32 object-contain dark:block"
      />
    </>
  )
}

export function Workflow() {
  const t = useTranslations()

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            title={t('workflow.title')}
            description={t('workflow.subtitle')}
            className="mb-10 md:mb-16"
          />

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-0.5 border-t-2 border-dashed border-border/30" role="presentation" aria-hidden="true" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 lg:gap-8 relative">
              {workflow.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center relative"
                >
                  <div className="relative mb-4 md:mb-6">
                    <div
                      className="w-24 h-24 md:w-32 md:h-32 lg:w-[200px] lg:h-[200px] rounded-xl md:rounded-2xl flex items-center justify-center bg-primary/15"
                    >
                      <WorkflowIcon icon={iconFiles[index]} alt={t(`workflow.steps.${workflowStepKeys[index]}.title`)} />
                    </div>

                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-md bg-background/80 backdrop-blur-sm border border-primary/40">
                      <span className="text-xs font-medium text-primary tabular-nums">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {t(`workflow.steps.${workflowStepKeys[index]}.title`)}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {t(`workflow.steps.${workflowStepKeys[index]}.description`)}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 md:mt-16 text-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/" className="inline-flex items-center gap-2">
                {t('workflow.scheduleAssessment')}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
