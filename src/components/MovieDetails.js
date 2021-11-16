import React, {useContext} from 'react'
import { MoviesContext } from '../context/movies';
import { useParams } from 'react-router';
import {imageUrl} from '../moviesAPI/api'
import { Link } from 'react-router-dom';
import Loading from './Loading';
const MovieDetails = () => {
    const {moviesDB} = useContext(MoviesContext);
    const {id} = useParams();
    const movie = moviesDB.find(item => item.id === parseInt(id))
   
        const {overview, title, poster_path, vote_average, release_date } = movie;
   
    let rating = "";
    if(vote_average <= 5) {
        rating = "rating min"
    }else if(vote_average > 5 && vote_average < 7) {
        rating = "rating medium"
    }else if (vote_average >= 7) {
        rating = "rating max"
    }
  
        return (
            <section className="movie-details-section">
                <div className="movie-details">
                    <div className="image-container">
                            <img src={`${imageUrl}${poster_path}`} alt={title} />
                    </div>
                    <div className="details-container">
                    <h1 className="movie-title">{title}</h1>
                    <h5 className="movie-date">Release date: {release_date}</h5>
                    <span className={rating}>{vote_average}</span>
                    <p>{overview}</p>

                        <Link className="btn-details" to="/home">Back to Movies</Link>
                    </div>
                </div>
            </section>
        )


}

export default MovieDetails
