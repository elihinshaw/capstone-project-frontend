export const MoviesShow = (props) => {
  console.log(props);
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div>
        <div>
          <h5>{props.currentMovie.title}</h5>
        </div>
        <div>
          <img
            src={baseImageUrl + props.currentMovie.poster_path}
            alt={props.currentMovie.title}
          />
          <br />
          <p>{props.currentMovie.overview}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
