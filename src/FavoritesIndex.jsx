export function FavoritesIndex(props) {
  const { favorites } = props;
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const handleShowMovie = (movie) => {
    props.onShowMovie(movie);
  };

  return (
    <div id="favorites-index" className="row">
      {favorites.map((favorite) => {
        return (
          <div
            key={favorite.movie_id}
            className="col-sm-6 col-md-4 col-lg-3 movie-card"
          >
            <div className="card">
              <img
                className="card-img-top img-fluid"
                src={baseImageUrl + favorite.poster_path}
                alt={favorite.title}
                onClick={() => handleShowMovie(favorite)}
              />
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
