import { useNavigate } from "react-router-dom";

export function AssetsListHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="grid grid-cols-8 flex-1 text-sm text-neutral-muted">
        <div>Ativo</div>
        <div>Último Preço</div>
        <div>Variação</div>
        <div>Preço Médio</div>
        <div>Rentabilidade</div>
        <div>Quantidade</div>
        <div className="text-right">Posição</div>
        <div></div>
      </div>

      <button
        onClick={() => navigate("/assets/new")}
        className="ml-4 px-3 py-1 rounded bg-black text-white text-sm"
      >
        + Adicionar
      </button>
    </div>
  );
}