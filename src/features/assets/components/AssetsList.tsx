import { useAssets } from "../hooks/useAssets";
import { AssetCard } from "./AssetCard";

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
      {data?.map(asset => (
        <AssetCard asset={asset} key={asset.id} />
      ))}
    </div>
  )
}