import c from "./MovieDetailsPage.module.css";

import { Suspense, useEffect, useRef, useState } from "react";
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { fetchTrendingMoviesById } from "../../servers/api";
import clsx from "clsx";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      const data = await fetchTrendingMoviesById(movieId);
      setMovie(data);
    };
    getData();
  }, [movieId]);

  if (!movie) {
    return <div className={c.noMovies}>Movie not found</div>;
  }

  const buildLinkClass = ({ isActive }) => {
    return clsx(c.navlink, isActive && c.activeLink);
  };
  const defaultImgP =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  const defaultImgB =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+backdrop";

  return (
    <>
      <Link to={backLink.current} className={c.link}>
        ← Go back
      </Link>
      <div className={c.container}>
        <div className={c.backdrop}>
          <img
            src={
              movie.backdrop_path
                ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                : defaultImgB
            }
            width={1450}
            alt={movie.title}
          />
        </div>
        <div className={c.poster}>
          <img
            className={c.posterImage}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : defaultImgP
            }
            width={400}
            alt={movie.title}
          />
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
      <hr />
      <div className={c.additionalInfo}>
        <h4 className={c.heading}>Additional information</h4>
        <NavLink to="cast" className={buildLinkClass}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={buildLinkClass}>
          Reviews
        </NavLink>
      </div>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <hr />
    </>
  );
};

export default MovieDetailsPage;
