import { useAssets } from "../hooks/useAssets";

export function AssetsList() {
  const { data, isLoading, error } = useAssets();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Erro ao carregar assets</p>;
  }

  return (
    <div>
      <h2>Assets</h2>

      {data?.map(asset => (
        <div key={asset.id}>
          <h3>{asset.name}</h3>
        </div>
      ))}
    </div>
  )
}