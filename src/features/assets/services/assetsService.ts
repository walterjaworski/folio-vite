import type { CreateAssetDTO } from "@assets/components/AssetForm";
import { assetsMock } from "@assets/mocks/assets.mock";
import type { Asset } from "@assets/types/asset";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getAssets(): Promise<Asset[]> {
  await delay(1000);
  return assetsMock;
}

// ✅ CREATE agora recebe DTO (sem id)
export async function createAsset(newAsset: CreateAssetDTO): Promise<Asset> {
  await delay(1000);

  const assetWithId: Asset = {
    ...newAsset,
    id: crypto.randomUUID(),
  };

  assetsMock.push(assetWithId);
  return assetWithId;
}

// ✅ UPDATE continua recebendo Asset completo
export async function updateAsset(updatedAsset: Asset): Promise<Asset> {
  await delay(1000);

  const index = assetsMock.findIndex(asset => asset.id === updatedAsset.id);

  if (index !== -1) {
    assetsMock[index] = {
      ...assetsMock[index],
      ...updatedAsset,
    };

    return assetsMock[index]; // 🔥 melhor retornar o atualizado real
  }

  throw new Error("Asset not found");
}

// ✅ DELETE sem mudanças relevantes
export async function deleteAsset(id: string): Promise<Asset> {
  await delay(1000);

  const index = assetsMock.findIndex(asset => asset.id === id);

  if (index !== -1) {
    const deletedAsset = assetsMock.splice(index, 1)[0];
    return deletedAsset;
  }

  throw new Error("Asset not found");
}
