import type { Asset } from "@assets/types/asset";

const assetLabels = {
  BR: {
    STOCK: "Ação",
    FII: "FII",
    ETF: "ETF",
    REIT: "REIT",
  },
  US: {
    STOCK: "Stock",
    FII: "FII",
    ETF: "ETF",
    REIT: "REIT",
  },
} as const

export function getAssetDisplay(asset: Asset) {
  const isBR = asset.exchange === "B3"

  const type = asset.type ?? "STOCK";
  const locale = isBR ? "BR" : "US"
  const flag = isBR ? "🇧🇷" : "🇺🇸"

  return {
    label: assetLabels[locale][type],
    flag,
  }
}
