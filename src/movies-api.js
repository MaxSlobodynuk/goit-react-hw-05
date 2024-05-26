import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmVkZTAwYjc5NzM0MWU1MDkyMmJkYTZlMzc5ODlkNCIsInN1YiI6IjY1ZmYyNTc4MTk3ZGU0MDE4NjE4YjU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NDeNfRRciTOXCeQG7ECZGqs-DAoBQIZe-235sGZBVc",
  },
};

export const getTrendingMovies = async () => {
  const data = await axios.get(`trending/movie/day`, options);
  return data;
};

export const getMoviesByQuery = async (query) => {
  const data = await axios.get(`search/movie?query=${query}`, options);
  return data;
};

export const getMovieDetails = async (movie_id) => {
  const data = await axios.get(`movie/${movie_id}`, options);
  return data;
};

export const getMovieCredits = async (movie_id) => {
  const data = await axios.get(`movie/${movie_id}/credits`, options);
  return data;
};

export const getMovieReviews = async (movie_id) => {
  const data = await axios.get(`movie/${movie_id}/reviews`, options);
  return data;
};
