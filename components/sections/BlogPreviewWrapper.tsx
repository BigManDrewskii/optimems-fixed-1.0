import { BlogPreview } from "./BlogPreview"
import type { BlogPost } from "@/lib/blog"

// Featured blog posts to show on homepage
const featuredSlugs = [
  '2025-06-26-optimems-nbg-business-seeds',
  '2025-06-02-optimems-web-summit-vancouver',
  '2025-05-10-job-opening-tech-support'
]

interface BlogPreviewWrapperProps {
  featuredPosts: BlogPost[]
}

export function BlogPreviewWrapper({ featuredPosts }: BlogPreviewWrapperProps) {
  return <BlogPreview featuredPosts={featuredPosts} />
}
