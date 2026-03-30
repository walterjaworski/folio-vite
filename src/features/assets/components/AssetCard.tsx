import { useNavigate } from "react-router-dom";
import { getAssetDisplay } from "../formatters/getAssetDisplay";
import type { Asset } from "../types/asset";
import { calculateAssetMetrics } from "../utils/calculateAssetMetrics";

interface IAssetCardProps {
  asset: Asset;
  variant?: 'default' | 'compact';
}

export function AssetCard({ asset }: IAssetCardProps) {
  const navigate = useNavigate();

  const isPositive = (asset.change ?? 0) >= 0;

  const { label, flag } = getAssetDisplay(asset)

  const { profit, isProfit, totalCurrent } = calculateAssetMetrics(asset);

  return (
    <div
      className="bg-white p-4 rounded-xl border grid grid-cols-8 gap-2 items-center"
    >
      <div>
        <div className="flex gap-2">
          <p className="font-semibold">{asset.symbol}</p>
          <span className="bg-neutral-100 text-xs self-start p-1 rounded">
            {flag} {label}
          </span>
        </div>
        <p className="text-xs text-neutral-muted">{asset.name}</p>
      </div>
      <div>
        R$ {asset.price.toFixed(2)}
      </div>
      <div className={isPositive ? 'text-success' : 'text-danger'}>
        {isPositive ? '+' : ''}{asset.change}%
      </div>
      <div>
        R$ {asset.averagePrice.toFixed(2)}
      </div>
      <div className={isProfit ? 'text-success' : 'text-danger'}>
        {isProfit ? '+' : ''} R$ {profit.toFixed(2)}
      </div>
      <div>
        {asset.quantity}
      </div>
      <div className="text-right font-medium">
        R$ {totalCurrent.toFixed(2)}
      </div>
      <div className="text-right">
        <button onClick={() => navigate(`/assets/${asset.id}`)}>Editar</button>
      </div>
    </div>
  )
}