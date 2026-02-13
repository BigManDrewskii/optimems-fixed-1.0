"use client"

import { BaseCard } from "@/components/shared/BaseCard"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { ColorSwatch } from "./ColorSwatch"
import type { ColorToken } from "@/lib/branding-utils"

interface ThemeComparisonCardProps {
  title: string
  description: string
  lightColors: Record<ColorToken, string>
  darkColors: Record<ColorToken, string>
  tokens: ColorToken[]
  tokenDescriptions: Partial<Record<ColorToken, string>>
}

export function ThemeComparisonCard({
  title,
  description,
  lightColors,
  darkColors,
  tokens,
  tokenDescriptions,
}: ThemeComparisonCardProps) {
  return (
    <div className="mb-12">
      <SectionHeader title={title} description={description} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Light Theme Preview */}
        <BaseCard variant="standard" className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Light Theme</h3>
            <p className="text-sm text-muted-foreground">
              Colors displayed in light mode context
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tokens.map((token) => (
              <ColorSwatch
                key={token}
                tokenName={token}
                value={lightColors[token]}
                description={tokenDescriptions[token]}
              />
            ))}
          </div>
        </BaseCard>

        {/* Dark Theme Preview */}
        <BaseCard variant="standard" className="p-6">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-1">Dark Theme</h3>
            <p className="text-sm text-muted-foreground">
              Colors displayed in dark mode context
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tokens.map((token) => (
              <ColorSwatch
                key={token}
                tokenName={token}
                value={darkColors[token]}
                description={tokenDescriptions[token]}
              />
            ))}
          </div>
        </BaseCard>
      </div>
    </div>
  )
}
