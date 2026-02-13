import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  // Supported locales
  locales: ['el', 'en'],

  // Default locale (Greek)
  defaultLocale: 'el',

  // Always show locale prefix in URL (e.g., /el/about, /en/about)
  localePrefix: 'always'
});
