"use client"

import { cn } from "@/lib/utils"
import { Video } from "./Video"

export interface VideoContainerProps {
  src: string
  className?: string
  aspectRatio?: 'video' | 'square' | 'custom'
  maxHeight?: string
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  preload?: "none" | "metadata" | "auto"
}

export function VideoContainer({
  src,
  className,
  aspectRatio = 'video',
  maxHeight,
  autoplay = true,
  muted = true,
  loop = true,
  preload = "auto",
}: VideoContainerProps) {
  const aspectRatioClasses = {
    video: 'aspect-video',
    square: 'aspect-square',
    custom: '',
  }

  return (
    <div
      className={cn(
        'relative overflow-hidden',
        aspectRatioClasses[aspectRatio],
        className
      )}
      style={maxHeight ? { maxHeight } : undefined}
    >
      <Video
        src={src}
        autoplay={autoplay}
        muted={muted}
        loop={loop}
        preload={preload}
        className="w-full h-full object-cover"
      />
    </div>
  )
}
