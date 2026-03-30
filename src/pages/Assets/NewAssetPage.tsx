import { useNavigate } from "react-router-dom";
import { AssetForm, type CreateAssetDTO } from "../../features/assets/components/AssetForm";
import { useCreateAsset } from "../../features/assets/hooks/useCreateAsset";

export function NewAssetPage() {
  const { mutate } = useCreateAsset();
  const navigate = useNavigate();

  function handleCreate(asset: CreateAssetDTO) {
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