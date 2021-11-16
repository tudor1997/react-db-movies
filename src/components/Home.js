import React , {useContext} from 'react'
import { MoviesContext } from '../context/movies';
import Header from './Header';
import Loading from './Loading';
import MoviesList from './MoviesList';
const Home = () => {

  const {moviesDB} = useContext(MoviesContext);
    return (
        <div className="app">
        <h1 className="app-title">Movies DB</h1>
          <Header />
      
       {moviesDB.length < 1 ? <Loading/> : <MoviesList/>}
      
   
      </div>
    )
}

export default Home
