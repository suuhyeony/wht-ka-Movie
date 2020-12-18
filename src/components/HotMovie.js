import React from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch } from "react-redux";
import { getMovie } from "../modules/movie";
import { Link } from "react-router-dom";


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
    height: 330px;
    transition: transform 100ms ease-in;
    &:hover {
        transform: scale(1.07);
    }
`;

const List = styled.div`
    margin-top: 40px;
`;

const Letters = styled.div`
    display: flex;
    align-items: flex-end;
`;

function HotMovie({ movies }) {
    const dispatch = useDispatch();

    const getMovieDetail = (movie) => {
        dispatch(getMovie(movie))
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5
    };
    return (
        <List>
            <Letters>
                <h3>인기 영화</h3>
                <p style={{ marginLeft: '10px' }}>더보기</p>
            </Letters>
            <Posters>
                <Slider {...settings}>
                    {movies.map(movie => (<Link to='/about' key={movie.id} onClick={getMovieDetail.bind(this, movie)}><Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-poster' /></Link>))}
                </Slider>
            </Posters>
        </List>
    );
}

export default HotMovie;