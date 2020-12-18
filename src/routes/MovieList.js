import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { response_list } from '../modules/searchMovie';
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
    /* justify-content: space-around; */
    /* align-items: center;
    padding: 5px; */
`;

function MovieList() {
    const { data, loading, error } = useSelector(state => state.searchMovie.response_list);
    const dispatch = useDispatch();

    const getMovieDetail = (movie) => {
        dispatch(getMovie(movie))
    }

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    if (data.length === 0) return <div style={{ display: 'flex', justifyContent: 'center' }}>검색 결과가 없습니다.</div>
    // console.log(data)
    

    return (
        <List>
            {data.map(response => (
                <Link to='/about' key={response.id} onClick={getMovieDetail.bind(this, response)}>
                    <Img src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`} alt='movie-poster' />
                    <div>{response.title}</div>
                </Link>))}
        </List>
    );
}

export default MovieList;