import React from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { response_list } from '../modules/searchMovie';
import { getMovie } from '../modules/movie';
import styled from 'styled-components';

const Img = styled.img`
    width: 150px;
`;

function MovieList() {
    const { data, loading, error } = useSelector(state => state.searchMovie.response_list);
    const dispatch = useDispatch();

    const getMovieDetail = (movie) => {
        dispatch(getMovie(movie))
    }

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    console.log(data)
    
    // const { title, poster_path } = data

    return (
        <div>
            {data.map(response => (
                <Link to='/about' key={response.id} onClick={getMovieDetail.bind(this, response)}>
                    <span>{response.title}</span>
                    <Img src={`https://image.tmdb.org/t/p/w500/${response.poster_path}`} alt='movie-poster' />
                </Link>))}
        </div>
    );
}

export default MovieList;