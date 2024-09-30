import axios from "axios";

const url = "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWU5NmI0MTUzNjFmZjc3YTJhNzgzZWI2YmE3ZjJiOCIsIm5iZiI6MTcyNzIwNTkxMy45NDYxMDYsInN1YiI6IjY2ZjMwZWJmNmMzYjdhOGQ2NDhlNGVmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SmRYPglm3fPfYYLX0g64HJd8nbXfdmccVbuTa14Qngk",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchTrendingMoviesById = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    options
  );
  return response.data;
};

export const fetchCredits = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    options
  );
  return response.data;
};

export const fetchReviews = async (movieId) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    options
  );
  return response.data;
};

export const fetchSearchMovie = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,
    { ...options, params: { query } }
  );
  return response.data;
};
