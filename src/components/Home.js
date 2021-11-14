import React, {useContext}  from 'react'
import Movies from './movies';
import { MoviesContext } from '../context/movies';
const Home = () => {

  const {handleSubmit, search, setSearch, getMovies, url, moviesDB} = useContext(MoviesContext);
    return (
        <div className="app">
        <h1 className="app-title">Movies DB</h1>
        <div className="navigation">
        <form  onSubmit={handleSubmit}>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for movies..." />
          <button type="submit">Search</button>
        </form>
          <button className="getMovies" type="button" onClick={() => getMovies(url)}>Popularity</button>
        </div>
       
  
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
