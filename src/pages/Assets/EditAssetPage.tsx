import { Button } from "@/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useNavigate, useParams } from "react-router-dom";
import { AssetForm } from "../../features/assets/components/AssetForm";
import { useAssets } from "../../features/assets/hooks/useAssets";
import { useDeleteAsset } from "../../features/assets/hooks/useDeleteAsset";
import { useUpdateAsset } from "../../features/assets/hooks/useUpdateAsset";
import type { Asset } from "../../features/assets/types/asset";

export function EditAssetPage() {
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

      <Dialog>
        <DialogTrigger asChild>
          <button className="text-red-500 text-sm">
            Excluir ativo
          </button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Excluir ativo</DialogTitle>
            <DialogDescription>
              Tem certeza que deseja excluir este ativo? Essa ação não pode ser desfeita.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="ghost">Cancelar</Button>
            </DialogClose>

            <Button
              variant="destructive"
              onClick={handleDelete}
            >
              Excluir
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}