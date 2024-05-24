import { Link, Outlet } from "react-router-dom";

const MovieDetailsPage = () => {
  return (
    <div>
      <div>MovieDetailsPage</div>
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
}

export default MovieDetailsPage