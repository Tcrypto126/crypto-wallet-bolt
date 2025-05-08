import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Portfolio from './pages/Portfolio';
import WalletPage from './pages/Wallet';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
    <MainLayout>
      {path === '/settings' ? <Settings /> : 
       path === '/portfolio' ? <Portfolio /> :
       path === '/wallet' ? <WalletPage /> :
       <Dashboard />}
    </MainLayout>
  );
}

export default App;