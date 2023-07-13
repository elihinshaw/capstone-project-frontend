import { useState, useEffect } from "react";
import axios from "axios";

export const MoviesShow = (props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

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
          } else {
            console.error("Error checking favorite status:", error);
          }
        }
        console.log(!!localStorage.getItem("jwt"));
        console.log(localStorage.getItem("jwt"));
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
      .then(() => {
        setIsFavorite(true);
      })
      .catch((error) => {
        console.error("Error adding to favorites:", error);
      });
  };
  const removeFromFavorites = () => {
    axios
      .delete(`http://localhost:3000/favorites/${props.currentMovie.id}.json`)
      .then(() => {
        setIsFavorite(false);
      })
      .catch((error) => {
        console.error("Error removing from favorites:", error);
      });
  };

  const closeAlert = (event) => {
    event.stopPropagation();
    if (event.target.classList.contains("btn-close")) {
      setShowAlert(false);
    }
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
        <div></div>
      </div>
    </div>
  );
};
