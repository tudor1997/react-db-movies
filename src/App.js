import React, {useState, useEffect} from 'react';
import {url, imageUrl, searchUrl} from './moviesAPI/api'
import Movies from './components/movies';

function App() {
const [moviesDB, setMoviesDB] = useState([]);
const [search, setSearch] = useState('');

useEffect(() =>{
  
    getMovies(url);

   
},[])
const handleSubmit = (e) => {
      e.preventDefault();
        if(search && search !== ''){
          getMovies(searchUrl + search);
        }
        setSearch('');
}
const getMovies = async (API) => {
    const response = await fetch(API);
    const data = await response.json();
    setMoviesDB(data.results);
}
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
  );
}

export default App;
