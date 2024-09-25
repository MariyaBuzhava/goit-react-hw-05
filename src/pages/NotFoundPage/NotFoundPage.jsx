// import c from './NotFoundPage.module.css'

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Sorry, this page is not found...</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
