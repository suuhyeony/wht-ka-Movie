import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MovieDetail from '../components/MovieDetail';
import { getMovie } from '../modules/movie';

function MovieListContainer() {
    const { data, loading, error } = useSelector(state => state.movie.movie);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovie());
    }, [dispatch]);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    // return <div></div>
    return <MovieDetail movie={} />
}

export default MovieListContainer;