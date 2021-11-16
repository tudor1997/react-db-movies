import React, {useContext}  from 'react'
import Movies from './movies';
import { MoviesContext } from '../context/movies';
const MoviesList = () => {
    const {moviesDB} = useContext(MoviesContext);
    return (
        <div className="container">
        
        {
        moviesDB && moviesDB.map((movie) => {
         return <Movies key={movie.id} {...movie}></Movies>
        })
        }
        </div>
    )
}

export default MoviesList
