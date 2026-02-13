"use client"

import { useState, useMemo } from "react"
import { useTranslations } from "next-intl"
import { cn } from "@/lib/utils"

interface CompatibilityTableProps {
  manufacturers: readonly string[]
}

export function CompatibilityTable({ manufacturers }: CompatibilityTableProps) {
  const t = useTranslations("compatibilityLists")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredManufacturers = useMemo(() => {
    if (!searchQuery) return manufacturers
    return manufacturers.filter((m) =>
      m.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }, [manufacturers, searchQuery])

  return (
    <div className="space-y-6">
      {/* Search Input */}
      <div className="max-w-md mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="w-full px-4 py-3 rounded-lg border border-border/30 bg-card/60 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Results Count */}
      <p className="text-center text-sm text-muted-foreground">
        {t("showingResults", {
          count: filteredManufacturers.length,
          total: manufacturers.length,
        })}
      </p>

      {/* Table */}
      {filteredManufacturers.length > 0 ? (
        <div className="rounded-xl border border-border/30 bg-card/60 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-px bg-border/30">
            {filteredManufacturers.map((manufacturer, index) => (
              <div
                key={manufacturer}
                className={cn(
                  "p-4 md:p-6 text-center hover:bg-accent/50 transition-colors",
                  index % 2 === 0 && "bg-muted/20"
                )}
              >
                <span className="text-sm md:text-base text-foreground">
                  {manufacturer}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">{t("noResults")}</p>
        </div>
      )}
    </div>
  )
}
