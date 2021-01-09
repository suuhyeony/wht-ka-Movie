import axios from 'axios';

// actions
const GET_GENRE = 'GET_GENRE';
const GET_GENRE_SUCCESS = 'GET_GENRE_SUCCESS';
const GET_GENRE_ERROR = 'GET_GENRE_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

// action creators
export const getGenre = (id) => async dispatch => {
    const MOVIE_ID = id;
    dispatch({ type: GET_GENRE });
    try {
        const genre = await axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}?api_key=${API_KEY}&language=ko-KR`);
        console.log(genre);
        dispatch({ type: GET_GENRE_SUCCESS, genre });
    } catch (e) {
        dispatch({ type: GET_GENRE_ERROR, error: e });
    }
};


// initial state
const initialState = {
    genre: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function genre(state = initialState, action) {
    switch (action.type) {
        case GET_GENRE:
            return {
                ...state,
                genre: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_GENRE_SUCCESS:
            return {
                ...state,
                genre: {
                    loading: false,
                    data: action.genre,
                    error: null
                }
            };
        case GET_GENRE_ERROR:
            return {
                ...state,
                genre: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

