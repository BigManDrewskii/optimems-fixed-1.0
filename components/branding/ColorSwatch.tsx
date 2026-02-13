"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import type { ColorToken } from "@/lib/branding-utils"

interface ColorSwatchProps {
  tokenName: ColorToken
  value: string
  description?: string
  showTokenName?: boolean
}

export function ColorSwatch({
  tokenName,
  value,
  description,
  showTokenName = true,
}: ColorSwatchProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      copyToClipboard()
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        className="h-16 w-full rounded-lg border border-border/50 relative cursor-pointer overflow-hidden group text-left transition-all hover:scale-[1.02] hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
        aria-label={`Copy ${tokenName} color value`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-background/90 backdrop-blur rounded-full p-1.5 shadow-sm">
            {copied ? (
              <Check className="w-3 h-3 text-green-500" aria-hidden="true" />
            ) : (
              <Copy className="w-3 h-3" aria-hidden="true" />
            )}
          </div>
        </div>
      </button>

      <div>
        {showTokenName && (
          <p className="font-medium text-sm">
            <code className="text-xs bg-muted/50 px-1.5 py-0.5 rounded">
              {tokenName}
            </code>
          </p>
        )}
        {description && (
          <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
        )}
      </div>

      <button
        type="button"
        className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded block truncate hover:text-foreground hover:bg-muted/70 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none text-left font-mono"
        onClick={copyToClipboard}
        onKeyDown={handleKeyDown}
        aria-label={`Copy color value: ${value}`}
      >
        {value}
      </button>
    </div>
  )
}
