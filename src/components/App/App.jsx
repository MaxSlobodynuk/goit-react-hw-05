import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import MoviesPage from "../../pages/MoviesPage/MoviePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../../pages/MovieDetailsPage/MovieDetailsPage";
import Navigation from "../Navigation/Navigation";


const App = () => {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
