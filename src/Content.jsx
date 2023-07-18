import axios from "axios";
import { useEffect, useState } from "react";
import { MoviesIndex } from "./MoviesIndex";
import { Modal } from "./Modal";
import { MoviesShow } from "./MoviesShow";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { FavoritesIndex } from "./FavoritesIndex";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Search } from "./Search";

const token = localStorage.getItem("jwt");

export function Content() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isMoviesShowVisible, setIsMoviesShowVisible] = useState(false);
  const [currentMovie, setCurrentMovie] = useState({});
  const navigate = useNavigate();

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

  if (!!localStorage.getItem("jwt") === true) {
    useEffect(() => {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      axios
        .get("http://localhost:3000/favorites.json")
        .then((response) => {
          setFavorites(response.data);
        })
        .catch((error) => {
          console.error("Error fetching movies:", error);
        });
    }, []);
  }

  const handleShowMovie = (movie) => {
    setIsMoviesShowVisible(true);
    setCurrentMovie(movie);
  };

  const handleClose = () => {
    setIsMoviesShowVisible(false);
  };

  const handleSearch = (searchFilter) => {
    const filteredMovies = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchFilter.toLowerCase())
    );
    setMovies(filteredMovies);
    navigate("/");
  };

  return (
    <div className="container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MoviesIndex
                onSearch={handleSearch}
                movies={movies}
                setMovies={setMovies}
                onShowMovie={handleShowMovie}
              />

              <Modal show={isMoviesShowVisible} onClose={handleClose}>
                <MoviesShow currentMovie={currentMovie} />
              </Modal>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/favorites"
          element={
            <>
              <FavoritesIndex
                favorites={favorites}
                movies={movies}
                onShowMovie={handleShowMovie}
              />
              <Modal show={isMoviesShowVisible} onClose={handleClose}>
                <MoviesShow currentMovie={currentMovie} />
              </Modal>
            </>
          }
        />
      </Routes>
    </div>
  );
}
