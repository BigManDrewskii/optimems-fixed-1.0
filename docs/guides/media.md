# Video Optimization Guide

This document provides recommendations and commands for optimizing videos in the Optimems landing page.

## Current Issues

- Large video files (e.g., `res-park-banner-light.webm` is 2.8MB)
- Single format (only WebM, no MP4 fallback)
- No adaptive bitrate streaming

## Optimization Targets

### File Size Goals
- **Hero banners**: < 1MB each
- **Section banners**: < 500KB each
- **Product videos**: < 300KB each
- **User segment videos**: < 200KB each

### Format Strategy
Provide both WebM and MP4 for maximum browser compatibility:
- **WebM (VP9)**: Modern browsers, better compression
- **MP4 (H.264)**: Fallback for Safari and older browsers

## Compression Commands

### WebM (VP9) - Primary Format

```bash
# Hero banners (high quality, target < 1MB)
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 1M -crf 30 -c:a libopus -b:a 128k output.webm

# Section banners (medium quality, target < 500KB)
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 800K -crf 35 -c:a libopus -b:a 96k output.webm

# Product/user segment videos (lower quality, target < 300KB)
ffmpeg -i input.mov -c:v libvpx-vp9 -b:v 500K -crf 40 -c:a libopus -b:a 64k output.webm
```

### MP4 (H.264) - Fallback Format

```bash
# Hero banners (high quality, target < 1MB)
ffmpeg -i input.mov -c:v libx264 -b:v 1M -crf 23 -preset medium -c:a aac -b:a 128k output.mp4

# Section banners (medium quality, target < 500KB)
ffmpeg -i input.mov -c:v libx264 -b:v 800K -crf 28 -preset medium -c:a aac -b:a 96k output.mp4

# Product/user segment videos (lower quality, target < 300KB)
ffmpeg -i input.mov -c:v libx264 -b:v 500K -crf 32 -preset fast -c:a aac -b:a 64k output.mp4
```

## Resolution Recommendations

Based on viewport and usage:

| Video Type | Desktop Resolution | Mobile Resolution |
|-----------|-------------------|-------------------|
| Hero banners | 1920x1080 or 1440x810 | 1080x1920 or 810x1440 |
| Section banners | 1280x720 | 720x1280 |
| Product videos | 800x600 | 600x800 |
| User segments | 640x480 | 480x640 |

### Resolution Scaling Commands

```bash
# Desktop version
ffmpeg -i input.mov -vf scale=1280:720 -c:v libvpx-vp9 -b:v 800K -crf 35 output-desktop.webm

# Mobile version
ffmpeg -i input.mov -vf scale=720:1280 -c:v libvpx-vp9 -b:v 500K -crf 40 output-mobile.webm
```

## Optimization Batch Script

Save this as `optimize-videos.sh`:

```bash
#!/bin/bash

# Optimizes all videos in current directory
# Usage: ./optimize-videos.sh

INPUT_DIR="./videos-raw"
OUTPUT_DIR="./public/videos"

mkdir -p "$OUTPUT_DIR/light"
mkdir -p "$OUTPUT_DIR/dark"

for video in "$INPUT_DIR"/*.mov; do
  filename=$(basename "$video" .mov)

  echo "Optimizing: $filename"

  # WebM (light theme)
  ffmpeg -i "$video" \
    -c:v libvpx-vp9 -b:v 800K -crf 35 \
    -c:a libopus -b:a 96k \
    "$OUTPUT_DIR/light/${filename}-light.webm"

  # MP4 (light theme)
  ffmpeg -i "$video" \
    -c:v libx264 -b:v 800K -crf 28 -preset medium \
    -c:a aac -b:a 96k \
    "$OUTPUT_DIR/light/${filename}-light.mp4"

  # WebM (dark theme) - if exists
  if [ -f "${video%.*}-dark.mov" ]; then
    ffmpeg -i "${video%.*}-dark.mov" \
      -c:v libvpx-vp9 -b:v 800K -crf 35 \
      -c:a libopus -b:a 96k \
      "$OUTPUT_DIR/dark/${filename}-dark.webm"

    ffmpeg -i "${video%.*}-dark.mov" \
      -c:v libx264 -b:v 800K -crf 28 -preset medium \
      -c:a aac -b:a 96k \
      "$OUTPUT_DIR/dark/${filename}-dark.mp4"
  fi
done
```

## Current Video Sizes

### Light Theme Videos
| File | Size | Status |
|------|------|--------|
| aggregators-banner-light.webm | 1.5MB | ✅ Good |
| building-banner-light.webm | 363KB | ✅ Excellent |
| dso-tso-banner-light.webm | 390KB | ✅ Excellent |
| hero-banner-light.webm | 378KB | ✅ Excellent |
| homeowners-banner-light.webm | 1.0MB | ⚠️ Could be smaller |
| mind-banner-light.webm | 385KB | ✅ Excellent |
| res-park-banner-light.webm | 2.8MB | ❌ Too large |
| solar-control-banner-light.webm | 785KB | ✅ Good |

### Dark Theme Videos
| File | Size | Status |
|------|------|--------|
| aggregators-banner-dark.webm | 1.1MB | ✅ Good |
| building-banner-dark.webm | 582KB | ✅ Good |
| dso-tso-banner-dark.webm | 414KB | ✅ Excellent |
| hero-banner-dark.webm | 499KB | ✅ Excellent |
| homeowners-banner-dark.webm | 1.3MB | ⚠️ Could be smaller |
| mind-banner-dark.webm | 504KB | ✅ Excellent |
| res-park-banner-dark.webm | 2.1MB | ❌ Too large |
| solar-control-banner-dark.webm | 648KB | ✅ Good |

## Priority Optimizations

1. **res-park-banner** (2.8MB → target < 1MB)
   ```bash
   ffmpeg -i public/videos/light/res-park-banner-light.webm \
     -c:v libvpx-vp9 -b:v 1M -crf 30 \
     public/videos/light/res-park-banner-light.webm
   ```

2. **homeowners-banner** (1.3MB → target < 1MB)
   ```bash
   ffmpeg -i public/videos/dark/homeowners-banner-dark.webm \
     -c:v libvpx-vp9 -b:v 900K -crf 32 \
     public/videos/dark/homeowners-banner-dark.webm
   ```

## Additional Resources

- [WebM Compression Guide](https://trac.ffmpeg.org/wiki/Encode/VP9)
- [H.264 Encoding Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Video Optimization Best Practices](https://web.dev/fast/efficient-video-compression/)
