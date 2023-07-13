import axios from "axios";
import { useEffect, useState } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";

import { Routes, Route } from "react-router-dom";

export function Content() {
  const [movies, setMovies] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3000/movies.json")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const handleShowMovie = (movie) => {
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    setIsMoviesShowVisible(false);
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MoviesIndex movies={movies} onShowMovie={handleShowMovie} />
              <Modal show={isMoviesShowVisible} onClose={handleClose}>
                <MoviesShow currentMovie={currentMovie} />
              </Modal>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
