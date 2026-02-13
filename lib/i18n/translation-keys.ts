// Translation key constants - Single source of truth for all translation key arrays
// Ensure these match the structure in messages/el.json and messages/en.json

// Stats section keys (must match stats object structure)
export const statKeys = [
  'installations',
  'compatibility',
  'madeIn'
] as const

// Workflow steps keys (numeric string keys)
export const workflowStepKeys = ['1', '2', '3', '4'] as const

// Value propositions keys
export const valuePropKeys = ['profit', 'revenue', 'investment', 'deployment'] as const

// User segments keys
export const userSegmentKeys = [
  'homeOwners',
  'ciBuildingOwners',
  'aggregators',
  'resParkOwners',
  'dsosTsos'
] as const

// Testimonials keys
export const testimonialKeys = ['daniel-eric', 'egnatiagroup', 'engaia', 'bayware', 'clockwork'] as const

// Warranty features keys
export const warrantyFeatureKeys = [
  'continuousUpdates',
  'complianceUpdates',
  'emailSupport',
  'hardwareReplacement'
] as const

// Blog post keys
export const blogPostKeys = [
  'title',
  'subtitle',
  'viewAllArticles',
  'readArticle',
  'backToBlog',
  'minRead',
  'by',
  'noPosts',
  'relatedPostsLabel',
  'relatedPostsTitle',
  'relatedPostsDescription',
  'publishedOn',
  'author'
] as const
