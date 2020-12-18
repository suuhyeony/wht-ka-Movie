import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import searchMovie from './searchMovie';
import youtube from './youtube';

const rootReducer = combineReducers({ movies, movie, searchMovie, youtube });

export default rootReducer;