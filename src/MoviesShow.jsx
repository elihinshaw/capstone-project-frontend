import { useState, useEffect } from "react";
import axios from "axios";

export const MoviesShow = (props) => {
  const baseImageUrl = "https://image.tmdb.org/t/p/original";
  const [isFavorite, setIsFavorite] = useState(false);

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
    };

    checkFavoriteStatus();
  }, [props.currentMovie.id]);

  const toggleFavorite = (event) => {
    event.stopPropagation();

    if (isFavorite) {
      removeFromFavorites();
    } else {
      addToFavorites();
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
        <div></div>
      </div>
    </div>
  );
};
