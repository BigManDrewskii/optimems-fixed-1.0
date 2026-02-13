"use client"

import { useState, useId } from "react"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { CustomPrimaryButton } from "@/components/shared"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Calendar
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  company: string
  service: string
  message: string
  demoDate: string
}

/**
 * ConsultContact - Contact form with demo booking functionality
 */
export function ConsultContact() {
  const t = useTranslations('consultPage.contact')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
    demoDate: ''
  })
  
  const nameId = useId()
  const emailId = useId()
  const companyId = useId()
  const serviceId = useId()
  const demoDateId = useId()
  const messageId = useId()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const services = t.raw('services') as string[]

  return (
    <AnimatedSection className="py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subheadline')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-background border border-border/50 backdrop-blur-sm h-full">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {t('contactInfo.title')}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {t('contactInfo.email.title')}
                    </div>
                    <div className="text-muted-foreground">
                      {t('contactInfo.email.value')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {t('contactInfo.phone.title')}
                    </div>
                    <div className="text-muted-foreground">
                      {t('contactInfo.phone.value')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {t('contactInfo.location.title')}
                    </div>
                    <div className="text-muted-foreground">
                      {t('contactInfo.location.value')}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">
                      {t('contactInfo.hours.title')}
                    </div>
                    <div className="text-muted-foreground">
                      {t('contactInfo.hours.value')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Booking CTA */}
              <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">
                    {t('demoBooking.title')}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('demoBooking.description')}
                </p>
                <div className="text-sm text-primary font-medium">
                  {t('demoBooking.responseTime')}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-8 rounded-2xl bg-background border border-border/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-8">
                {t('form.title')}
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {t('form.success.title')}
                  </h4>
                  <p className="text-muted-foreground">
                    {t('form.success.message')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('form.name')}
                      </label>
                    <input
                      type="text"
                      id={nameId}
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor={emailId} className="block text-sm font-medium text-foreground mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      id={emailId}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder={t('form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor={companyId} className="block text-sm font-medium text-foreground mb-2">
                    {t('form.company')}
                  </label>
                  <input
                    type="text"
                    id={companyId}
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder={t('form.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor={serviceId} className="block text-sm font-medium text-foreground mb-2">
                    {t('form.service')}
                  </label>
                  <select
                    id={serviceId}
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">{t('form.selectService')}</option>
                    {services.map((service, index) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor={demoDateId} className="block text-sm font-medium text-foreground mb-2">
                    {t('form.demoDate')}
                  </label>
                  <input
                    type="date"
                    id={demoDateId}
                    name="demoDate"
                    value={formData.demoDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor={messageId} className="block text-sm font-medium text-foreground mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    id={messageId}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder={t('form.messagePlaceholder')}
                  />
                  </div>

                  <button
                    type="submit"
                    className="w-full justify-center inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {t('form.submit')}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </Container>
    </AnimatedSection>
  )
}