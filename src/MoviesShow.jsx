import { useState, useEffect } from "react";
import axios from "axios";

export const MoviesShow = (props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  if (!!localStorage.getItem("jwt") === true) {
    useEffect(() => {
      const checkFavoriteStatus = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3000/favorites/${props.currentMovie.id}.json`
          );
          setIsFavorite(response.status === 200 && response.data);
        } catch (error) {
          if (error.response && error.response.status === 404) {
            setIsFavorite(false);
          }
        }
      };

      checkFavoriteStatus();
    }, [props.currentMovie.id]);
  }

  const toggleFavorite = (event) => {
    event.stopPropagation();

    if (isFavorite) {
      removeFromFavorites();
    } else {
      if (!!localStorage.getItem("jwt") === true) {
        addToFavorites();
      } else {
        setShowAlert(true);
      }
    }
  };

  const addToFavorites = () => {
    axios
      .post("http://localhost:3000/favorites.json", {
        movie_id: props.currentMovie.id,
      })
      .then((response) => {
        if (response.status === 201) {
          setIsFavorite(true);
        }
      })
      .catch(() => {
        setErrorMessage(
          "You may only favorite up to 40 movies as of this moment.\nSorry for the inconvenience."
        );
      });
  };

  const removeFromFavorites = () => {
    axios
      .delete(`http://localhost:3000/favorites/${props.currentMovie.id}.json`)
      .then(() => {
        setIsFavorite(false);
      })
      .catch(() => {
        setErrorMessage(
          "An error occurred while removing from favorites. Please try again."
        );
      });
  };

  const closeAlert = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("btn-close")) {
      setShowAlert(false);
    }
  };

  const closeErrorMessage = (event) => {
    event.stopPropagation();
    setErrorMessage(null);
  };

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
        <button onClick={toggleFavorite}>
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
        {showAlert && (
          <div
            className="alert alert-primary d-flex align-items-center justify-content-center position-fixed top-50 start-50 translate-middle"
            role="alert"
            onClick={closeAlert}
          >
            <div>
              You must be logged in to add a movie to your favorites!
              <br />
              <a href="/signup">Sign up here</a>
              <br />
              Or
              <br />
              <a href="/login">Login here</a>
            </div>
            <button
              type="button"
              className="btn-close"
              onClick={closeAlert}
            ></button>
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-primary d-flex justify-content-center position-fixed top-50 start-50 translate-middle">
            <span>{errorMessage}</span>
            <button
              type="button"
              className="btn-close"
              onClick={closeErrorMessage}
            ></button>
          </div>
        )}

        <div></div>
      </div>
    </div>
  );
};
