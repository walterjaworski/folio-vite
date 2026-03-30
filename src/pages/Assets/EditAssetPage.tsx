import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AssetForm } from "../../features/assets/components/AssetForm";
import { useAssets } from "../../features/assets/hooks/useAssets";
import { useDeleteAsset } from "../../features/assets/hooks/useDeleteAsset";
import { useUpdateAsset } from "../../features/assets/hooks/useUpdateAsset";
import type { Asset } from "../../features/assets/types/asset";
import { ConfirmDialog } from "../../features/shared/components/ConfirmDialog";

export function EditAssetPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id } = useParams();

  if (!id) return <p>ID inválido</p>;

  const navigate = useNavigate();

  const { data: assets, isLoading } = useAssets();
  const { mutate: update } = useUpdateAsset();
  const { mutate: remove } = useDeleteAsset();

  if (isLoading) return <p>Carregando...</p>;

  const asset = assets?.find((a) => a.id === id);

  if (!asset) return <p>Ativo não encontrado</p>;

  const currentAsset = asset;

  function handleUpdate(data: Omit<Asset, "id">) {
    update(
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

  function handleDelete() {
    remove(currentAsset.id, {
      onSuccess: () => {
        navigate("/assets");
      },
    });
  }

  return (
    <div className="flex flex-col gap-4">
      <AssetForm onSubmit={handleUpdate} defaultValues={currentAsset} />

      <div className="px-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-red-500 text-sm"
        >
          Excluir ativo
        </button>
      </div>

      <ConfirmDialog
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        title="Excluir ativo"
        description="Tem certeza que deseja excluir este ativo? Essa ação não pode ser desfeita."
        confirmText="Excluir"
      />
    </div>
  );
}