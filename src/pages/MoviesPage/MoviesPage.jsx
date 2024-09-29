import c from "./MoviesPage.module.css";

import { Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { fetchSearchMovie } from "../../servers/api";

const MoviesPage = () => {
  const initialValues = {
    query: "",
  };

  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (values) => {
    if (values.query.trim() === "") {
      return;
    }
    setQuery(values.query);
    console.log(values.query);
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;
      const data = await fetchSearchMovie(query);
      setMovies(data.results);
      console.log(data.results);
    };

    searchMovies();
  }, [query]);

  const FilteredMovies = useMemo(
    () =>
      movies.filter((movie) =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      ),
    [query, movies]
  );

  return (
    <div className={c.container}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={c.form}>
          <Field
            name="query"
            placeholder="Enter movie title"
            className={c.field}
          />
          <button type="submit" className={c.button}>
            Search
          </button>
        </Form>
      </Formik>
      {FilteredMovies.length > 0 ? (
        <MovieList movies={FilteredMovies} />
      ) : (
        query && <p className={c.noMovies}>No movies found</p>
      )}
    </div>
  );
};

export default MoviesPage;
