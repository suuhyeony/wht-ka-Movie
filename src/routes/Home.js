import React from 'react';
import MovieListContainer from '../containers/MovieListContainer';
import NewMovieContainer from '../containers/NewMovieContainers';

function Home() {
    return (
        <>
            <MovieListContainer />
            <NewMovieContainer />
        </>
    );
}

export default Home;