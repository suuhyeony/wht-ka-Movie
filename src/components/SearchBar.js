import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { FaBars } from 'react-icons/fa';

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
    const onChange = e => setValue(e.target.value);
    // const onSubmit = e => {
    //     e.preventDefault();
    //     dispatch();
    //     setValue('');
    // }
    return (
        <Bar>
            <h1>왓카무비</h1>
            <Input placeholder='보고싶은 영화를 검색하세요.' onChange={onChange} value={value} />
            <button><FaBars /></button>
        </Bar>
    );
}

export default SearchBar;