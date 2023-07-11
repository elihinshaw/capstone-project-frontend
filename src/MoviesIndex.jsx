export function MoviesIndex(props) {
  const { movies } = props;

  return (
    <div id="movies-index">
      {movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="card">
            <img className="card-img-top" src={movie.image} alt={movie.name} />
            <h5 className="card-title">{movie.name}</h5>
            <div className="card-body">
              <p className="card-text">Description: {movie.description}</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Category: {movie.category}</small>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
