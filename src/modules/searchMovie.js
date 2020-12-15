import axios from 'axios';
// import { value } from '../components/SearchBar';

// actions
const SEARCH_MOVIES = 'SEARCH_MOVIES';
const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
const SEARCH_MOVIES_ERROR = 'SEARCH_MOVIES_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY

// action creators
export const SearchMovies = (value) => async dispatch => {
    dispatch({ type: SEARCH_MOVIES });
    try {
        const response_list = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=ko-KR&query=${value}&page=1&include_adult=false`)
        // console.log(response_list)
        dispatch({ type: SEARCH_MOVIES_SUCCESS, response_list });
    } catch (e) {
        dispatch({ type: SEARCH_MOVIES_ERROR, error: e });
    }
};


// initial state
const initialState = {
    response_list: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function searchMovie(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIES:
            return {
                ...state,
                response_list: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case SEARCH_MOVIES_SUCCESS:
            return {
                ...state,
                response_list: {
                    loading: false,
                    data: action.response_list.data.results,
                    error: null
                }
            };
        case SEARCH_MOVIES_ERROR:
            return {
                ...state,
                response_list: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

