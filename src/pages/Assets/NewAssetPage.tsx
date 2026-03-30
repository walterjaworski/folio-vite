import { useNavigate } from "react-router-dom";
import { AssetForm } from "../../features/assets/components/AssetForm";
import { useCreateAsset } from "../../features/assets/hooks/useCreateAsset";
import type { Asset } from "../../features/assets/types/asset";

export function NewAssetPage() {
  const { mutate } = useCreateAsset();
  const navigate = useNavigate();

  function handleCreate(asset: Asset) {
    mutate(asset, {
      onSuccess: () => {
        navigate("/assets")
      }
    });
  }

  return (
    <AssetForm onSubmit={handleCreate} />
  )
}