// import c from './MovieDetailsPage.module.css'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
    <div>
      Movie Details for ID: {movieId}
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Genres:</strong>
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
    </div>
  );
};

export default MovieDetailsPage;
