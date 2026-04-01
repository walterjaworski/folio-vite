import type { Asset } from "@assets/types/asset";

export const assetsMock: Asset[] = [
  { id: "1", symbol: "BBSE3", name: "BB Seguridade", quantity: 100, averagePrice: 30.50, price: 34.20, change: 1.2, exchange: "B3", type: "STOCK" },
  { id: "2", symbol: "KLBN11", name: "Klabin", quantity: 200, averagePrice: 19.80, price: 21.50, change: -0.5, exchange: "B3", type: "STOCK" }, // Unit
  { id: "3", symbol: "BBAS3", name: "Banco do Brasil", quantity: 50, averagePrice: 25.40, price: 28.90, change: 0.8, exchange: "B3", type: "STOCK" },
  { id: "4", symbol: "ITSA4", name: "Itaúsa", quantity: 500, averagePrice: 9.20, price: 10.15, change: 0.3, exchange: "B3", type: "STOCK" },
  { id: "5", symbol: "VALE3", name: "Vale", quantity: 30, averagePrice: 65.00, price: 62.40, change: -2.1, exchange: "B3", type: "STOCK" },
  { id: "6", symbol: "PETR4", name: "Petrobras", quantity: 80, averagePrice: 32.00, price: 36.50, change: 1.5, exchange: "B3", type: "STOCK" },
  { id: "7", symbol: "WEGE3", name: "WEG", quantity: 40, averagePrice: 35.00, price: 38.20, change: 0.9, exchange: "B3", type: "STOCK" },
  { id: "8", symbol: "EGIE3", name: "Engie Brasil", quantity: 25, averagePrice: 40.10, price: 42.00, change: 0.4, exchange: "B3", type: "STOCK" },
  { id: "9", symbol: "HGLG11", name: "CGHG Logística", quantity: 15, averagePrice: 160.00, price: 165.40, change: 0.2, exchange: "B3", type: "FII" },
  { id: "10", symbol: "KNRI11", name: "Kinea Renda", quantity: 20, averagePrice: 155.00, price: 158.00, change: 0.1, exchange: "B3", type: "FII" },
  { id: "11", symbol: "MXRF11", name: "Maxi Renda", quantity: 1000, averagePrice: 10.05, price: 10.60, change: 0.5, exchange: "B3", type: "FII" },
  { id: "12", symbol: "SCHD", name: "Schwab US Dividend Equity", quantity: 10, averagePrice: 72.00, price: 78.50, change: 1.1, exchange: "NYSE", type: "ETF" },
  { id: "13", symbol: "NVDA", name: "NVIDIA Corp", quantity: 5, averagePrice: 450.00, price: 820.00, change: 3.4, exchange: "NASDAQ", type: "STOCK" },
  { id: "14", symbol: "AAPL", name: "Apple Inc", quantity: 8, averagePrice: 170.00, price: 185.00, change: -0.2, exchange: "NASDAQ", type: "STOCK" },
  { id: "15", symbol: "VIVT3", name: "Vivo", quantity: 60, averagePrice: 48.00, price: 51.20, change: 0.6, exchange: "B3", type: "STOCK" },
  { id: "16", symbol: "CPLE6", name: "Copel", quantity: 150, averagePrice: 8.50, price: 10.20, change: 1.8, exchange: "B3", type: "STOCK" },
  { id: "17", symbol: "SANB11", name: "Santander Brasil", quantity: 40, averagePrice: 28.00, price: 29.50, change: 0.7, exchange: "B3", type: "STOCK" }, // Unit
  { id: "18", symbol: "TRPL4", name: "ISA CTEEP", quantity: 100, averagePrice: 24.00, price: 26.30, change: 0.2, exchange: "B3", type: "STOCK" },
  { id: "19", symbol: "ABEV3", name: "Ambev", quantity: 200, averagePrice: 14.50, price: 12.80, change: -1.4, exchange: "B3", type: "STOCK" },
  { id: "20", symbol: "VBIV11", name: "VBI Prime Offices", quantity: 10, averagePrice: 95.00, price: 92.00, change: -0.3, exchange: "B3", type: "FII" },
  { id: "21", symbol: "XPML11", name: "XP Malls", quantity: 12, averagePrice: 110.00, price: 118.00, change: 0.4, exchange: "B3", type: "FII" },
  { id: "22", symbol: "BBDC4", name: "Bradesco", quantity: 120, averagePrice: 15.00, price: 13.90, change: -0.9, exchange: "B3", type: "STOCK" },
  { id: "23", symbol: "TAEE11", name: "Taesa", quantity: 70, averagePrice: 34.00, price: 35.80, change: 0.5, exchange: "B3", type: "STOCK" }, // Unit
  { id: "24", symbol: "FLRY3", name: "Fleury", quantity: 45, averagePrice: 16.20, price: 17.50, change: 0.2, exchange: "B3", type: "STOCK" },
  { id: "25", symbol: "RADL3", name: "RaiaDrogasil", quantity: 35, averagePrice: 25.00, price: 28.10, change: 1.1, exchange: "B3", type: "STOCK" },
  { id: "26", symbol: "KO", name: "Coca-Cola Co", quantity: 15, averagePrice: 58.00, price: 61.20, change: 0.3, exchange: "NYSE", type: "STOCK" },
  { id: "27", symbol: "MSFT", name: "Microsoft Corp", quantity: 4, averagePrice: 380.00, price: 415.00, change: 1.2, exchange: "NASDAQ", type: "STOCK" },
  { id: "28", symbol: "O", name: "Realty Income", quantity: 20, averagePrice: 52.00, price: 54.50, change: 0.5, exchange: "NYSE", type: "REIT" }, // Mercado Americano
  { id: "29", symbol: "IVV", name: "iShares Core S&P 500", quantity: 2, averagePrice: 480.00, price: 510.00, change: 0.8, exchange: "NYSE", type: "ETF" },
  { id: "30", symbol: "WIZC3", name: "Wiz Co", quantity: 300, averagePrice: 5.80, price: 6.10, change: 2.5, exchange: "B3", type: "STOCK" }
];
