import { AssetForm } from "@assets/components";
import { useCreateAsset } from "@assets/hooks/useCreateAsset";
import { useNavigate } from "react-router-dom";

import type { CreateAssetDTO } from "@assets/components/AssetForm";

export default function NewAssetPage() {
  const { mutate } = useCreateAsset();
  const navigate = useNavigate();

  function handleCreate(data: CreateAssetDTO) {
    mutate(data, {
      onSuccess: () => {
        navigate("/assets");
      }
    });
  }

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Novo Ativo</h1>
      <AssetForm onSubmit={handleCreate} />
    </main>
  );
}
