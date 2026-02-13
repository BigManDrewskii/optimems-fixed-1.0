"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useTranslations, useLocale } from "next-intl"
import { HelpCircle } from "lucide-react"

export function PartnershipFAQ() {
  const t = useTranslations('partnershipPage.faq')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const questions = t.raw('questions') as Array<{ q: string, a: string }>

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        align: "center",
        size: "standard"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HelpCircle className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold text-foreground">
            {t('headline')}
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {questions.map((item) => (
            <AccordionItem key={item.q} value={item.q.slice(0, 50)}>
              <AccordionTrigger className={`text-left text-lg font-medium hover:text-primary transition-colors ${isGreek ? 'greek-heading' : ''}`}>
                <div className="flex items-start gap-3 pr-4">
                  <span className="flex-1">{item.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4 pb-6">
                  <p className={`text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {item.a}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </ProductPageSection>
  )
}
