export function AssetsHeader() {
  return (
    <div className="grid grid-cols-8 gap-2 items-center px-4 py-2 text-sm text-neutral-muted">
      <div>Ativo</div>
      <div>Último Preço</div>
      <div>Variação</div>
      <div>Preço Médio</div>
      <div>Rentabilidade</div>
      <div>Quantidade</div>
      <div className="text-right">Posição</div>
      <div></div>
    </div>
  )
}