import React from 'react';
// import { Link } from 'react-router-dom';


function HotMovie({ movies }) {
    console.log(movies)
    // const movieList = movies.data.results
    // const movieList = movies.data.results.map(movie => (<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />))

    return (
        <>
            <div>
                <h1>인기 영화</h1>
                <a>더보기</a>
            </div>
            <div>
                {movies.map(movie => (<img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />))}
            </div>
        </>
    );
}

export default HotMovie;