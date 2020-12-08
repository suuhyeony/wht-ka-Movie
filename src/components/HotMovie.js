import React from "react";
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Posters = styled.div`
    width: 100%;
    margin: 0 40;
    .slick-prev:before {
        opacity: 1;
        color: black;
        left: 0;
    }
    .slick-next:before {
        opacity: 1;
        color: black;
    }
`;

const Img = styled.img`
    width: 100%;
`;

function HotMovie({ movies }) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <>
            <div>
                <h1>인기 영화</h1>
                <a>더보기</a>
            </div>
            <Posters>
                <Slider {...settings}>
                    {movies.map(movie => (<div><Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-poster' /></div>))}
                </Slider>
            </Posters>
        </>
    );
}

export default HotMovie;