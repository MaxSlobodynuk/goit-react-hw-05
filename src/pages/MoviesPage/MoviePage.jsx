import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../../movies-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [searchParam, setSearchParams] = useSearchParams();
  const query = searchParam.get("query") ?? "";

  useEffect(() => {
    if (!query) return;
    const getFilm = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMoviesByQuery(query);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [query]);

    const handleChange = ({ target }) => {
      const value = target.value;
      value ? setSearchParams({ query: value }) : setSearchParams({});
    };

  return (
    <div>
      <SearchBar handleChange={handleChange} query={query} />
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviePage;
