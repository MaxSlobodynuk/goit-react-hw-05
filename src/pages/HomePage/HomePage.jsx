import { useEffect, useState } from "react";
import { getTrendingMovies } from "../../movies-api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
};

export default HomePage;
