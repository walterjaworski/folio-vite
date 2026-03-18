import { assetsMock } from "../mocks/assets.mock";
import type { Asset } from "../types/asset";

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getAssets(): Promise<Asset[]> {
  await delay(1000); // Simula um atraso de 1 segundo
  return assetsMock;
}

export async function createAsset(newAsset: Asset) {
  await delay(1000);

  const assetWithId = {
    ...newAsset,
    id: crypto.randomUUID()
  };

  assetsMock.push(assetWithId);
  return assetWithId;
}

export async function updateAsset(updatedAsset: Asset) {
  await delay(1000); // Simula um atraso de 1 segundo

  const index = assetsMock.findIndex(asset => asset.id === updatedAsset.id);

  if (index !== -1) {
    assetsMock[index] = updatedAsset;
    return updatedAsset;
  }

  throw new Error("Asset not found");
}

export async function deleteAsset(id: string): Promise<Asset> {
  await delay(1000); // Simula um atraso de 1 segundo

  const index = assetsMock.findIndex(asset => asset.id === id);

  if (index !== -1) {
    const deletedAsset = assetsMock.splice(index, 1)[0];
    return deletedAsset;
  }

  throw new Error("Asset not found");
} 