// import c from './MovieList.module.css'

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
    <div>
      <h2>Trending movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={movie.id.toString()}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
