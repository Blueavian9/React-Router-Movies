import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import { useParams } from "react-router-dom";
import axios from "axios";

const Movie = ({ savedList, setSavedList, addToSavedList }) => {
  const [movie, setMovie] = useState();

  const { id } = useParams();

  let deleteMovie = (movieToRemove) => {
    setSavedList(savedList.filter((movie) => movie.id !== movieToRemove.id));
  };

  const saveMovie = (movie) => {
    addToSavedList(movie);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return (
    <div className="save-wrapper">
      <MovieCard movie={movie} />
      <div className="save-button" onClick={() => saveMovie(movie)}>
        Save
      </div>
      <div className="delete-button" onClick={() => deleteMovie(movie)}>
        Delete
      </div>
    </div>
  );
};

export default Movie;
