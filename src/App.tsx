import React from 'react';
import MainLayout from './components/Layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Portfolio from './pages/Portfolio';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  return (
    <MainLayout>
      {path === '/settings' ? <Settings /> : 
       path === '/portfolio' ? <Portfolio /> : 
       <Dashboard />}
    </MainLayout>
  );
}

export default App;