import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: {
      common: (await import(`@/messages/${locale}/common.json`)).default,
      home: (await import(`@/messages/${locale}/home.json`)).default,
      about: (await import(`@/messages/${locale}/about.json`)).default,
      products: (await import(`@/messages/${locale}/products.json`)).default,
      blog: (await import(`@/messages/${locale}/blog.json`)).default
    }
  };
});
