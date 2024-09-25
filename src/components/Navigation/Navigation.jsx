import c from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviesPage";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(c.link, isActive && c.activeLink);
  };

  return (
    <div className={c.wrapper}>
      <NavLink to="/" className={buildLinkClass}>
        <HomePage />
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        <MoviesPage />
      </NavLink>
    </div>
  );
};

export default Navigation;
