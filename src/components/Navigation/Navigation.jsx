// import c from './Navigation.module.css'

import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <HomePage />
      </NavLink>
      <NavLink to="/movies">
        <MoviesPage />
      </NavLink>
    </div>
  );
};

export default Navigation;
