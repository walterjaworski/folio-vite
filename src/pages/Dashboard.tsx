import { AssetsList } from "../features/assets/components"

export function DashboardPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <h2 className="text-lg mb-2">Seus ativos</h2>
      <AssetsList />
    </div>
  )
}