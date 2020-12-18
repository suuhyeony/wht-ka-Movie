import axios from 'axios';

// actions
const GET_VIDEOS = 'GET_VIDEOS';
const GET_VIDEOS_SUCCESS = 'GET_VIDEOS_SUCCESS';
const GET_VIDEOS_ERROR = 'GET_VIDEOS_ERROR';

// const CLEAR_POST = 'CLEAR_POST';

const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

// action creators
export const getVideos = (id) => async dispatch => {
    const MOVIE_ID = id;
    dispatch({ type: GET_VIDEOS });
    try {
        const videos = await axios.get(`https://api.themoviedb.org/3/movie/${MOVIE_ID}/videos?api_key=${API_KEY}&language=en-US`)
        console.log(videos)
        dispatch({ type: GET_VIDEOS_SUCCESS, videos });
    } catch (e) {
        dispatch({ type: GET_VIDEOS_ERROR, error: e });
    }
};


// initial state
const initialState = {
    videos: {
        loading: false,
        data: null,
        error: null
    }
};

// reducer
export default function youtube(state = initialState, action) {
    switch (action.type) {
        case GET_VIDEOS:
            return {
                ...state,
                videos: {
                    loading: true,
                    data: null,
                    error: null
                }
            };
        case GET_VIDEOS_SUCCESS:
            return {
                ...state,
                videos: {
                    loading: false,
                    data: action.videos,
                    error: null
                }
            };
        case GET_VIDEOS_ERROR:
            return {
                ...state,
                videos: {
                    loading: false,
                    data: null,
                    error: action.error
                }
            };
        default:
            return state;
    }
}

