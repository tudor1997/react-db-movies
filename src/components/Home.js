import React, {useContext}  from 'react'
import Movies from './movies';
import { MoviesContext } from '../context/movies';
import Header from './Header';
const Home = () => {

  const {moviesDB} = useContext(MoviesContext);
    return (
        <div className="app">
        <h1 className="app-title">Movies DB</h1>
          <Header />
       
  
        <div className="container">
          
        {moviesDB && moviesDB.map((movie) => {
         return <Movies key={movie.id} {...movie}></Movies>
        })
  
        }
        </div>
      </div>
    )
}

export default Home
