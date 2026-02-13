// ============================================
// OPTIMEMS Landing Page Data Structure
// Ready for Next.js Component Integration
// ============================================

// ─────────────────────────────────────────────
// TYPE DEFINITIONS
// ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface HeroSection {
  headline: string;
  subheadline: string;
  supportingLine: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
}

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
  href: string;
  lightThemeSrc?: string;
}

export interface UserSegment {
  title: string;
  tagline: string;
  description?: string;
  icon?: string;
  category: 'direct' | 'indirect';
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface ProductCard {
  name: string;
  tagline: string;
  description: string;
  features?: string[];
  href: string;
  logo: string;
  logoLight: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  logo?: string;
  lightThemeLogo?: string;
  location?: string;
  featured?: boolean;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
  description?: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

export interface BlogPreview {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  lightThemeImage?: string;
  category?: string;
}

// ─────────────────────────────────────────────
// NAVIGATION
// ─────────────────────────────────────────────

export const navigation: NavItem[] = [
  { label: 'Products', href: '/products' },
  { label: 'About Us', href: '/about' },
  { label: 'Partnership', href: '/partnership' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Careers', href: '/careers' },
  { label: 'Request Demo', href: '/demo' },
  { label: 'Documentation', href: '/docs' },
  { label: 'Support', href: '/support' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

// ─────────────────────────────────────────────
// HERO SECTION
// ─────────────────────────────────────────────

export const hero: HeroSection = {
  headline: 'Beyond Monitoring: Achieve True Energy Command.',
  subheadline:
    'Optimems offers Next-gen EMS with complete control, monitoring and AI-based decision making for your microgrids and VPPs.',
  supportingLine: 'Not another glorified monitoring system.',
  primaryCTA: {
    label: 'Book a Demo',
    href: '/demo',
  },
  secondaryCTA: {
    label: 'Learn More',
    href: '#solutions',
  },
};

// ─────────────────────────────────────────────
// SOCIAL PROOF - CLIENT LOGOS
// ─────────────────────────────────────────────

export const socialProof = {
  sectionLabel: 'Trusted By Industry Leaders',
  alternateLabel: 'The Choice Of',
  logos: [
    { name: 'Logo 1', src: '/images/logos/logo01.svg', alt: 'Logo 1', href: '#', lightThemeSrc: '/images/logos/logo01-light.svg' },
    { name: 'Logo 2', src: '/images/logos/logo02.svg', alt: 'Logo 2', href: '#', lightThemeSrc: '/images/logos/logo02-light.svg' },
    { name: 'Logo 3', src: '/images/logos/logo03.svg', alt: 'Logo 3', href: '#', lightThemeSrc: '/images/logos/logo03-light.svg' },
    { name: 'Logo 4', src: '/images/logos/logo04.svg', alt: 'Logo 4', href: '#', lightThemeSrc: '/images/logos/logo04-light.svg' },
    { name: 'Logo 5', src: '/images/logos/logo05.svg', alt: 'Logo 5', href: '#', lightThemeSrc: '/images/logos/logo05-light.svg' },
    { name: 'Logo 6', src: '/images/logos/logo06.svg', alt: 'Logo 6', href: '#', lightThemeSrc: '/images/logos/logo06-light.svg' },
    { name: 'Logo 7', src: '/images/logos/logo07.svg', alt: 'Logo 7', href: '#', lightThemeSrc: '/images/logos/logo07-light.svg' },
    { name: 'Logo 8', src: '/images/logos/logo08.svg', alt: 'Logo 8', href: '#', lightThemeSrc: '/images/logos/logo08-light.svg' },
  ] as ClientLogo[],
};

// ─────────────────────────────────────────────
// CORE VALUE STATEMENT
// ─────────────────────────────────────────────

export const coreValueStatement = {
  text: 'The robust, secure, and real-time control layer necessary for modern grid management and reliable integration of RES.',
};

// ─────────────────────────────────────────────
// USER SEGMENTS - WHO WE SERVE
// ─────────────────────────────────────────────

export const userSegments: UserSegment[] = [
  // Direct Users
  {
    title: 'Home Owners',
    tagline: 'Effortless Savings and Self-Sufficiency.',
    description:
      'Take control of your home energy with intelligent automation that maximizes savings while ensuring independence from the grid.',
    icon: 'home',
    category: 'direct',
  },
  {
    title: 'C&I Building Owners',
    tagline:
      'Unified management and optimization of all resources to drastically reduce operating expenses.',
    description:
      'Consolidate your commercial and industrial energy assets into one intelligent platform that drives down costs and improves efficiency.',
    icon: 'building',
    category: 'direct',
  },
  {
    title: 'Aggregators',
    tagline:
      'Seamlessly integrates, optimizes, and dispatches all distributed assets for maximum market revenue.',
    description:
      'Unlock the full potential of your distributed energy portfolio with intelligent aggregation and market optimization.',
    icon: 'network',
    category: 'direct',
  },
  {
    title: 'RES Park Owners',
    tagline: 'Continuous Grid Compliance and Total Control & Monitor.',
    description:
      'Maintain regulatory compliance while maximizing output from your renewable energy installations.',
    icon: 'solar',
    category: 'direct',
  },
  // Indirect Users
  {
    title: 'DSOs & TSOs',
    tagline: 'Grid Stability & Trust.',
    description:
      'Distribution System Operators and Transmission System Operators gain reliable partners for grid stability and seamless integration.',
    icon: 'grid',
    category: 'indirect',
  },
];

export const segmentsSectionCopy = {
  directTitle: 'Directly Serving',
  directSubtitle: 'Users & Owners',
  indirectTitle: 'Indirectly Serving',
  indirectSubtitle: 'Enablers',
};

// ─────────────────────────────────────────────
// MARKET ADAPTABILITY
// ─────────────────────────────────────────────

export const marketAdaptability = {
  title: 'Global Reach, Local Compliance',
  text: "We understand that every energy market is different. That's why our platform dynamically adapts to local regulations and market rules — ensuring full compliance and maximizing value wherever you operate.",
};

// ─────────────────────────────────────────────
// VISION SECTION
// ─────────────────────────────────────────────

export interface VisionTheme {
  title: string;
  description: string;
  iconDark?: string;
  iconLight?: string;
}

export const vision = {
  sectionTitle: 'The world we are standing for',
  statement: 'Simplify. Democratize. Empower.',
  tagline: 'Accelerating the Energy Transition for Everyone.',
  themes: [
    {
      title: 'Grid Stability',
      description: 'Ensuring reliable power for communities worldwide.',
    },
    {
      title: 'Promoting Green Energy',
      description: 'Enabling the widespread adoption of renewable sources.',
    },
    {
      title: 'Simplifying the Complex',
      description: 'Making energy transition accessible to all stakeholders.',
    },
  ] as VisionTheme[],
};

// ─────────────────────────────────────────────
// OPTIMEMS AT A GLANCE - STATS
// ─────────────────────────────────────────────

export const stats: StatItem[] = [
  {
    label: 'Installations',
    value: '1000',
    suffix: '+',
    description: 'Equipment deployed across Europe',
  },
  {
    label: 'Compatibility',
    value: '100',
    suffix: '%',
    description: 'Works with 65+ inverter brands',
  },
  {
    label: 'Made In',
    value: 'EU',
    description: 'European engineering and manufacturing',
  },
];

// ─────────────────────────────────────────────
// VALUE PROPOSITIONS
// ─────────────────────────────────────────────

export const valuePropositions: ValueProposition[] = [
  {
    icon: 'profit',
    title: 'Maximize Profit & Market Access',
    description: 'Our system is DER and Battery Integration-Ready right out of the box.',
  },
  {
    icon: 'revenue',
    title: 'Turn Assets into Profit Centers',
    description: 'Immediately participate in lucrative energy markets, transforming operational necessities into revenue streams.',
  },
  {
    icon: 'investment',
    title: 'Protect Your Current Investment',
    description: 'Give valuable second life to your existing infrastructure. You multiply their value, don\'t lose money on current investments.',
  },
  {
    icon: 'deployment',
    title: 'Ultra-Low Friction Deployment',
    description: 'Commission your assets remotely, minimizing on-site labor and significantly accelerating your path to revenue.',
  },
];

// ─────────────────────────────────────────────
// MISSION STATEMENT
// ─────────────────────────────────────────────

export const mission = {
  title: 'Our Approach',
  tagline: 'Unified platform, seamless integration.',
  description:
    'We believe energy management should be simple, powerful, and accessible. Our unified platform brings together hardware and software in perfect harmony.',
};

// ─────────────────────────────────────────────
// SOLUTIONS / PRODUCTS OVERVIEW
// ─────────────────────────────────────────────

export const products: ProductCard[] = [
  {
    name: '+SolarControl',
    tagline: 'Complete hardware + software solution to control & monitor your RES plant',
    description:
      'Robust, real-time control & monitoring for each energy asset. The foundation of intelligent energy management.',
    features: [
      'Real-time monitoring',
      'Hardware + software bundle',
      'RES plant optimization',
      'Grid compliance automation',
    ],
    href: '/products-services/solar-control',
    logo: '/images/logos/optimems-solar-control.svg',
    logoLight: '/images/logos/optimems-solar-control-light.svg',
  },
  {
    name: '+Mind',
    tagline: 'The Intelligent Brain Behind Your Microgrid & VPP',
    description:
      'Integrate all diverse energy assets, act as a single, smart brain that pushes performance and profit to their maximum limits. Work seamlessly together.',
    features: [
      'AI-powered optimization',
      'Multi-asset integration',
      'VPP management',
      'Market participation',
    ],
    href: '/products-services/mind',
    logo: '/images/logos/optimems-mind.svg',
    logoLight: '/images/logos/optimems-mind-light.svg',
  },
];

export const productsSectionCopy = {
  title: 'Our Solutions',
  subtitle: 'Two powerful products. One unified ecosystem.',
  description:
    'Whether you need asset-level control or portfolio-wide intelligence, our products work together seamlessly.',
};

// ─────────────────────────────────────────────
// TESTIMONIALS
// ─────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: 'daniel-eric',
    quote: 'We have been working with Optimems for a couple of years and are very happy with the professional and friendly collaboration. It has been a great catalyst in the development work for us.',
    author: 'Dan-Eric Archer',
    role: 'CEO',
    company: 'CheckWatt',
    location: 'Sweden',
    avatar: '/dan_eric_grayscale.jpeg',
    logo: '/images/logos/checkwatt-logo-dark.svg',
    lightThemeLogo: '/images/logos/checkwatt-logo-light.svg',
    featured: true,
  },
  {
    id: 'egnatiagroup',
    quote:
      'In partnership with OPTIMEMS, we successfully implemented and activated the telecontrol systems required by DEDDHEE for PV stations with power above 400 kWp. The OPTIMEMS team demonstrated a high level of technical expertise, excellent understanding of regulatory requirements, and prompt responsiveness at all stages of the project, from the study to the full activation of the systems. Our collaboration was characterized by professionalism, reliability, and effectiveness, contributing decisively to the timely compliance of our parks with the Operator\'s specifications. Based on our experience to date, we plan to continue our partnership with OPTIMEMS and choose them for new activities and solutions they will develop in the future.',
    author: 'Ioannis Kyparidis',
    role: 'PV Portfolio & Operations Manager',
    company: 'Egnatia Group',
    location: 'Greece',
  },
  {
    id: 'engaia',
    quote:
      'At ENGAIA, we select our partners with professionalism and quality as our primary criteria. Optimems is exactly that.',
    author: 'ENGAIA Team',
    role: 'Partner',
    company: 'ENGAIA',
    location: 'Greece',
  },
  {
    id: 'bayware',
    quote:
      'Adding a new supplier is a particularly sensitive matter for BayWa r.e. As the largest wholesaler in Europe, having associated our name with top-tier products from Tier 1 manufacturers for over 30 years, we maintain very strict criteria when selecting photovoltaic equipment. Our collaboration with Optimems for telemanagement systems came to address an urgent and specialized demand for a complete solution that required high technical expertise and immediate service.',
    author: 'BayWa r.e. Team',
    role: 'Distribution Partner',
    company: 'BayWa r.e.',
    location: 'Europe',
  },
  {
    id: 'clockwork',
    quote:
      'Co-developing +SolarControl with Optimems was simply the catalyst for gaining a brotherly partner. Something that\'s practically a one-way street when you meet someone who shares the same passion and dedication to their work as you do. Our enduring partnership with Optimems is not just an exceptional professional experience, but every time it\'s a new opportunity to surpass ourselves.',
    author: 'Clockwork Energy Team',
    role: 'Development Partner',
    company: 'Clockwork Energy',
    location: 'Greece',
  },
];

export const testimonialsSectionCopy = {
  title: 'What Our Partners Say',
  subtitle: 'Trusted across Europe',
};

// ─────────────────────────────────────────────
// WORKFLOW / HOW IT WORKS
// ─────────────────────────────────────────────

export const workflow: WorkflowStep[] = [
  {
    step: 1,
    title: 'Assess & Plan',
    description:
      'Our team analyzes your existing infrastructure and designs a tailored integration roadmap.',
    icon: 'clipboard-check',
  },
  {
    step: 2,
    title: 'Deploy & Configure',
    description:
      'Rapid on-site installation with remote commissioning — operational in minutes, not days.',
    icon: 'settings',
  },
  {
    step: 3,
    title: 'Connect & Integrate',
    description:
      'Seamless connection to your existing assets, inverters, and grid infrastructure.',
    icon: 'link',
  },
  {
    step: 4,
    title: 'Optimize & Profit',
    description:
      'AI-driven optimization kicks in automatically, maximizing performance and market revenue.',
    icon: 'trending-up',
  },
];

export const workflowSectionCopy = {
  title: 'How It Works',
  subtitle: 'From installation to optimization in four simple steps',
};

// ─────────────────────────────────────────────
// WARRANTY
// ─────────────────────────────────────────────

export const warranty = {
  title: '2-Year Comprehensive Warranty',
  description:
    '2-year warranty includes software updates to ensure continuous compliance with the Distributor Network Operator (DSO) requirements and basic technical support by email.',
  features: [
    'Continuous software updates',
    'DSO compliance updates',
    'Email technical support',
    'Hardware replacement coverage',
  ],
  badge: '2 Years',
};

// ─────────────────────────────────────────────
// BLOG PREVIEW
// ─────────────────────────────────────────────

export const blogPreviewSectionCopy = {
  title: 'Latest Insights',
  subtitle: 'News, updates, and lessons from the field',
  viewAllLabel: 'View All Articles',
  viewAllHref: '/blog',
};

// Actual blog posts from optimems.gr - using new blog banner images
export const blogPreviewPlaceholder: BlogPreview[] = [
  {
    title: 'Optimems Named #1 Startup in Greece by NBG Business Seeds',
    excerpt: 'A National Recognition That Fuels Our Mission for a Greener, Smarter Energy Future',
    date: '2024-12-15',
    slug: 'optimems-nbg-business-seeds',
    image: '/blog-images/nbg-business-seeds-blog-dark.jpeg',
    category: 'News',
  },
  {
    title: 'Optimems Shines at Web Summit Vancouver 2025',
    excerpt: 'From Thessaloniki to Vancouver: Optimems Among the World\'s Top 10 Startups!',
    date: '2024-12-10',
    slug: 'optimems-web-summit-vancouver',
    image: '/blog-images/web-summit-vancouver-blog-dark.jpeg',
    category: 'News',
  },
  {
    title: 'Job Opening – Tech Support',
    excerpt: 'The ideal candidate will be responsible for supporting the technical installations of company products in RES plants. Remote support and onsite visits are included.',
    date: '2024-12-05',
    slug: 'job-opening-tech-support',
    image: '/blog-images/job-opening-blog-banner-dark.jpeg',
    category: 'Jobs',
  },
];

// ─────────────────────────────────────────────
// CONTACT / CTA SECTION
// ─────────────────────────────────────────────

export const contactCTA = {
  title: 'Ready to Transform Your Energy Management?',
  subtitle:
    "Let's discuss how Optimems can help you achieve true energy command.",
  primaryCTA: {
    label: 'Book a Demo',
    href: '/demo',
  },
  secondaryCTA: {
    label: 'Contact Sales',
    href: '/contact',
  },
  supportText: 'Or email us directly at',
  email: 'info@optimems.gr',
};

// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────

export const footer = {
  company: {
    name: 'Optimems',
    description:
      'Next-generation Energy Management Systems for microgrids and VPPs.',
    logo: '/logo.svg',
  },
  links: {
    products: [
      { label: '+SolarControl', href: '/products/solar-control' },
      { label: '+Mind', href: '/products/mind' },
    ],
    company: [
      { label: 'About Us', href: '/about' },
      { label: 'Partnership', href: '/partnership' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Careers', href: '/careers' },
    ],
    resources: [
      { label: 'Blog', href: '/blog' },

      { label: 'Documentation', href: '/docs' },
      { label: 'Support', href: '/support' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Cookie Policy', href: '/cookies' },
    ],
  },
  contact: {
    email: 'info@optimems.gr',
    // TODO: Replace with actual phone number
    phone: '+30 XXX XXX XXXX',
    address: 'Athens, Greece',
  },
  social: [
    { platform: 'Facebook', href: 'https://www.facebook.com/people/Optimems/61567697585194/' },
    { platform: 'X', href: 'https://x.com/optimemsGR' },
    { platform: 'YouTube', href: 'https://www.youtube.com/channel/UCFKMlmRTkLwXRNa1qmRpPew' },
    { platform: 'LinkedIn', href: 'https://www.linkedin.com/company/optimems/posts/?feedView=all&viewAsMember=true' },
  ],
  copyright: `© ${new Date().getFullYear()} Optimems. All rights reserved.`,
};

// ─────────────────────────────────────────────
// SECTION ORDER (for page composition)
// ─────────────────────────────────────────────

export const sectionOrder = [
  'hero',
  'stats',
  'governmentLogos',
  'products',
  'valuePropositions',
  'testimonials',
  'vision',
  'blogPreview',
  'contactCTA',
] as const;

export type SectionName = (typeof sectionOrder)[number];

// ─────────────────────────────────────────────
// COMPLETE PAGE DATA EXPORT
// ─────────────────────────────────────────────

export const landingPageData = {
  navigation,
  hero,
  socialProof,
  coreValueStatement,
  userSegments,
  segmentsSectionCopy,
  marketAdaptability,
  vision,
  stats,
  valuePropositions,
  mission,
  products,
  productsSectionCopy,
  testimonials,
  testimonialsSectionCopy,
  workflow,
  workflowSectionCopy,
  warranty,
  blogPreviewSectionCopy,
  blogPreviewPlaceholder,
  contactCTA,
  footer,
  sectionOrder,
};

export default landingPageData;
