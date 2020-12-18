import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HotMovie from '../components/HotMovie';
import { getMovies } from '../modules/movies';

function MovieListContainer() {
    const { data, loading, error } = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    // return <div></div>
    return <HotMovie movies={data} />    
}

export default MovieListContainer;