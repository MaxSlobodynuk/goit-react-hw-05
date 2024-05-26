import { Link, Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import { useEffect, useState } from "react";
import Film from "../../components/Film/Film";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const getFilm = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMovieDetails(movieId);
        setFilm(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getFilm();
  }, [movieId]);

  return (
    <div>
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {film && <Film details={film} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Cast</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
