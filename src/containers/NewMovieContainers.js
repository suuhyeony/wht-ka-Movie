import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewMovie from '../components/NewMovie';
import { getNewMovies } from '../modules/newMovies';

function NewMovieContainer() {
    const { data, loading, error } = useSelector(state => state.newMovies.newMovies);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getNewMovies());
    }, [dispatch]);

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', padding: '50px' }}>로딩중...</div>
    if (error) return <div style={{ color: 'white' }}>에러 발생!</div>
    if (!data) return <div style={{ color: 'white' }}>데이터 불러오는중</div>
    // console.log(data)
    // return <div></div>
    return <NewMovie newMovies={data} />
}

export default NewMovieContainer;