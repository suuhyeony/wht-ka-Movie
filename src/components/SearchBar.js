import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { SearchMovies } from '../modules/searchMovie';
import logo2 from '../img/logo2.jpg';


const Bar = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    color: white;
    `;

const Logo = styled.img`
    width: 200px;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`;

const Input = styled.input`
    display: flex;
    flex: 1;
    padding: 8px;
    border-radius: 10px;
    border: none;
    background-color: #eeeeee;
    color: black;
    width: 400px;
    outline: none;
    font-size: 12px;
    box-sizing: border-box;
`;

const Search = styled.div`
    margin-left: 15px;
    font-size: 24px;
    cursor: pointer;
    color: #b3b2b2;
    &:hover {
        color: #ffffff;
    }
`;

const InputContainer = styled.div`
    display: flex;

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
            <Link to='/'><Logo src={logo2}></Logo></Link>
            <InputContainer>
                <Input placeholder='보고싶은 영화를 검색하세요.' onChange={onChange} value={value} onKeyPress={handleSearch} />
                <Search onClick={handleSearch}><FaSearch /></Search>
            </InputContainer>
            <Search><FaBars /></Search>
        </Bar>
    );
}

export default SearchBar;