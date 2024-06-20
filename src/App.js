import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

import Navigation from './navigation';

const App = () => {
  return (
    <div className="App col-lg-6 col-md-8 mx-auto">
      <header className="App-header">
        <Navigation />
      </header>
      <main className="App-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
