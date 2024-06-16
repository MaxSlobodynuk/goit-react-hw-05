import toast, { Toaster } from "react-hot-toast";
// import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

const SearchBar = ({ handleChange, query }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      toast("Please enter search term!");
      return;
    }

    evt.target.reset();
  };

  return (
    <div className={css.header}>
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="picture"
          value={query}
          onChange={handleChange}
          autoComplete="off"
          placeholder="Search movies"
        />
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SearchBar;
