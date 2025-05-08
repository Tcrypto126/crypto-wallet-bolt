import React, { useState } from 'react';
import { Menu, X, Bell, Sun, Moon, ChevronDown } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-100 dark:border-gray-800 fixed w-full z-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  W
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white">Wallet</span>
              </div>
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <div className="relative">
              <button className="flex items-center text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Dashboard
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Wallet
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Exchange <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative">
              <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 text-sm font-medium">
                Settings
              </button>
            </div>
          </div>
          
          <div className="flex items-center">
            <button 
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none">
              <Bell className="h-5 w-5" />
            </button>
            <div className="ml-3 relative">
              <div>
                <button className="flex text-sm rounded-full focus:outline-none">
                  <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-200 font-medium">JD</span>
                  </div>
                </button>
              </div>
            </div>
            
            <div className="ml-3 sm:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="pt-2 pb-3 space-y-1">
            <button className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left">
              Dashboard
            </button>
            <button className="block px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left">
              Wallet
            </button>
            <button className="block px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left">
              Exchange
            </button>
            <button className="block px-3 py-2 text-base font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 w-full text-left">
              Settings
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;