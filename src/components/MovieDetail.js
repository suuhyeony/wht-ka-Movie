import React from 'react';
import { useSelector } from 'react-redux';

function MovieDetail() {
    const { data, loading, error } = useSelector(state => state.movie.movie);

    if (loading) return <div>로딩중...</div>
    if (error) return <div>에러 발생!</div>
    if (!data) return <div>데이터 불러오는중</div>
    // console.log(data)
    const { title, overview, poster_path } = data

    return (
        <div>
            <h1>{title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            <p>{overview}</p>
        </div>
    );
}

export default MovieDetail;