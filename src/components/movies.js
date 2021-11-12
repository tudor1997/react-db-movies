import React from 'react'
import {imageUrl} from '../moviesAPI/api'
const Movies = ({title, poster_path, vote_average}) => {
    let rating = "";
    if(vote_average <= 5) {
        rating = "rating min"
    }else if(vote_average > 5 && vote_average < 7) {
        rating = "rating medium"
    }else if (vote_average >= 7) {
        rating = "rating max"
    }
    return (
        <article className="movie-card">
            <div className="movie-img">
                <img src={`${imageUrl}${poster_path}`} alt="" />
            </div>
            <div className="info-movie">
                <h2>{title}</h2>
                <span className={`${rating}`}>{vote_average}</span>
            </div>
        </article>
    )
}

export default Movies
