import css from "./Film.module.css";

const Film = ({ details }) => {

  return (
    <div className={css.movieCard}>
      <div className={css.movieImage}>
        <img
          src={`https://image.tmdb.org/t/p/w500${details.backdrop_path}`}
          alt={details.title}
        />
      </div>
      <div className={css.movieDetails}>
        <h2 className={css.movieTitle}>{details.title}</h2>
        <div className={css.movieRating}>
          User Score: {details.vote_average}
        </div>
        <h3 className={css.movieTitleOption}>Overview</h3>
        <p className={css.movieDescription}>{details.overview}</p>
        <h3 className={css.movieTitleOption}>Genres</h3>
        <ul>
          {details.genres &&
            details.genres.map((item) => <li key={item.id}>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Film;
