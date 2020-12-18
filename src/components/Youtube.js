import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideos } from '../modules/youtube';

function Youtube({ id }) {
    const { data } = useSelector(state => state.youtube.videos);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideos(id));
    }, [dispatch])

    // if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    // if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    console.log(data)
    const videoList = data.data.results;

    return (
        <div>
            <h2>Youtube</h2>
            {videoList.map(video => (<iframe key={video.id} style={{ width: '100%' }} src={`/embed/${video.key}`}></iframe>))}
        </div>
    );
}

export default Youtube;