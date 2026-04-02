import { useAssets } from "@assets/hooks/useAssets";
import AssetCard from "./AssetCard";
import AssetsListHeader from "./AssetsListHeader";

export default function AssetsList() {
  const { data, isLoading, error } = useAssets();

  return (
    <div>
      <AssetsListHeader />

      {isLoading && <p className="p-4">Carregando...</p>}

      {error && <p className="p-4 text-danger">Erro ao carregar assets</p>}

      {!isLoading && !error && data?.length === 0 && (
        <p className="p-4">Nenhum ativo encontrado</p>
      )}

      <div className="flex flex-col gap-3">
        {!isLoading && !error && data?.map(asset => (
          <AssetCard asset={asset} key={asset.id} />
        ))}
      </div>
    </div>
  )
}
