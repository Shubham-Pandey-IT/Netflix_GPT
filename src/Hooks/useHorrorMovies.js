import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addHorrorMovies } from "../utils/moviesSlice"; // ✅ reducer me action add karna hoga
import { useEffect } from "react";

const useHorrorMovies = () => {
  const dispatch = useDispatch();

  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=27&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addHorrorMovies(json.results));
  };

  useEffect(() => {
    getHorrorMovies();
  }, []);
};

export default useHorrorMovies;