import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

const Search = styled.div`
    font-size: 24px;
    cursor: pointer;
    color: #999797;
    &:hover {
        color: #2c2a2a;
    }
`;


function SearchBar() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    
    const onChange = (e) => {
        setValue(e.target.value)
    };

    const handleSearch = (e) => { 
        if (e.key === 'Enter' || e.type === 'click') {
            dispatch(SearchMovies(value))
            history.push('/movie-list')
            setValue('')
        }
    }
    
    return (
        <Bar>
            <Link to='/'><h1>왓카무비</h1></Link>
            <Input placeholder='보고싶은 영화를 검색하세요.' onChange={onChange} value={value} onKeyPress={handleSearch} />
            <Search onClick={handleSearch}><FaSearch /></Search>
            <Search><FaBars /></Search>
        </Bar>
    );
}

export default SearchBar;