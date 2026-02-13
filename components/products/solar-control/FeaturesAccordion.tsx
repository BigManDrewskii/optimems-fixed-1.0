"use client"

import { useTranslations, useLocale } from "next-intl"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { FeatureList } from "@/components/products/FeatureList"
import { CheckCircle2, XCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FeaturesAccordion() {
  const t = useTranslations('solarControlPage.accordion')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <ProductPageSection
      header={{
        title: t('title'),
        align: "center",
        size: "standard"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {/* Panel 1: SCADA Comparison */}
          <AccordionItem value="scada">
            <AccordionTrigger className={isGreek ? "greek-heading" : ""}>
              {t('scada.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                {/* Comparison Table */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Traditional SCADA */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-muted-foreground">{t('scada.traditional')}</h4>
                    <ul className="space-y-2">
                      {(t.raw('scada.traditionalItems') as string[]).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                          <span className={isGreek ? "greek-text" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* SolarControl */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 text-foreground">{t('scada.solarControl')}</h4>
                    <ul className="space-y-2">
                      {(t.raw('scada.solarControlItems') as string[]).map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className={isGreek ? "greek-text" : ""}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Supporting Text */}
                <p className={`text-muted-foreground italic ${isGreek ? "greek-text" : ""}`}>
                  {t('scada.supportingText')}
                </p>

                {/* CTA */}
                <div className="pt-2">
                  <Button asChild variant="outline">
                    <Link href="/contact">
                      {t('scada.cta')}
                    </Link>
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Panel 2: Industrial Hardware */}
          <AccordionItem value="hardware">
            <AccordionTrigger className={isGreek ? "greek-heading" : ""}>
              {t('hardware.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                {/* Subheadline */}
                <p className={`text-lg text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                  {t('hardware.subheadline')}
                </p>

                {/* Body */}
                <p className={isGreek ? "greek-text" : ""}>
                  {t('hardware.body')}
                </p>

                {/* Feature List - Two Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-foreground">{t('hardware.column1')}</h5>
                    <FeatureList
                      features={t.raw('hardware.column1Items') as string[]}
                      size="sm"
                    />
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-foreground">{t('hardware.column2')}</h5>
                    <FeatureList
                      features={t.raw('hardware.column2Items') as string[]}
                      size="sm"
                    />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Panel 3: SolarShield Platform */}
          <AccordionItem value="solarshield">
            <AccordionTrigger className={isGreek ? "greek-heading" : ""}>
              {t('solarshield.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                {/* Body */}
                <p className={`text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                  {t('solarshield.body')}
                </p>

                {/* Feature List */}
                <div>
                  <FeatureList
                    features={t.raw('solarshield.features') as string[]}
                    columns={2}
                    size="sm"
                  />
                </div>

                {/* Interoperability API Section */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-xl mb-2">{t('solarshield.api.title')}</h4>
                  <p className={`text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                    {t('solarshield.api.body')}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Panel 4: +Insights Analytics */}
          <AccordionItem value="insights">
            <AccordionTrigger className={isGreek ? "greek-heading" : ""}>
              {t('insights.title')}
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                {/* Body */}
                <p className={`text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                  {t('insights.body')}
                </p>

                {/* Feature List */}
                <div>
                  <h5 className="font-semibold mb-3">{t('insights.featuresTitle')}</h5>
                  <FeatureList
                    features={t.raw('insights.features') as string[]}
                    columns={2}
                    size="sm"
                  />
                </div>

                {/* Key Differentiator Section */}
                <div className="border-t border-border pt-6">
                  <h4 className="font-semibold text-xl mb-2">{t('insights.differentiator.title')}</h4>
                  <p className={`text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                    {t('insights.differentiator.body')}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ProductPageSection>
  )
}
