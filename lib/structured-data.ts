/**
 * Structured data (JSON-LD) utilities for SEO
 */

export interface OrganizationSchema {
  '@context': string
  '@type': 'Organization'
  name: string
  url: string
  logo: string
  description: string
  sameAs: string[]
}

export interface ProductSchema {
  '@context': string
  '@type': 'Product'
  name: string
  description: string
  brand: {
    '@type': 'Organization'
    name: string
  }
}

export interface ArticleSchema {
  '@context': string
  '@type': 'Article'
  headline: string
  description: string
  datePublished: string
  dateModified: string
  author: {
    '@type': 'Person'
    name: string
  }
  url: string
  publisher: {
    '@type': 'Organization'
    name: string
    logo: {
      '@type': 'ImageObject'
      url: string
    }
  }
  mainEntityOfPage: {
    '@type': 'WebPage'
    '@id': string
  }
  image?: {
    '@type': 'ImageObject'
    url: string
  }
}

export interface BreadcrumbItem {
  name: string
  url: string
}

export interface BreadcrumbSchema {
  '@context': string
  '@type': 'BreadcrumbList'
  itemListElement: Array<{
    '@type': 'ListItem'
    position: number
    name: string
    item: string
  }>
}

/**
 * Creates Organization schema for company information
 */
export function createOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Optimems',
    url: 'https://optimems.gr',
    logo: 'https://optimems.gr/optimems-logos/optimems-logo-icon-dark.svg',
    description: 'AI-powered energy management solutions for grid optimization',
    sameAs: [
      'https://linkedin.com/company/optimems',
      'https://twitter.com/optimems',
      'https://youtube.com/@optimems'
    ]
  }
}

/**
 * Creates Product schema for product pages
 */
export function createProductSchema(
  name: string,
  description: string
): ProductSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    brand: {
      '@type': 'Organization',
      name: 'Optimems'
    }
  }
}

/**
 * Creates Article schema for blog posts
 */
export function createArticleSchema(post: {
  title: string
  description: string
  date: string
  author: string
  url: string
  image?: string
}): ArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author
    },
    url: post.url,
    publisher: {
      '@type': 'Organization',
      name: 'Optimems',
      logo: {
        '@type': 'ImageObject',
        url: 'https://optimems.gr/optimems-logos/optimems-logo-icon-dark.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url
    },
    ...(post.image && {
      image: {
        '@type': 'ImageObject',
        url: post.image
      }
    })
  }
}

/**
 * Creates Breadcrumb schema for navigation hierarchy
 */
export function createBreadcrumbSchema(
  items: BreadcrumbItem[]
): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}
