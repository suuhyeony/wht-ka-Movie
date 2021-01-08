import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../modules/youtube';
import styled from 'styled-components';

const Posters = styled.div`
    width: 100%;
    margin: 0 40;
    .slick-prev:before {
        opacity: 1;
        color: #ffffff;
        left: 0;
    }
    .slick-next:before {
        opacity: 1;
        color: #ffffff;
    }
`;

const Container = styled.div`
    padding: 20px;
`;

const Iframe = styled.iframe`
    width: 600px;
    height: 315px;
    border: none;
`;

const Title = styled.div`
    color: white;
    display: flex;
    align-items: flex-end;
`;

function Youtube({ id }) {
    const { data } = useSelector(state => state.youtube.videos);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideos(id));
    }, [dispatch, id])

    // if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    // if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    const videoList = data.data.results;
    // if (videoList.length === 0) return <><Title>비디오</Title><div style={{ display: 'flex', justifyContent: 'center' }}>검색 결과가 없습니다.</div></>
    
    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <Container>
            <Title>
                <h3 style={{ marginBottom: '0', marginRight: '5px' }}>비디오</h3> 
                <div>({videoList.length}건)</div>
            </Title>
            <Posters>
                {videoList.length > 0 ? 
                    <Slider {...settings}>
                        {videoList.map(video => (<Iframe key={video.id} frameborder="0" allowfullscreen 
                        src={`https://www.youtube.com/embed/${video.key}`}></Iframe>))}
                    </Slider>
                    : <p style={{color: 'white', marginTop: '20px'}}>'연관 비디오가 없네요 :('</p>
                }
            </Posters>
        </Container>
    );
}

export default Youtube;