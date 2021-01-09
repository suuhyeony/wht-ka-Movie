import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Genre from './Genre';
import Youtube from './Youtube';
import { FaStar } from 'react-icons/fa';

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

const TitleContainer = styled.div`
    display: flex;
    justify-content: flex-start;
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
                <TitleContainer>
                    <h2>{title}</h2>
                    <p style={{ marginTop: '35px', marginLeft: '10px' }}>{release_date}</p>
                </TitleContainer>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Genre id={id} />
                    <p><FaStar color='white' />{vote_average} / 10</p>
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