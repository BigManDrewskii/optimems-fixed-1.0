"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslations } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
  category: string
}

/**
 * ConsultFAQ - FAQ section with categorized questions
 */
export function ConsultFAQ() {
  const t = useTranslations('consultPage.faq')
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const faqItems: FAQItem[] = [
    {
      question: t('question1.question'),
      answer: t('question1.answer'),
      category: t('category.general')
    },
    {
      question: t('question2.question'),
      answer: t('question2.answer'),
      category: t('category.general')
    },
    {
      question: t('question3.question'),
      answer: t('question3.answer'),
      category: t('category.services')
    },
    {
      question: t('question4.question'),
      answer: t('question4.answer'),
      category: t('category.services')
    },
    {
      question: t('question5.question'),
      answer: t('question5.answer'),
      category: t('category.process')
    },
    {
      question: t('question6.question'),
      answer: t('question6.answer'),
      category: t('category.process')
    },
    {
      question: t('question7.question'),
      answer: t('question7.answer'),
      category: t('category.pricing')
    },
    {
      question: t('question8.question'),
      answer: t('question8.answer'),
      category: t('category.pricing')
    }
  ]

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  const categories = Array.from(new Set(faqItems.map(item => item.category)))

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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            {t('badge')}
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
            {t('headline')}
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {t('subheadline')}
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="inline-flex px-4 py-2 rounded-full bg-muted border border-border/50 text-sm font-medium text-muted-foreground"
            >
              {category}
            </div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full text-left p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openItems.has(index) ? (
                      <ChevronUp className="w-5 h-5 text-primary transition-transform" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground transition-transform" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {openItems.has(index) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  )
}