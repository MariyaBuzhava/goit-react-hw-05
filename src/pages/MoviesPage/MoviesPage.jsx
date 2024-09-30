import c from "./MoviesPage.module.css";

import { Field, Form, Formik } from "formik";
import { useEffect, useMemo, useState } from "react";
import MovieList from "../../components/MovieList/MovieList.jsx";
import { fetchSearchMovie } from "../../servers/api";
import { useSearchParams } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const initialValues = {
    query: query || "",
  };

  const handleSubmit = (values) => {
    if (values.query.trim() === "") {
      return;
    }

    searchParams.set("query", values.query);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const searchMovies = async () => {
      if (!query) return;
      const data = await fetchSearchMovie(query);
      setMovies(data.results || []);
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
        <MovieList movieSearch={FilteredMovies} />
      ) : (
        query && <p className={c.noMovies}>No movies available.</p>
      )}
    </div>
  );
};

export default MoviesPage;
