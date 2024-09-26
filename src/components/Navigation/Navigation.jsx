import c from "./Navigation.module.css";

import { NavLink } from "react-router-dom";
import clsx from "clsx";

const Navigation = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(c.link, isActive && c.activeLink);
  };

  return (
    <div className={c.wrapper}>
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={buildLinkClass}>
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
