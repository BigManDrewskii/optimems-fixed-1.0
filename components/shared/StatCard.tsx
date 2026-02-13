"use client"

import { cn } from "@/lib/utils"

export interface StatCardProps {
  value: string
  suffix?: string
  label: string
  description?: string
  className?: string
}

export function StatCard({
  value,
  suffix,
  label,
  description,
  className,
}: StatCardProps) {
  return (
    <div className={cn("text-center", className)}>
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {value}
        {suffix && <span className="text-3xl md:text-4xl">{suffix}</span>}
      </div>
      <p className="text-sm uppercase tracking-wide text-muted-foreground mb-1">
        {label}
      </p>
      {description && (
        <p className="text-xs text-muted-foreground/70">{description}</p>
      )}
    </div>
  )
}
