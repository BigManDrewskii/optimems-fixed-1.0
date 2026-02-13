"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  variant?: "full" | "icon" | "text"
  className?: string
  width?: number
  height?: number
}

export function OptimemsLogo({
  variant = "full",
  className,
  width,
  height,
}: LogoProps) {
  if (variant === "icon") {
    return (
      <div className={cn("relative", className)} style={{ width: width || 40, height: height || 40 }}>
        <div className="hidden dark:block absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-icon-dark.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
        <div className="dark:hidden absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-icon-light.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className={cn("relative", className)} style={{ width: width || 160, height: height || 64 }}>
        <div className="hidden dark:block absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-fontmark-dark.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
        <div className="dark:hidden absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-fontmark-light.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <div className="hidden dark:block absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-icon-dark.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
        <div className="dark:hidden absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-icon-light.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative w-40 h-16 hidden sm:block flex-shrink-0">
        <div className="hidden dark:block absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-fontmark-dark.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
        <div className="dark:hidden absolute inset-0">
          <Image
            src="/images/logos/optimems-logo-fontmark-light.svg"
            alt="Optimems"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
