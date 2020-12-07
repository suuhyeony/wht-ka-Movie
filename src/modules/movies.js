import axios from 'axios';

// actions
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

// const GET_MOVIE = 'GET_MOVIE';
// const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
// const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = '409d8d6f8128764e980980164deb92d2'
// action creators
export const getMovies = () => async dispatch => {
    dispatch({ type: GET_MOVIES });
    try {
        const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR`)
        dispatch({ type: GET_MOVIES_SUCCESS, movies });
        console.log(movies)
    } catch (e) {
        dispatch({ type: GET_MOVIES_ERROR, error: e });
    }
};

// initial state
const initialState = {
    movies: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function movies(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {
                ...state,
                movies: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: {
                    loading: false,
                    data: action.movies,
                    error: null
                }
            };
        case GET_MOVIES_ERROR:
            return {
                ...state,
                movies: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

