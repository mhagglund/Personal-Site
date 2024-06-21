import React from 'react';
import { Outlet } from 'react-router-dom';

import Navigation from './navigation';

const App = () => {
  return (
    <div className="App col-xl-6 col-lg-7 col-md-9 mx-auto">
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
