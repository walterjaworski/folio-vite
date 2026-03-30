import { useState } from "react";
import type { Asset } from "../types/asset";

type CreateAssetDTO = Omit<Asset, "id">;

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
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4">
      <input
        placeholder="Ticket (ex: PETR4)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />

      <input
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Preço"
        type="number"
        value={price}
        onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
      />

      <input
        type="number"
        placeholder="Quantidade"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
      />

      <button type="submit">Salvar</button>
    </form>
  )
}