import { AssetsList } from "../features/assets/components"

export function AssetsPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Assets</h1>
      <AssetsList />
    </div>
  )
}