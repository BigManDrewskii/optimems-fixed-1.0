import 'server-only';

const namespaces = ['common', 'home', 'about', 'products', 'blog'] as const;

type Namespace = typeof namespaces[number];

async function loadNamespace(locale: string, namespace: Namespace) {
  switch (namespace) {
    case 'common':
      return import(`@/messages/${locale}/common.json`).then((module) => module.default);
    case 'home':
      return import(`@/messages/${locale}/home.json`).then((module) => module.default);
    case 'about':
      return import(`@/messages/${locale}/about.json`).then((module) => module.default);
    case 'products':
      return import(`@/messages/${locale}/products.json`).then((module) => module.default);
    case 'blog':
      return import(`@/messages/${locale}/blog.json`).then((module) => module.default);
    default:
      return {};
  }
}

async function loadAllNamespaces(locale: string) {
  const [common, home, about, products, blog] = await Promise.all(
    namespaces.map((ns) => loadNamespace(locale, ns))
  );
  return { ...common, ...home, ...about, ...products, ...blog };
}

const dictionaries = {
  el: () => loadAllNamespaces('el'),
  en: () => loadAllNamespaces('en'),
};

export type Locale = keyof typeof dictionaries;
export type TranslationNamespace = Namespace;

export async function getTranslations(locale: Locale, namespace?: Namespace) {
  const dictionary = await dictionaries[locale]();
  
  function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = dictionary;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Missing translation key: ${key}`);
        return key;
      }
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    console.warn(`Translation key is not a string: ${key}`);
    return key;
  }
  
  return { t, dictionary };
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];
  
  if (potentialLocale === 'en') {
    return 'en';
  }
  
  return 'el';
}
