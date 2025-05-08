import React from 'react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import Badge from '../ui/Badge';
import { mockTransactions } from '../../data/mockData';

const TransactionList: React.FC = () => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <Card className="h-full">
      <CardHeader className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Transactions</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          View All
        </button>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-gray-100 dark:divide-gray-700">
          {mockTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                  transaction.type === 'receive' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300' : 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300'
                }`}>
                  <span className="text-lg">
                    {transaction.type === 'receive' ? '↓' : '↑'}
                  </span>
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
                  {transaction.type === 'receive' ? '+' : '-'} {transaction.amount} {transaction.cryptocurrency}
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
  );
};

export default TransactionList;