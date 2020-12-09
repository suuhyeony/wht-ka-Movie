import { combineReducers } from 'redux';
import movies from './movies';
import movie from './movie';

const rootReducer = combineReducers({ movies, movie });

export default rootReducer;