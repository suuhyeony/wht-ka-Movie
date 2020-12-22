import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import searchMovie from './searchMovie';
import newMovies from './newMovies';
import youtube from './youtube';

const rootReducer = combineReducers({ movies, movie, searchMovie, newMovies, youtube });

export default rootReducer;