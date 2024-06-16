import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { getMovieDetails } from "../../movies-api";
import { Suspense, useEffect, useRef, useState } from "react";
import Film from "../../components/Film/Film";

const MovieDetailsPage = () => {
  const [film, setFilm] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const location = useLocation();

  const backLinkHref = useRef(location.state ?? "/movies");

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
      <Link className="backButton" to={backLinkHref.current}>
        ◀ go back
      </Link>
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {film && <Film details={film} />}
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
