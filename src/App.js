import React from 'react';
import { Route } from 'react-router-dom';
import More from './routes/More';
import MovieList from './routes/MovieList';
import About from './routes/About';
import Home from './routes/Home';
import SearchBar from './components/SearchBar';
import { createGlobalStyle } from 'styled-components';
import MoreNew from './routes/MoreNew';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #000000;
    padding: 10px;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
          <SearchBar />
          <div>
            <Route path='/' component={Home} exact={true} />
            <Route path='/about' component={About} />
            <Route path='/movie-list' component={MovieList} />
            <Route path='/more' component={More} />
            <Route path='/more-new' component={MoreNew} />
          </div>
      </div>
    </>
  );
}

export default App;
