import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Img = styled.img`
    width: 300px;
    margin-bottom: 10px;
`;

const Info = styled.div`
    margin-top: 40px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


function MovieDetail() {
    const { data, loading, error } = useSelector(state => state.movie.movie);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    const { title, overview, poster_path } = data

    return (
        <>
            <Info>
                <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                <div>
                    <h2>{title}</h2>
                    <p>{overview}</p>
                </div>
            </Info>
            <div>
                <h2>Youtube</h2>
            </div>
        </>
    );
}

export default MovieDetail;