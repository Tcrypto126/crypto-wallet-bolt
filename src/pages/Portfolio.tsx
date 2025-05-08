import React from 'react';
import Card, { CardContent, CardHeader } from '../components/ui/Card';
import { PieChart, BarChart, ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';
import { mockWalletBalances, mockChartData } from '../data/mockData';

const Portfolio: React.FC = () => {
  const totalValue = mockWalletBalances.reduce((sum, asset) => sum + asset.value, 0);
  const totalProfit = 2648.39; // Mock profit value
  const profitPercentage = 5.4; // Mock percentage

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Portfolio</h1>
        <p className="text-gray-500 dark:text-gray-400">Track your crypto investments</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Value</p>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  ${totalValue.toLocaleString()}
                </h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <PieChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Total Profit/Loss</p>
                <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                  +${totalProfit.toLocaleString()}
                </h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <ArrowUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">24h Change</p>
                <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mt-1">
                  +{profitPercentage}%
                </h2>
              </div>
              <div className="h-12 w-12 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Portfolio Distribution</h2>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockWalletBalances.map((asset) => {
                const percentage = (asset.value / totalValue) * 100;
                return (
                  <div key={asset.symbol} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <img src={asset.image} alt={asset.cryptocurrency} className="w-6 h-6" />
                        <span className="font-medium text-gray-900 dark:text-white">{asset.cryptocurrency}</span>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 dark:bg-blue-500 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Performance History</h2>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] flex items-center justify-center">
              <BarChart className="h-16 w-16 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400 ml-2">Chart visualization would go here</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Portfolio Analytics</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Best Performer</p>
              <div className="flex items-center space-x-2">
                <img src={mockWalletBalances[2].image} alt="Best performer" className="w-6 h-6" />
                <span className="font-medium text-gray-900 dark:text-white">{mockWalletBalances[2].cryptocurrency}</span>
                <span className="text-green-600 dark:text-green-400">+{mockWalletBalances[2].change24h}%</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Worst Performer</p>
              <div className="flex items-center space-x-2">
                <img src={mockWalletBalances[1].image} alt="Worst performer" className="w-6 h-6" />
                <span className="font-medium text-gray-900 dark:text-white">{mockWalletBalances[1].cryptocurrency}</span>
                <span className="text-red-600 dark:text-red-400">{mockWalletBalances[1].change24h}%</span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio Risk Level</p>
              <div className="flex items-center space-x-2">
                <span className="font-medium text-gray-900 dark:text-white">Moderate</span>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400">
                  Medium Risk
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;