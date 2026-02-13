"use client"

import { ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface FeatureListProps {
  features: string[]
  className?: string
  icon?: ReactNode
}

export function FeatureList({
  features,
  className,
  icon = <span className="w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />,
}: FeatureListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <span className="flex-shrink-0">{icon}</span>
          <p className="text-sm text-foreground">{feature}</p>
        </li>
      ))}
    </ul>
  )
}
