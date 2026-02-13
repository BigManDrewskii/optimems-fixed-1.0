# Changelog

## 2026-01-26 - Codebase Cleanup

### Removed
- Deleted session and transcript files (optimems-jan21-session-01.txt, session-ses_41f7.md, etc.)
- Removed temporary slack message drafts
- Removed duplicate logo files from root directory
- Archived unused components (CoreValue, MarketAdaptability, Warranty, etc.)
- Removed branding/ page (development-only)
- Removed system files (.DS_Store, tsconfig.tsbuildinfo, pnpm-lock.yaml)
- Cleaned build artifacts (.next/ directory)

### Reorganized
- Moved documentation to structured docs/ folder
  - `docs/development/components.md` - Component development guide
  - `docs/guides/localization.md` - Greek localization requirements
  - `docs/guides/media.md` - Video and image optimization
  - `docs/reference/copy-brief.md` - Website copy specifications

### Archived
- Components moved to `components/_archive/`:
  - sections: CoreValue, MarketAdaptability, Warranty
  - shared: NumberedCard, ThemeVignette, AnimatedGrid
  - Card: NumberedCard (duplicate)

### Fixed
- Updated .gitignore to prevent future accumulation of temp files

### Space Savings
- Approximately 425MB recovered
