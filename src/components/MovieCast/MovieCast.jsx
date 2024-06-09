import { useEffect, useState } from "react";
import { getMovieCredits } from "../../movies-api";
import { useParams } from "react-router-dom";
import css from "./MovieCast.module.css";


const MovieCast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        setLoading(true);
        setError(false);
        const { data } = await getMovieCredits(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getCast();
  }, [movieId]);
  
  return (
    <section>
      {loading && <p>loading...</p>}
      {error && <p>Unstable connection, please try again</p>}
      {cast.length > 0 && <div>
        {cast.map((item) => (
          <div
            key={item.cast_id}
            className={css.cast}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
              className={css.imgCast}
              alt={item.name}
            />
            <div className="card-body">
              <h5>{item.name}</h5>
              <p>{item.character}</p>
            </div>
          </div>
        ))}
      </div>}
    </section>
  );
};

export default MovieCast;
