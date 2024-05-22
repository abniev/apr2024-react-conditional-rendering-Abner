// src/components/MovieCard.jsx

import React from "react";

function MovieCard(props) {
  const { movie, clickToDelete } = props;
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>Rating: {movie.IMDBRating}</p>
      {movie.hasOscars && <p>🏆</p>}
      {/* <p>Won oscar: {movie.hasOscars ? <span>🏆</span> : <span>❌</span>}</p> */}
      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default MovieCard;
