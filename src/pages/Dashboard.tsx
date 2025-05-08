import React from 'react';
import BalanceCard from '../components/Dashboard/BalanceCard';
import AssetList from '../components/Dashboard/AssetList';
import TransactionList from '../components/Dashboard/TransactionList';
import MarketTrends from '../components/Dashboard/MarketTrends';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
        <p className="text-gray-500 dark:text-gray-400">Welcome back, John Doe!</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <BalanceCard />
        </div>
        <div className="lg:col-span-2">
          <AssetList />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransactionList />
        <MarketTrends />
      </div>
    </div>
  );
};

export default Dashboard;