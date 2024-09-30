import c from "./MovieList.module.css";

import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieSearch }) => {
  const movies = movieSearch || [];
  const location = useLocation();

  if (!movies || movies.length === 0) {
    return <p className={c.noMovies}>No movies available.</p>;
  }

  return (
    <div className={c.container}>
      <ul className={c.movieList}>
        {movies.map((movie) => (
          <li key={movie.id} className={c.movieItem}>
            <Link
              to={`/movies/${movie.id}`}
              className={c.movieLink}
              state={location}
            >
              <p className={c.movieTitle}>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
