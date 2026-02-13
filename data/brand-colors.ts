import type { ColorToken } from "@/lib/branding-utils"

export interface ColorCategory {
  title: string
  description: string
  tokens: ColorToken[]
  tokenDescriptions: Partial<Record<ColorToken, string>>
}

export const COLOR_CATEGORIES: {
  brand: ColorCategory
  neutrals: ColorCategory
  semantic: ColorCategory
  charts: ColorCategory
  ui: ColorCategory
  sidebar: ColorCategory
} = {
  brand: {
    title: "Brand Colors",
    description: "Primary colors for brand expression, CTAs, and key interactions.",
    tokens: ["--primary", "--secondary", "--accent"],
    tokenDescriptions: {
      "--primary": "CTAs, links, key interactions",
      "--secondary": "Secondary actions and highlights",
      "--accent": "Accents, glows, and selection states",
    },
  },
  neutrals: {
    title: "Neutral Colors",
    description: "Structural colors for backgrounds, text, cards, and layout.",
    tokens: [
      "--background",
      "--foreground",
      "--card",
      "--card-foreground",
      "--popover",
      "--popover-foreground",
      "--muted",
      "--muted-foreground",
    ],
    tokenDescriptions: {
      "--background": "Page background color",
      "--foreground": "Primary text color",
      "--card": "Elevated surface background",
      "--card-foreground": "Text on card backgrounds",
      "--popover": "Popover/dropdown background",
      "--popover-foreground": "Text on popover backgrounds",
      "--muted": "Subtle background regions",
      "--muted-foreground": "Secondary text color",
    },
  },
  semantic: {
    title: "Semantic Colors",
    description: "Functional colors for text contrast, state indication, and feedback.",
    tokens: [
      "--primary-foreground",
      "--secondary-foreground",
      "--accent-foreground",
      "--destructive",
      "--destructive-foreground",
    ],
    tokenDescriptions: {
      "--primary-foreground": "Text on primary backgrounds",
      "--secondary-foreground": "Text on secondary backgrounds",
      "--accent-foreground": "Text on accent backgrounds",
      "--destructive": "Errors, warnings, dangerous actions",
      "--destructive-foreground": "Text on destructive backgrounds",
    },
  },
  charts: {
    title: "Data Visualization",
    description: "Chart and graph colors for data-heavy interfaces and visualizations.",
    tokens: ["--chart-1", "--chart-2", "--chart-3", "--chart-4", "--chart-5"],
    tokenDescriptions: {
      "--chart-1": "Primary chart color (teal)",
      "--chart-2": "Secondary chart color (strawberry red)",
      "--chart-3": "Tertiary chart color (green)",
      "--chart-4": "Quaternary chart color (yellow)",
      "--chart-5": "Quinary chart color (blue-purple)",
    },
  },
  ui: {
    title: "UI Elements",
    description: "Colors for borders, inputs, focus rings, and interactive elements.",
    tokens: ["--border", "--input", "--ring"],
    tokenDescriptions: {
      "--border": "Borders and dividers",
      "--input": "Input field backgrounds",
      "--ring": "Focus ring color",
    },
  },
  sidebar: {
    title: "Sidebar Colors",
    description: "Theme-specific colors for sidebar navigation components.",
    tokens: [
      "--sidebar",
      "--sidebar-foreground",
      "--sidebar-primary",
      "--sidebar-primary-foreground",
      "--sidebar-accent",
      "--sidebar-accent-foreground",
      "--sidebar-border",
      "--sidebar-ring",
    ],
    tokenDescriptions: {
      "--sidebar": "Sidebar background",
      "--sidebar-foreground": "Text in sidebar",
      "--sidebar-primary": "Primary actions in sidebar",
      "--sidebar-primary-foreground": "Text on sidebar primary",
      "--sidebar-accent": "Accent highlights in sidebar",
      "--sidebar-accent-foreground": "Text on sidebar accents",
      "--sidebar-border": "Sidebar borders",
      "--sidebar-ring": "Focus ring in sidebar",
    },
  },
}
