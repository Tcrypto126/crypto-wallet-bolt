import React from 'react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import { mockCryptocurrencies } from '../../data/mockData';

const MarketTrends: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Market Trends</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          View All
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100 dark:divide-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 dark:text-gray-400">Name</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">Price</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">24h %</th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-gray-500 dark:text-gray-400">Market Cap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {mockCryptocurrencies.map((crypto) => (
                <tr key={crypto.id} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
                  <td className="px-4 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img src={crypto.image} alt={crypto.name} className="w-6 h-6 mr-2" />
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white">{crypto.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{crypto.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    ${crypto.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className={`px-4 py-4 text-right whitespace-nowrap font-medium ${crypto.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {crypto.change24h >= 0 ? '+' : ''}{crypto.change24h}%
                  </td>
                  <td className="px-4 py-4 text-right whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    ${(crypto.marketCap / 1000000000).toFixed(2)}B
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MarketTrends;