import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { SearchMovies } from '../modules/searchMovie';

const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5px;
`;

const Input = styled.input`
    display: flex;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 50%;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
`;



function SearchBar() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const onChange = (e) => {
        setValue(e.target.value)
    };

    const handleSearch = (e) => { 
        if (e.key === 'Enter') {
            dispatch(SearchMovies(value))
            history.push('/movie-list')
        }
    }

    // useEffect(() => {
    //     dispatch(SearchMovies());
    // }, [dispatch]);

    // if (loading) return <div>로딩중...</div>
    // if (error) return <div>에러 발생!</div>
    // if (!data) return <div>데이터 불러오는중</div>
    
    return (
        <Bar>
            <h1>왓카무비</h1>
            <Input placeholder='보고싶은 영화를 검색하세요.' onChange={onChange} value={value} onKeyPress={handleSearch} />
            <button onClick={handleSearch}><FaSearch /></button>
            <button><FaBars /></button>
        </Bar>
    );
}

export default SearchBar;