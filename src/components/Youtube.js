import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../modules/youtube';
import styled from 'styled-components';

const Video = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Iframe = styled.iframe`
    width: 600px;
    height: 315px;
`;

function Youtube({ id }) {
    const { data } = useSelector(state => state.youtube.videos);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideos(id));
    }, [dispatch])

    // if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    // if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    const videoList = data.data.results;
    if (videoList.length === 0) return <><h3>비디오</h3><div style={{ display: 'flex', justifyContent: 'center' }}>검색 결과가 없습니다.</div></>
    
    return (
        <div>
            <h3>비디오</h3>
            <Video>
                {videoList.map(video => (<Iframe key={video.id} frameborder="0" allowfullscreen 
                src={`https://www.youtube.com/embed/${video.key}`}></Iframe>))}
            </Video>
        </div>
    );
}

export default Youtube;