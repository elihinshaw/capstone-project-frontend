export const MoviesShow = (props) => {
  console.log(props);
  return (
    <div>
      <div>
        <div>
          <h5>{props.title}</h5>
        </div>
        <div>
          <img src={props.poster_path} alt={props.title} />
          <p>{props.overview}</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};
