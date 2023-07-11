import "./MoviesIndex.css";

export function MoviesIndex({ movies, openModal }) {
  return (
    <div id="movies-index">
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="movie-card"
          onClick={() => openModal(movie)}
        >
          <div className="card">
            <img className="card-img-top" src={movie.image} alt={movie.name} />
            <div className="card-body">
              <p className="card-text">{movie.description}</p>
            </div>
          </div>
          <button
            className="btn btn-primary see-more-button"
            onClick={() => openModal(movie)}
          >
            More
          </button>
        </div>
      ))}
    </div>
  );
}
