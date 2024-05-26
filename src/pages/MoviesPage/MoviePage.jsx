import { useEffect, useState } from "react";
import { getMoviesByQuery } from "../../movies-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const MoviePage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
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

  const onSearch = async (value) => {
    setQuery(value);
  };

  return (
    <div>
      <SearchBar onSearch={onSearch} />
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default MoviePage;
