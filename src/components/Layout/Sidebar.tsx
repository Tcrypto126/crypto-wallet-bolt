import React from 'react';
import { Home, Wallet, BarChart4, PieChart, Settings, Users, HelpCircle, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  const currentPath = window.location.pathname;

  const links = [
    { name: 'Dashboard', icon: Home, path: '/', active: currentPath === '/' },
    { name: 'My Wallet', icon: Wallet, path: '/wallet', active: currentPath === '/wallet' },
    { name: 'Markets', icon: BarChart4, path: '/markets', active: currentPath === '/markets' },
    { name: 'Portfolio', icon: PieChart, path: '/portfolio', active: currentPath === '/portfolio' },
    { name: 'Referrals', icon: Users, path: '/referrals', active: currentPath === '/referrals' },
    { name: 'Settings', icon: Settings, path: '/settings', active: currentPath === '/settings' },
  ];

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="hidden h-screen lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800">
      <div className="h-16 flex items-center justify-center border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            W
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white">Wallet</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col overflow-y-auto pt-5 pb-4">
        <nav className="mt-2 flex-1 px-4 space-y-1">
          {links.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                link.active 
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <link.icon
                className={`mr-3 h-5 w-5 ${
                  link.active 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-gray-400'
                }`}
              />
              {link.name}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-100 dark:border-gray-800 space-y-2">
        <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
          <HelpCircle className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          Help & Support
        </button>
        <button className="w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800">
          <LogOut className="mr-3 h-5 w-5 text-gray-500 dark:text-gray-400" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;