import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import NewMovieContainer from '../containers/NewMovieContainer';
import GenreMovieContainer from '../containers/GenreMovieContainer';

function Home() {
    return (
        <>
            <MovieListContainer />
            <NewMovieContainer />
            <GenreMovieContainer />
        </>
    );
}

export default Home;