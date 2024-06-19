import React from 'react';
import { Outlet } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        {/* navigation here */}
      </header>
      <main className="App-content">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
