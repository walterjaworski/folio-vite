import { getAssetDisplay } from "../formatters/getAssetDisplay";
import type { Asset } from "../types/asset";
import { calculateAssetMetrics } from "../utils/calculateAssetMetrics";

interface IAssetCardProps {
  asset: Asset;
}

export function AssetCard({ asset }: IAssetCardProps) {
  const isPositive = asset.change >= 0

  const { label, flag } = getAssetDisplay(asset)

  const { profit, isProfit } = calculateAssetMetrics(asset);

  return (
    <div
      key={asset.id}
      className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center"
    >
      <div>
        <div className="flex items-center gap-2">
          <p className="font-semibold text-neutral-dark">
            {asset.symbol}
          </p>
          <span className="text-xs px-2 py-0.5 bg-gray-100 rounded flex items-center gap-1">
            <span>{flag}</span>
            <span>{label}</span>
          </span>
        </div>

        <p className="text-sm text-neutral-muted">
          {asset.name}
        </p>

        <p className="text-xs text-neutral-muted mt-1">
          {asset.quantity} cotas - PM R$ {asset.averagePrice.toFixed(2)}
        </p>
      </div>

      <div className="text-right">
        <p className="font-semibold text-neutral-dark">
          R$ {asset.price.toFixed(2)}
        </p>

        <p className={`text-sm font-medium ${isPositive ? 'text-success' : 'text-danger'
          }`}>
          {isPositive ? '+' : ''}{asset.change}%
        </p>

        <p className={`text-xs mt-1 ${isProfit ? 'text-success' : 'text-danger'
          }`}>
          {isProfit ? '+' : ''}
          R$ {profit.toFixed(2)}
        </p>
      </div>
    </div>
  )
}