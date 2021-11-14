import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import MovieDetails from './components/MovieDetails'
import Error from './components/Error'
import Home from './components/Home'

function App() {

  return (
   
    <Router>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/home" element={ <Home/>}>
    <Home/>
     </Route>
    <Route path="/home/:id" children={<MovieDetails/>}>
    </Route>
    <Route path="*" element={<Error/>}>
    <Error/>
     </Route>
    </Switch>
    </Router>
  );
}

export default App;
