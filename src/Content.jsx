import axios from "axios";
import { useEffect, useState } from "react";
import { MoviesIndex } from "./MoviesIndex";

export function Content() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div>
      <MoviesIndex movies={movies} />
    </div>
  );
}
