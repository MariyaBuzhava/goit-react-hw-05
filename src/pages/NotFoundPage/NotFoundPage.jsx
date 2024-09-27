import c from "./NotFoundPage.module.css";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className={c.notFoundContainer}>
      <h2 className={c.notFoundMessage}>Sorry, this page is not found...</h2>
      <Link to="/" className={c.homeLink}>
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
