// Utility to filter out hidden pages from footer navigation
export const hiddenPages = ['/careers', '/docs', '/branding']; // Pages temporarily hidden

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function filterFooterLinks(links: FooterLink[]): FooterLink[] {
  return links.filter(link => !hiddenPages.includes(link.href));
}

export function filterFooterSections(sections: FooterSection[]): FooterSection[] {
  return sections.map(section => ({
    ...section,
    links: filterFooterLinks(section.links)
  }));
}