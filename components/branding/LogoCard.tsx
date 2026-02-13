"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { BaseCard } from "@/components/shared/BaseCard"

interface LogoCardProps {
  title: string
  description: string
  logoSrc: string
  logoAlt: string
  logoWidth: number
  logoHeight: number
  downloadSvg?: string
  downloadPng?: string
}

export function LogoCard({
  title,
  description,
  logoSrc,
  logoAlt,
  logoWidth,
  logoHeight,
  downloadSvg,
  downloadPng,
}: LogoCardProps) {
  return (
    <BaseCard variant="standard" className="p-8">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="bg-muted/30 rounded-xl p-12 flex items-center justify-center min-h-[200px] mb-6">
        <div className="relative text-white" style={{ width: logoWidth, height: logoHeight }}>
          <Image src={logoSrc} alt={logoAlt} fill className="object-contain" />
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-6">{description}</p>
      <div className="flex gap-3 justify-center">
        {downloadSvg && (
          <Button variant="outline" size="sm" asChild>
            <a href={downloadSvg} download>Download SVG</a>
          </Button>
        )}
        {downloadPng && (
          <Button variant="outline" size="sm" asChild>
            <a href={downloadPng} download>Download PNG</a>
          </Button>
        )}
      </div>
    </BaseCard>
  )
}
