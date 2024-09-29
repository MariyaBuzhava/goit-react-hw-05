import c from "./HomePage.module.css";

import MovieList from "../../components/MovieList/MovieList.jsx";

const HomePage = () => {
  return (
    <div className={c.homeContainer}>
      <h2 className={c.trendingTitle}>Trending Movies</h2>
      <MovieList />
    </div>
  );
};

export default HomePage;
