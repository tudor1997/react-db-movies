import React from 'react'
import {imageUrl} from '../moviesAPI/api'
import { Link } from 'react-router-dom';

const Movies = ({title, poster_path, vote_average, id}) => {

    let rating = "";
    if(vote_average <= 5) {
        rating = "rating min"
    }else if(vote_average > 5 && vote_average < 7) {
        rating = "rating medium"
    }else if (vote_average >= 7) {
        rating = "rating max"
    }
    
    return (
        <Link  to={`/home/${id}`}>
        <article className="movie-card">
            <div className="movie-img">
                <img src={`${imageUrl}${poster_path}`} alt="" />
            </div>
            <div className="info-movie">
                <h2>{title}</h2>
                <span className={`${rating}`}>{vote_average}</span>
            </div>
        </article>
        </Link>
    )
}

export default Movies
