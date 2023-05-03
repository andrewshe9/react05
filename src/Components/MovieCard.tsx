type Movie = object;
const MovieCard = ({ movie }) => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={movie.Poster} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <p className="card-text">{movie.Year}</p>
          <a href="#" className="btn btn-primary">
            {movie.Type}
          </a>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
