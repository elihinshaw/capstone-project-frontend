import { useState, useEffect } from "react";

export function MoviesIndex(props) {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [pageNumber, setPageNumber] = useState(1);

  const handleShowMovie = (movie) => {
    props.onShowMovie(movie);
  };

  const handleNextPage = () => {
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/movies?page=${pageNumber}`)
      .then((response) => response.json())
      .then((data) => {
        props.setMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [pageNumber, props.setMovies]);

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
      <div className="row mt-3">
        <div className="col text-center mb-5">
          <button className="btn btn-light bm-4" onClick={handleNextPage}>
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
