import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGenre } from '../modules/genre';
import styled from 'styled-components';

const TagContainer = styled.div`
    padding: 8px;
    display: flex;
    justify-content: flex-start;
`;

const Tag = styled.div`
    background-color: #f0f0ce;
    border-radius: 50px;
    padding: 5px;
    margin-right: 5px;
    color: black;
    font-size: 1.2rem;
    font-weight: 600;
`;


function Genre({ id }) {
    const { data } = useSelector(state => state.genre.genre);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getGenre(id));
    }, [dispatch, id])

    // if (loading) return <div style={{ display: 'flex', justifyContent: 'center' }}>로딩중...</div>
    // if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data);
    const genreTags = data.data.genres;
    // console.log(genreTags);
    

    return (
        <TagContainer>
            {genreTags.map(tag => (<Tag>#{tag.name}</Tag>))}
        </TagContainer>
    );
}

export default Genre;