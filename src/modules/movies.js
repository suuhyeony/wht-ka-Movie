import axios from 'axios';

// actions
const GET_MOVIES = 'GET_MOVIES';
const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
const GET_MOVIES_ERROR = 'GET_MOVIES_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = '409d8d6f8128764e980980164deb92d2'

// action creators
export const getMovies = () => async dispatch => {
    dispatch({ type: GET_MOVIES });
    try {
        let movies = []
        for(let PAGE = 1; PAGE < 3; PAGE++) {
            const singlePageMovies = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${PAGE}`)
            // console.log(singlePageMovies.data.results)
            movies = movies.concat(singlePageMovies.data.results)
        }
        // console.log(movies)
        dispatch({ type: GET_MOVIES_SUCCESS, movies });
        // console.log(movies)
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

