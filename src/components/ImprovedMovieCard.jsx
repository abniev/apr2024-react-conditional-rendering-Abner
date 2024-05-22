import GenerateScoreLabel from "../assets/lib/generateScoreLabel";

// src/components/ImprovedMovieCard.jsx
function ImprovedMovieCard(props) {
  const { movie, clickToDelete } = props;
  return (
    <div className="MovieCard">
      <h3>{movie.title}</h3>
      <p>Director: {movie.director}</p>
      <p>
        IMDB Rating: <GenerateScoreLabel IMDBRating={movie.IMDBRating} />
      </p>

      {movie.hasOscars ? (
        <p>Got the Oscar Award! </p>
      ) : (
        <p>Great movie but no Oscars!</p>
      )}

      <button onClick={() => clickToDelete(movie._id)} className="btn-delete">
        Delete
      </button>
    </div>
  );
}

export default ImprovedMovieCard;
