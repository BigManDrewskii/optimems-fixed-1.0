"use client"

import { useTranslations, useLocale } from "next-intl"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function WhoBenefitsTabs() {
  const t = useTranslations('solarControlPage.whoBenefits')
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
        <Tabs defaultValue="owners" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="owners" className={isGreek ? "greek-text" : ""}>
              {t('owners.title')}
            </TabsTrigger>
            <TabsTrigger value="aggregators" className={isGreek ? "greek-text" : ""}>
              {t('aggregators.title')}
            </TabsTrigger>
            <TabsTrigger value="dso" className={isGreek ? "greek-text" : ""}>
              {t('dso.title')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="owners" className="mt-6">
            <div className="p-6 border rounded-lg bg-card">
              <p className={`text-lg text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                {t('owners.content')}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="aggregators" className="mt-6">
            <div className="p-6 border rounded-lg bg-card">
              <p className={`text-lg text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                {t('aggregators.content')}
              </p>
            </div>
          </TabsContent>

          <TabsContent value="dso" className="mt-6">
            <div className="p-6 border rounded-lg bg-card">
              <p className={`text-lg text-muted-foreground ${isGreek ? "greek-text" : ""}`}>
                {t('dso.content')}
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </ProductPageSection>
  )
}
