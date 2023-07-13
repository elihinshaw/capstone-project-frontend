export function MoviesIndex(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div id="movies-index">
      {props.movies.map((movie) => (
        <div key={movie.id} className="movie-card">
          <div className="card">
            <img
              className="card-img-top"
              src={baseImageUrl + movie.poster_path}
              alt={movie.title}
            />
            <div className="card-body">
              <p className="card-text">{movie.overview}</p>
            </div>
          </div>
          <button onClick={() => props.onShowMovie(props)}>More info</button>
        </div>
      ))}
    </div>
  );
}
