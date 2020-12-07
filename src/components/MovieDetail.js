import React from 'react';

function MovieDetail({ movie }) {
    const { title, poster_path, overview } = movie;
    return (
        <div>
            <h1>{title}</h1>
            <img src="https://image.tmdb.org/t/p/w500/{poster_path}" alt="{title}"/>
            <p>{overview}</p>
        </div>
    );
}

export default MovieDetail;