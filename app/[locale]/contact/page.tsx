"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { ContactForm } from "@/components/contact/ContactForm"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

export default function ContactPage() {
  const t = useTranslations('contactPage')
  const locale = useLocale()
  const isGreek = locale === 'el'

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        {/* Hero Section */}
        <div className="pt-32 md:pt-40 lg:pt-48">
          <AnimatedSection>
            <Container>
              <div className="text-center max-w-4xl mx-auto">
                <SectionHeader
                  title={t('hero.headline')}
                  description={t('hero.subheadline')}
                  align="center"
                  size="large"
                  className="mb-32"
                />
              </div>
            </Container>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <Container>
            <div className="py-8 md:py-12">
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Contact Form - Takes 2 columns on large screens */}
                  <div className="lg:col-span-2">
                    <BaseCard variant="standard" className="p-8 md:p-12">
                      <ContactForm />
                    </BaseCard>
                  </div>

                  {/* Contact Information - Takes 1 column on large screens */}
                  <div className="lg:col-span-1">
                    <BaseCard variant="standard" className="p-8 sticky top-28">
                      <h2 className={`text-2xl font-bold mb-6 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                        {t('info.title')}
                      </h2>

                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Mail className="w-6 h-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className={`font-semibold mb-1 text-foreground ${isGreek ? 'greek-text' : ''}`}>
                              {t('info.email')}
                            </h3>
                            <p className={`text-muted-foreground text-sm mb-2 ${isGreek ? 'greek-text' : ''}`}>
                              {isGreek ? "Συνήθως απαντάμε εντός 24 ωρών" : "We typically reply within 24 hours"}
                            </p>
                            <a href="mailto:info@optimems.gr" className="text-primary hover:underline text-sm">
                              info@optimems.gr
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Phone className="w-6 h-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className={`font-semibold mb-1 text-foreground ${isGreek ? 'greek-text' : ''}`}>
                              {t('info.phone')}
                            </h3>
                            <p className={`text-muted-foreground text-sm mb-2 ${isGreek ? 'greek-text' : ''}`}>
                              {isGreek ? "Δευ-Παρ, 9πμ-6μμ EET" : "Mon-Fri, 9am-6pm EET"}
                            </p>
                            <a href="tel:+302311257510" className="text-primary hover:underline text-sm">
                              +30 2311 257 510
                            </a>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-6 h-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className={`font-semibold mb-1 text-foreground ${isGreek ? 'greek-text' : ''}`}>
                              {t('info.location')}
                            </h3>
                            <p className={`text-muted-foreground text-sm ${isGreek ? 'greek-text' : ''}`}>
                              Thessaloniki, Greece
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
                          </div>
                          <div>
                            <h3 className={`font-semibold mb-1 text-foreground ${isGreek ? 'greek-text' : ''}`}>
                              {t('info.hours')}
                            </h3>
                            <p className={`text-muted-foreground text-sm ${isGreek ? 'greek-text' : ''}`}>
                              {isGreek ? "Δευτέρα - Παρασκευή\n9:00 πμ - 6:00 μμ EET" : "Monday - Friday\n9:00 AM - 6:00 PM EET"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </BaseCard>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
