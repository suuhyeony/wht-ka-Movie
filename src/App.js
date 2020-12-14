import React from 'react';
import { Route } from 'react-router-dom';
import MovieList from './routes/MovieList';
import About from './routes/About';
import Home from './routes/Home';

function App() {
  return (
    <div>
        <Route path='/' component={Home} exact={true} />
        <Route path='/about' component={About} />
        <Route path='/movie-list' component={MovieList} />
    </div>
  );
}

export default App;
