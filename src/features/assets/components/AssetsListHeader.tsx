import { useNavigate } from "react-router-dom";

export default function AssetsListHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="grid grid-cols-5 flex-1 text-sm text-neutral-muted text-right">
        <div className="text-left">Ativo</div>
        <div>Quantidade</div>
        <div>Preço atual</div>
        <div>Valor total</div>
        <div>Performance</div>
      </div>
    </div>
  );
}
