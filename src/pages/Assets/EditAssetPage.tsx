import { useNavigate, useParams } from "react-router-dom";
import { AssetForm } from "../../features/assets/components/AssetForm";
import { useAssets } from "../../features/assets/hooks/useAssets";
import { useUpdateAsset } from "../../features/assets/hooks/useUpdateAsset";
import type { Asset } from "../../features/assets/types/asset";

export function EditAssetPage() {
  const { id } = useParams();

  if (!id) return <p>ID inválido</p>;

  const navigate = useNavigate();

  const { data: assets, isLoading } = useAssets();
  const { mutate } = useUpdateAsset();

  if (isLoading) return <p>Carregando...</p>;

  const asset = assets?.find((a) => a.id === id);

  if (!asset) return <p>Ativo não encontrado</p>;

  // 🔥 trava o tipo para o TypeScript
  const currentAsset = asset;

  function handleUpdate(data: Omit<Asset, "id">) {
    mutate(
      {
        id: currentAsset.id,
        ...data,
      },
      {
        onSuccess: () => {
          navigate("/assets");
        },
      }
    );
  }

  return (
    <AssetForm
      onSubmit={handleUpdate}
      defaultValues={currentAsset}
    />
  );
}