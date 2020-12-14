import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';
import searchMovie from './searchMovie';

const rootReducer = combineReducers({ movies, movie, searchMovie });

export default rootReducer;