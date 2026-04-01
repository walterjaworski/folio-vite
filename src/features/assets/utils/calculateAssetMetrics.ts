import type { Asset } from "@assets/types/asset";

export function calculateAssetMetrics(asset: Asset) {
  const totalInvested = asset.quantity * asset.averagePrice;
  const totalCurrent = asset.quantity * asset.price;
  const profit = totalCurrent - totalInvested;
  const profitability = totalInvested > 0 ? (profit / totalInvested) * 100 : 0;

  return {
    totalInvested,
    totalCurrent,
    profit,
    profitability,
    isProfit: profit >= 0
  };
}
