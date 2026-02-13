"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { BlogCard } from '@/components/blog/BlogCard'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import type { BlogPost } from "@/lib/blog"

interface BlogSectionProps {
  posts: BlogPost[]
}

export function BlogSection({ posts }: BlogSectionProps) {
  const t = useTranslations('aboutUsPage.blog')
  const latestPosts = posts.slice(0, 3)

  return (
    <ProductPageSection
      header={{
        title: t('title'),
        description: t('description'),
        align: "center",
        size: "standard"
      }}
      spacing="standard"
    >
      {latestPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {latestPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">{t('noPosts')}</p>
        </div>
      )}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform">
          <Link href="/blog">
            {t('viewAll')}
          </Link>
        </Button>
      </motion.div>
    </ProductPageSection>
  )
}
