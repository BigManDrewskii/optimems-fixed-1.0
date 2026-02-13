# Consult Page Testing Plan

## 1. Responsive Testing

### Breakpoints to Test:
- **Mobile**: 320px-639px (sm)
- **Tablet**: 640px-1023px (md-lg) 
- **Desktop**: 1024px+ (xl+)

### Specific Areas to Test:
1. **Hero Section** (`ConsultHero.tsx`):
   - Video background scaling
   - Typography sizing (text-4xl md:text-5xl lg:text-6xl)
   - Service highlights grid (1 col → 4 cols)
   - CTA button layout (stacked → horizontal)
   - Padding/spacing adjustments

2. **Services Section** (`ConsultServices.tsx`):
   - Grid layout changes (1 col → 2 cols)
   - Card content reflow
   - Hover states on touch devices
   - Feature list readability

3. **Navigation**:
   - Header responsiveness
   - Mobile menu functionality
   - Footer layout adaptation

## 2. Accessibility Testing

### WCAG 2.1 AA Compliance:

#### Keyboard Navigation:
- [ ] Tab order through all interactive elements
- [ ] Focus indicators visible
- [ ] Skip navigation links work
- [ ] Modal/dialog keyboard handling

#### Screen Reader Support:
- [ ] Headings hierarchy (h1 → h2 → h3)
- [ ] Alt text for images
- [ ] ARIA labels on interactive elements
- [ ] Video content descriptions
- [ ] Link purpose clarity

#### Color & Contrast:
- [ ] Text contrast ratios (4.5:1 minimum)
- [ ] Interactive element contrast
- [ ] Focus indicator contrast
- [ ] Color information not only conveyed by color

#### Other Requirements:
- [ ] Form labels and error handling
- [ ] Touch target sizes (44px minimum)
- [ ] Text spacing and readability
- [ ] Motion/animation preferences (prefers-reduced-motion)

## 3. Performance Testing

### Core Web Vitals:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms  
- **CLS** (Cumulative Layout Shift): < 0.1

### Specific Checks:
- [ ] Hero video loading optimization
- [ ] Lazy loading of below-fold sections
- [ ] Image optimization (WebP format)
- [ ] JavaScript bundle size
- [ ] Third-party script impact
- [ ] Network throttling performance

## 4. Cross-Browser Testing

### Browsers to Test:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Compatibility Checks:
- [ ] Video playback compatibility
- [ ] CSS Grid/Flexbox support
- [ ] Custom CSS properties support
- [ ] ES6+ JavaScript features
- [ ] Responsive behavior consistency

## 5. Integration Testing

### Navigation:
- [ ] All internal links work
- [ ] External links open correctly
- [ ] Language switching (en/el)
- [ ] Breadcrumb navigation

### Forms/CTAs:
- [ ] Contact form validation
- [ ] Demo booking functionality
- [ ] Newsletter signup
- [ ] Cookie consent

### Interactive Elements:
- [ ] Smooth scrolling
- [ ] Animation performance
- [ ] Video controls
- [ ] FAQ accordion functionality

## Testing Tools to Use:

1. **Manual Testing**:
   - Browser DevTools (Responsive Design Mode)
   - Accessibility inspector
   - Network throttling
   - Performance profiler

2. **Automated Testing**:
   - Lighthouse CLI
   - axe-core for accessibility
   - CrossBrowserTesting
   - Chrome DevTools Protocol

3. **Screen Reader Testing**:
   - VoiceOver (macOS)
   - NVDA (Windows)
   - ChromeVox extension

## Acceptance Criteria:

✅ Page loads in < 3 seconds on 3G
✅ All sections are responsive across breakpoints
✅ WCAG 2.1 AA accessibility compliance
✅ No console errors in any browser
✅ All interactive elements are keyboard accessible
✅ Video plays smoothly on all tested browsers
✅ Forms validate and submit correctly
✅ No layout shifts during loading
✅ Semantic HTML structure throughout