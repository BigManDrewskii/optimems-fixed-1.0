import { cn } from "@/lib/utils"

interface BlogBannerPlaceholderProps {
  category: string
  title?: string
  variant?: "card" | "hero"
  className?: string
}

const categoryGradients: Record<string, string> = {
  news: "from-blue-500/20 to-teal-500/20",
  jobs: "from-orange-500/20 to-red-500/20",
  careers: "from-orange-500/20 to-red-500/20",
  webinars: "from-purple-500/20 to-pink-500/20",
  "lesson-learned": "from-green-500/20 to-emerald-500/20",
}

const categoryBorderColors: Record<string, string> = {
  news: "border-blue-500/30",
  jobs: "border-orange-500/30",
  careers: "border-orange-500/30",
  webinars: "border-purple-500/30",
  "lesson-learned": "border-green-500/30",
}

export function BlogBannerPlaceholder({
  category,
  title,
  variant = "card",
  className,
}: BlogBannerPlaceholderProps) {
  const gradient = categoryGradients[category.toLowerCase()] || categoryGradients.news
  const borderColor = categoryBorderColors[category.toLowerCase()] || categoryBorderColors.news

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        "bg-gradient-to-br",
        gradient,
        "border",
        borderColor,
        variant === "card" ? "aspect-video" : "aspect-[21/9]",
        className
      )}
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Category label in center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center space-y-2">
          <span className="text-foreground/60 text-sm font-medium uppercase tracking-widest">
            {category}
          </span>
          {title && variant === "hero" && (
            <h1 className="text-foreground/40 text-2xl md:text-4xl font-bold max-w-4xl px-4 line-clamp-2">
              {title}
            </h1>
          )}
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-foreground/5 to-transparent" />
    </div>
  )
}
