import toast, { Toaster } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const handleChange = ({ target }) => {
    const value = target.value
    target.value
      ? setSearchParams({ query: value })
      : setSearchParams({});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (query.trim() === "") {
      toast("Please enter search term!");
      return;
    }

    onSearch(query);
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
