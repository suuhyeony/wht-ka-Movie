import React, { useState } from "react";
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useDispatch } from "react-redux";
import { getMovie } from "../modules/movie";
import { getGenreMovies } from "../modules/movies";
import { Link, useHistory } from "react-router-dom";


const Posters = styled.div`
    width: 100%;
    margin-bottom: 40px;
    padding: 20px;
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
    color: white;
`;

const Select = styled.select`
    color: white;
    background: black;
    width: 100px;
    padding: 0.8rem 0.5rem;
    border-radius: 0px;
    margin: 5px 20px;
    cursor: pointer;
`;


const genreList = [
    {
        "id":28,
        "name":"액션"
    },{
        "id":12,
        "name":"모험"
    },{
        "id":16,
        "name":"애니메이션"
    },{
        "id":35,
        "name":"코미디"
    },{
        "id":80,
        "name":"범죄"
    },{
        "id":99,
        "name":"다큐멘터리"
    },{
        "id":18,
        "name":"드라마"
    },{
        "id":10751,
        "name":"가족"
    },{
        "id":14,
        "name":"판타지"
    },{
        "id":36,
        "name":"역사"
    },{
        "id":27,
        "name":"공포"
    },{
        "id":10402,
        "name":"음악"
    },{
        "id":9648,
        "name":"미스터리"
    },{
        "id":10749,
        "name":"로맨스"
    },{
        "id":878,
        "name":"SF"
    },{
        "id":53,
        "name":"스릴러"
    },{
        "id":10752,
        "name":"전쟁"
    }
]


function GenreMovie({ movies }) {
    const [value, setValue] = useState(parseInt(28));
    const history = useHistory();
    const dispatch = useDispatch();
    // console.log(history)

    const getMovieDetail = (movie) => {
        dispatch(getMovie(movie))
    }
    
    const genreChange = async (e) => {
        // console.log(typeof(e.target.value))
        await setValue(parseInt(e.target.value));
        // console.log(value);
    };

    const updateGenreMovie = async () => {
        // console.log('done')
        await dispatch(getGenreMovies({ movies, value }));
        // console.log(movies, value)
        history.push('/more');
    }

    const settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 5
    };


    return (
        <List>
            <Letters>
                <h3>장르별 영화</h3>
                <Select name="genreDropdown" id="dropDown" value={value} onChange={genreChange}>
                    {genreList.map(genre => (<option key={genre.id} value={genre.id}>{genre.name}</option>))}
                </Select>
                <button onClick={updateGenreMovie} style={{ color: 'white', border: 'none', backgroundColor: 'black' }}>더보기</button>
            </Letters>
            <Posters>
                <Slider {...settings}>
                    {movies.filter(movie => movie.genre_ids.includes(value))
                    .map(movie => (<Link to='/about' key={movie.id} onClick={getMovieDetail.bind(this, movie)}><Img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt='movie-poster' /></Link>))}
                </Slider>
            </Posters>
        </List>
    );
}

export default GenreMovie;