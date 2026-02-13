import { Metadata } from 'next'

/**
 * Gets absolute URL for the given path
 */
export function getAbsoluteUrl(path: string): string {
  return `https://optimems.gr${path}`
}

/**
 * Creates OpenGraph image metadata
 */
export function createOpenGraphImages(
  imagePath: string,
  width = 1200,
  height = 630
) {
  return [{
    url: imagePath,
    width,
    height,
    alt: 'Optimems - Energy Management Systems'
  }]
}
