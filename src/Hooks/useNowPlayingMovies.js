import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowplayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const get_Now_Playing_Movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowplayingMovies(json.results));
  };
  useEffect(() => {
    get_Now_Playing_Movies();
  }, []);
};

export default useNowPlayingMovies;
