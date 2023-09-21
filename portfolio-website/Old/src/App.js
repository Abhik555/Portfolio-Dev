import React from 'react';
import {Router , Route , Routes} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <div>
        <Routes>
          <Route path='/' exact>
            <Home />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
