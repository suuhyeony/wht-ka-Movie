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

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', padding: '50px' }}>로딩중...</div>
    if (error) return <div style={{ color: 'white' }}>에러 발생!</div>
    if (!data) return <div style={{ color: 'white' }}>데이터 불러오는중</div>
    // console.log(data)
    // return <div></div>
    return <HotMovie movies={data} />    
}

export default MovieListContainer;