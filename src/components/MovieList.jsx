// src/components/MovieList.jsx

import { useState } from "react";
import moviesData from "../movies.json";

// import MovieCard from "./MovieCard";
import ImprovedMovieCard from "./ImprovedMovieCard";

function MovieList() {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <ImprovedMovieCard
            key={movie._id}
            movie={movie}
            clickToDelete={deleteMovie}
          />
        );
      })}
    </div>
  );
}

export default MovieList;
