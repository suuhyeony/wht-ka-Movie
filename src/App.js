import React from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/Home';

function App() {
  return (
    <Route path='/' component={Home} exact={true} />
  );
}

export default App;
