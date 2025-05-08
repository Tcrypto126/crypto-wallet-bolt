import { Cryptocurrency, Transaction, WalletBalance } from '../types';

export const mockCryptocurrencies: Cryptocurrency[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 61352.48,
    change24h: 2.35,
    marketCap: 1203456789012,
    volume24h: 28765432109,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3245.67,
    change24h: -1.24,
    marketCap: 389765432109,
    volume24h: 17865432109,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 142.89,
    change24h: 5.67,
    marketCap: 67543210987,
    volume24h: 5678901234,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.48,
    change24h: 0.89,
    marketCap: 17123456789,
    volume24h: 987654321,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
  },
  {
    id: 'binancecoin',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 579.36,
    change24h: 3.21,
    marketCap: 87654321098,
    volume24h: 4321098765,
    image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png'
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.53,
    change24h: -0.76,
    marketCap: 28976543210,
    volume24h: 1234567890,
    image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png'
  }
];

export const mockTransactions: Transaction[] = [
  {
    id: '1',
    type: 'receive',
    amount: 0.025,
    cryptocurrency: 'BTC',
    date: '2025-04-02T14:32:21Z',
    status: 'completed',
    address: '0x3a2b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b'
  },
  {
    id: '2',
    type: 'send',
    amount: 1.25,
    cryptocurrency: 'ETH',
    date: '2025-04-01T09:15:47Z',
    status: 'completed',
    address: '0x7f8e9d0c1b2a3f4e5d6c7b8a9f0e1d2c3b4a5e6f'
  },
  {
    id: '3',
    type: 'receive',
    amount: 32.5,
    cryptocurrency: 'SOL',
    date: '2025-03-30T18:45:11Z',
    status: 'completed',
    address: '0x2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e'
  },
  {
    id: '4',
    type: 'send',
    amount: 0.015,
    cryptocurrency: 'BTC',
    date: '2025-03-29T11:23:59Z',
    status: 'pending',
    address: '0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b'
  },
  {
    id: '5',
    type: 'receive',
    amount: 450,
    cryptocurrency: 'ADA',
    date: '2025-03-27T15:37:42Z',
    status: 'completed',
    address: '0x4f5e6d7c8b9a0f1e2d3c4b5a6e7f8d9c0b1a2e3d'
  }
];

export const mockWalletBalances: WalletBalance[] = [
  {
    cryptocurrency: 'Bitcoin',
    symbol: 'BTC',
    balance: 0.3568,
    value: 21890.56,
    change24h: 2.35,
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png'
  },
  {
    cryptocurrency: 'Ethereum',
    symbol: 'ETH',
    balance: 5.234,
    value: 16987.74,
    change24h: -1.24,
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  {
    cryptocurrency: 'Solana',
    symbol: 'SOL',
    balance: 78.45,
    value: 11209.72,
    change24h: 5.67,
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png'
  },
  {
    cryptocurrency: 'Cardano',
    symbol: 'ADA',
    balance: 3250.78,
    value: 1560.37,
    change24h: 0.89,
    image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png'
  }
];

export const mockChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Portfolio Value (USD)',
      data: [43000, 45200, 40800, 52000, 49500, 51648],
      fill: true
    }
  ]
};