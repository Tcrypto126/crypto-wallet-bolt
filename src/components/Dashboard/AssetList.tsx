import React from 'react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import { mockWalletBalances } from '../../data/mockData';

const AssetList: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Your Assets</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          View All
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {mockWalletBalances.map((asset) => (
            <div key={asset.symbol} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <img src={asset.image} alt={asset.cryptocurrency} className="w-8 h-8 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">{asset.cryptocurrency}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{asset.balance} {asset.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium text-gray-900 dark:text-white">${asset.value.toLocaleString()}</p>
                <p className={`text-sm ${asset.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {asset.change24h >= 0 ? '+' : ''}{asset.change24h}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssetList;