import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmVkZTAwYjc5NzM0MWU1MDkyMmJkYTZlMzc5ODlkNCIsInN1YiI6IjY1ZmYyNTc4MTk3ZGU0MDE4NjE4YjU4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._NDeNfRRciTOXCeQG7ECZGqs-DAoBQIZe-235sGZBVc",
  },
};

export const fetchPicturesWithTopic = async () => {
  const data = await axios.get(`trending/movie/day`, options);
  return data;
};