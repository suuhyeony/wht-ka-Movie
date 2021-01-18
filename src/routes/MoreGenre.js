import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from '../modules/movies';
import { getMovie } from '../modules/movie';
import styled from 'styled-components';


const Img = styled.img`
    width: 150px;
    margin-bottom: 10px;
    transition: transform 100ms ease-in;
    &:hover {
        transform: scale(1.07);
    }
`;

const List = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    margin-top: 40px;
    row-gap: 40px;
`;

function MoreGenre() {
    const { data, loading, error } = useSelector(state => state.movies.movies);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    const getMovieDetail = (movie) => {
        dispatch(getMovie(movie))
    }

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // if (data.length === 0) return <div style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>검색 결과가 없습니다.</div>
    // console.log(data)
    

    return (
        <List>
            {data.map(response => (
                <Link to='/about' key={response.id} onClick={getMovieDetail.bind(this, response)}>
                    <Img src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`} alt='movie-poster' />
                    <div style={{ color: 'white', textDecoration: 'none', width: '150px' }}>{response.title}</div>
                </Link>))}
        </List>
    );
}

export default MoreGenre;