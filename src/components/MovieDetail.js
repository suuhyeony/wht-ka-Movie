import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Youtube from './Youtube';

const Img = styled.img`
    width: 300px;
    margin-right: 30px;
    margin-bottom: 10px;
`;

const Info = styled.div`
    margin: 40px;
    padding: 10px;
    color: white;
`;

const Detail = styled.div`
    display: flex;
    /* justify-content: space-between; */
    padding: 10px;
`;

const Overview = styled.p`
    padding: 20px;
    line-height: 180%;
    word-break: keep-all;
`;

function MovieDetail() {
    const { data, loading, error } = useSelector(state => state.movie.movie);
   

    if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    const { title, overview, poster_path, id, vote_average, release_date } = data;

    return (
        <>
            <Info>
                <h2>{title}</h2>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p>{release_date}</p>
                    <p>{vote_average} / 10</p>
                </div>
                <Detail>
                    <Img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                    <div>
                        <h3>줄거리</h3>
                        <Overview>{overview ? overview : '줄거리가 없네요 :('}</Overview>
                    </div>
                </Detail>
            </Info>
            <Youtube id={id} />
        </>
    );
}

export default MovieDetail;