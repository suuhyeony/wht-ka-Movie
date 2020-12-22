import axios from 'axios';

// actions
const GET_NEWMOVIES = 'GET_NEWMOVIES';
const GET_NEWMOVIES_SUCCESS = 'GET_NEWMOVIES_SUCCESS';
const GET_NEWMOVIES_ERROR = 'GET_NEWMOVIES_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

// action creators
export const getNewMovies = () => async dispatch => {
    dispatch({ type: GET_NEWMOVIES });
    try {
        let newMovies = [];
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        today = year + '-' + month + '-' + date;

        for(let PAGE = 1; PAGE < 5; PAGE++) {
            const singlePageMovies = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=${PAGE}`)
            // console.log(singlePageMovies.data.results)
            newMovies = newMovies.concat(singlePageMovies.data.results);
        };
        newMovies = newMovies.filter((movie) => movie.release_date > today);
        console.log(newMovies);
        dispatch({ type: GET_NEWMOVIES_SUCCESS, newMovies });
        // console.log(movies)
    } catch (e) {
        dispatch({ type: GET_NEWMOVIES_ERROR, error: e });
    }
};


// initial state
const initialState = {
    newMovies: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function newMovies(state = initialState, action) {
    switch (action.type) {
        case GET_NEWMOVIES:
            return {
                ...state,
                newMovies: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_NEWMOVIES_SUCCESS:
            return {
                ...state,
                newMovies: {
                    loading: false,
                    data: action.newMovies,
                    error: null
                }
            };
        case GET_NEWMOVIES_ERROR:
            return {
                ...state,
                newMovies: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

