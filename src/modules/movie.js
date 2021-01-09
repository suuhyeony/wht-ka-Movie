
// actions
const GET_MOVIE = 'GET_MOVIE';
const GET_MOVIE_SUCCESS = 'GET_MOVIE_SUCCESS';
const GET_MOVIE_ERROR = 'GET_MOVIE_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

// action creators
export const getMovie = (movie) => async dispatch => {
    dispatch({ type: GET_MOVIE })
    try {
        dispatch({ type: GET_MOVIE_SUCCESS, movie });
        // console.log(movie);

    } catch (e) {
        dispatch({ type: GET_MOVIE_ERROR, error: e });
    }
};

// initial state
const initialState = {
    movie: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function movie(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIE:
            return {
                ...state,
                movie: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_MOVIE_SUCCESS:
            return {
                ...state,
                movie: {
                    loading: false,
                    data: action.movie,
                    error: null
                }
            };
        case GET_MOVIE_ERROR:
            return {
                ...state,
                movie: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

