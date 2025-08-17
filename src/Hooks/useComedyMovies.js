import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addComedyMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useComedyMovies = () => {
  const dispatch = useDispatch();
  const comedyMovies = useSelector(store=>store.movies.comedyMovies);

  const getComedyMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?with_genres=35",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addComedyMovies(json.results));
  };

  useEffect(() => {
    if(!comedyMovies)
    getComedyMovies();
  }, []);
};

export default useComedyMovies;
