import c from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList.jsx";
import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../servers/api.js";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getAllMovies = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
    };
    getAllMovies();
  }, []);
  return (
    <div className={c.homeContainer}>
      <h2 className={c.trendingTitle}>Trending Movies</h2>
      <MovieList movieSearch={movies} />
    </div>
  );
};

export default HomePage;
