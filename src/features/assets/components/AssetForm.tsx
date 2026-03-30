import { useState } from "react";
import type { Asset } from "../types/asset";

export type CreateAssetDTO = Omit<Asset, "id">;

interface IAssetFormProps {
  onSubmit: (data: CreateAssetDTO) => void;
  defaultValues?: Partial<Asset>;
}

export function AssetForm({ onSubmit, defaultValues }: IAssetFormProps) {
  const [symbol, setSymbol] = useState(defaultValues?.symbol || '');
  const [name, setName] = useState(defaultValues?.name || '');
  const [price, setPrice] = useState(defaultValues?.price || 0);
  const [quantity, setQuantity] = useState(defaultValues?.quantity || 0);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    onSubmit({
      symbol,
      name,
      price,
      quantity,
      averagePrice: price,
      change: 0,
    });
  }

  return (
    <div className="flex justify-center items-start py-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-white border rounded-2xl p-6 shadow-sm flex flex-col gap-6"
      >
        {/* Header */}
        <div>
          <h1 className="text-xl font-semibold">Adicionar ativo</h1>
          <p className="text-sm text-neutral-muted">
            Insira as informações do ativo na sua carteira
          </p>
        </div>

        {/* Ticker */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Ticker</label>
          <input
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Ex: PETR4"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>

        {/* Nome */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Nome</label>
          <input
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
            placeholder="Ex: Petrobras"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Preço médio</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
              value={price}
              onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Quantidade</label>
            <input
              type="number"
              className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/20"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="mt-2 bg-black text-white rounded-lg py-2 font-medium hover:opacity-90 transition"
        >
          Salvar ativo
        </button>
      </form>
    </div>
  );
}