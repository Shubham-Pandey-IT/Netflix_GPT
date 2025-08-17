import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addNowplayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  const get_Now_Playing_Movies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowplayingMovies(json.results));
  };
  useEffect(() => {
    if (!nowPlayingMovies) get_Now_Playing_Movies();
  }, []);
};

export default useNowPlayingMovies;
