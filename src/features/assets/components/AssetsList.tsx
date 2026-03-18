import { getAssetDisplay } from "../formatters/getAssetDisplay";
import { useAssets } from "../hooks/useAssets";

export function AssetsList() {
  const { data, isLoading, error } = useAssets();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro ao carregar assets</p>;
  }

  return (
    <div>
      {data?.map(asset => {
        const isPositive = asset.change >= 0

        const { label, flag } = getAssetDisplay(asset)

        const totalInvested = asset.quantity * asset.averagePrice;
        const totalCurrent = asset.quantity * asset.price;
        const profit = totalCurrent - totalInvested;
        const isProfit = profit >= 0;

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
      })}
    </div>
  )
}