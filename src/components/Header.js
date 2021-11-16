import React , {useContext} from 'react';

import { MoviesContext } from '../context/movies';


const Header = () => {

    const {handleSubmit,search,setSearch,url,getMovies} = useContext(MoviesContext);
return (
    <div className="navigation">
    <form  onSubmit={handleSubmit}>
      <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for movies..." />
      <button type="submit">Search</button>
    </form>
    <button className="getMovies" type="button" onClick={() => getMovies(url)}>Popularity</button>
    </div>
)

}

export default Header;