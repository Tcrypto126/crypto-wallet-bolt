import React from 'react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';

const BalanceCard: React.FC = () => {
  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Total Balance</h2>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Available Balance</p>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">$51,648.39</h1>
          <p className="text-sm mb-6">
            <span className="text-green-500 font-medium">+2.3%</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">in the last 24h</span>
          </p>
          
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button variant="primary" fullWidth>
              Deposit
            </Button>
            <Button variant="outline" fullWidth>
              Withdraw
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;