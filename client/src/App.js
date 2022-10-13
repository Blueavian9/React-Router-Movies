import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import SavedList from './Movies/SavedList';

<header>
  <Link to="/">Home</Link>
  <Link to="/movie/1">Movie1</Link>
  <Link to="/movie/2">Movie2</Link>
  <Link to="/movie/3">Movie3</Link>
  <Link to="/movie/4">Movie4</Link>
  <Link to="/movie/5">Movie5</Link>
</header>
<main>

  <Switch>
    <Route exact path="/">
        <h2>Welcome please select your Movie</h2>
    </Route>
    <Route exact path="movie1">
      <movie1 />
    </Route>
    <Route exact path="movie2">
      <movie2 />
    </Route>
    <Route exact path="movie3">
      <movie3 />  
    </Route>    
    <Route exact path="movie4">
      <movie4 />
    </Route>
    <Route exact path="movie5">
      <movie5 />
    </Route>
  </Switch>
</main>

<footer>
  <p>&copy; Copoyright 2022 Movies</p>
</footer>


export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5001/api/movies') // Study this endpoint with Postman
        .then(response => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>Replace this Div with your Routes</div>
    </div>
  );
}
