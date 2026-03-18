export type Asset = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  quantity: number;
  averagePrice: number;
}

export type AssetMarketData = {
  symbol: string;
  price: number;
}