import React, { useState } from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Wallet, Send, Download, Copy, QrCode, Eye, EyeOff } from 'lucide-react';
import { mockWalletBalances, mockTransactions } from '../data/mockData';

const WalletPage: React.FC = () => {
  const [showBalance, setShowBalance] = useState(true);
  const [showAddress, setShowAddress] = useState(false);
  const walletAddress = '0x1234...5678';
  const totalBalance = mockWalletBalances.reduce((sum, asset) => sum + asset.value, 0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, you'd show a toast notification here
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">My Wallet</h1>
        <p className="text-gray-500 dark:text-gray-400">Manage your crypto assets</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wallet className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Balance</h2>
            </div>
            <button
              onClick={() => setShowBalance(!showBalance)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              {showBalance ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
                {showBalance ? `$${totalBalance.toLocaleString()}` : '••••••'}
              </h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="primary">
                <Send className="w-4 h-4 mr-2" />
                Send
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Receive
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Wallet Address</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Your Address</span>
                  <button
                    onClick={() => setShowAddress(!showAddress)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {showAddress ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <code className="text-sm">
                    {showAddress ? walletAddress : '••••••••••••'}
                  </code>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => copyToClipboard(walletAddress)}
                      className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded"
                    >
                      <Copy className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded">
                      <QrCode className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Assets</h2>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {mockWalletBalances.map((asset) => (
              <div key={asset.symbol} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                <div className="flex items-center">
                  <img src={asset.image} alt={asset.cryptocurrency} className="w-8 h-8 mr-3" />
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{asset.cryptocurrency}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {showBalance ? `${asset.balance} ${asset.symbol}` : '••••••'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {showBalance ? `$${asset.value.toLocaleString()}` : '••••••'}
                  </p>
                  <p className={`text-sm ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h2>
          <Button variant="outline" size="sm">View All</Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {mockTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                    transaction.type === 'receive' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                  }`}>
                    {transaction.type === 'receive' ? <Download className="w-5 h-5" /> : <Send className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {transaction.type === 'receive' ? 'Received' : 'Sent'} {transaction.cryptocurrency}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(transaction.date)}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900 dark:text-white">
                    {showBalance ? (
                      <span>
                        {transaction.type === 'receive' ? '+' : '-'} {transaction.amount} {transaction.cryptocurrency}
                      </span>
                    ) : '••••••'}
                  </p>
                  <div className="mt-1">
                    <Badge 
                      variant={
                        transaction.status === 'completed' ? 'success' : 
                        transaction.status === 'pending' ? 'warning' : 'danger'
                      } 
                      size="sm"
                    >
                      {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WalletPage;