export function MoviesIndex(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";

  const handleShowMovie = (movie) => {
    props.onShowMovie(movie);
  };

  return (
    <div id="movies-index" className="row">
      {props.movies.map((movie) => (
        <div key={movie.id} className="col-sm-6 col-md-4 col-lg-3 movie-card">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={baseImageUrl + movie.poster_path}
              alt={movie.title}
              onClick={() => handleShowMovie(movie)}
            />
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}
