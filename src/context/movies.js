import React, {useState, useEffect}  from 'react'
import {url, searchUrl} from '../moviesAPI/api'

const MoviesContext = React.createContext();

const MoviesProvider = ({children}) => {

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
      const result = await fetch(API);
      const data = await result.json()
     
      setMoviesDB(data.results);
      }
   
      
    return (
        <MoviesContext.Provider value={{handleSubmit, getMovies, moviesDB, search, setSearch ,url}}>
            {children}
        </MoviesContext.Provider>
    )
}

export {MoviesProvider, MoviesContext} 
