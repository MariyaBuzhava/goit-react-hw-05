import c from "./MovieDetailsPage.module.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTrendingMoviesById } from "../../servers/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMoviesById(movieId);
      setMovie(data);
      console.log(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <>
      <Link to="/" className={c.link}>
        ← Go back
      </Link>
      <div className={c.container}>
        <div className={c.backdrop}>
          {movie.backdrop_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
              alt={movie.title}
            />
          )}
        </div>

        <div className={c.poster}>
          {movie.poster_path && (
            <img
              className={c.posterImage}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          )}
        </div>

        <div className={c.textContainer}>
          <h3>{movie.title}</h3>
          <p>
            <strong>Overview: </strong> {movie.overview}
          </p>
          <p>
            <strong>Genres: </strong>
            {movie.genres.map((genre) => genre.name).join(", ")}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieDetailsPage;
