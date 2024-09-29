import c from "./MovieList.module.css";

import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../servers/api";
import { Link } from "react-router-dom";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);

  return (
    <div className={c.container}>
      <ul className={c.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={c.movieItem}>
            <Link to={`/movies/${movie.id}`} className={c.movieLink}>
              <p className={c.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
