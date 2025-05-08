export interface Cryptocurrency {
  id: string;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  image: string;
}

export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  cryptocurrency: string;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  address: string;
}

export interface Wallet {
  id: string;
  name: string;
  address: string;
  balance: number;
  cryptocurrency: string;
}

export interface WalletBalance {
  cryptocurrency: string;
  symbol: string;
  balance: number;
  value: number;
  change24h: number;
  image: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  isAuthenticated: boolean;
}