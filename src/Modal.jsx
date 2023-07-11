import React, { useEffect, useState } from "react";
import "./Modal.css";
import axios from "axios";

export const Modal = ({ movie, closeModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const checkFavoriteStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/favorites?movie_id=${movie.id}`
        );
        setIsFavorite(response.data.length > 0);
      } catch (error) {
        console.error("Error checking favorite status:", error);
      }
    };

    checkFavoriteStatus();
  }, [movie.id]);

  const handleFavoriteClick = async () => {
    try {
      if (isFavorite) {
        await axios.delete(`http://localhost:3000/favorites/${movie.id}`);
        setIsFavorite(false);
      } else {
        await axios.post("http://localhost:3000/favorites", {
          movie_id: movie.id,
        });
        setIsFavorite(true);
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.classList.contains("modal")) {
      closeModal();
    }
  };

  window.addEventListener("click", handleOutsideClick);

  return (
    <div className="modal" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{movie.name}</h5>
          </div>
          <div className="modal-body">
            <img className="modal-image" src={movie.image} alt={movie.name} />
            <p>{movie.description}</p>
            <p className="modal-category">Category: {movie.category}</p>
          </div>
          <div className="modal-footer">
            <button
              variant="primary"
              type="button"
              className="btn btn-primary"
              onClick={handleFavoriteClick}
            >
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </button>
            <button
              variant="primary"
              type="button"
              className="btn btn-primary"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
