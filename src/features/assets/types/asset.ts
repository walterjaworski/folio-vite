export type AssetType = 'STOCK' | 'FII' | 'ETF' | 'REIT';

export type Asset = {
  id: string;
  symbol: string;
  name: string;
  price: number;
  quantity: number;
  averagePrice: number;
  change: number;
  exchange?: 'B3' | 'NYSE' | 'NASDAQ';
  type?: AssetType;
}

export type AssetMarketData = {
  symbol: string;
  price: number;
}
