"use client"

import { ReactNode } from "react"
import { BaseCard } from "@/components/shared/BaseCard"

interface ComponentCardProps {
  title: string
  description: string
  children: ReactNode
}

export function ComponentCard({ title, description, children }: ComponentCardProps) {
  return (
    <BaseCard variant="standard" className="p-8">
      <h3 className="text-lg font-semibold mb-6">{title}</h3>
      <div className="flex items-center justify-center py-4">
        {children}
      </div>
      <p className="text-xs text-muted-foreground mt-4 text-center">
        {description}
      </p>
    </BaseCard>
  )
}
