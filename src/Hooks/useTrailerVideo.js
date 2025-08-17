import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingTrailer = useSelector(
    (store) => store.movies.nowPlayingTrailer
  );

  const getMovieData = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/videos?language=en-US",
        API_OPTION
      );
      const json = await res.json();

      const trailer =
        json.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        ) || json.results[0];

      dispatch(addTrailerVideo(trailer));
    } catch (err) {
      console.error("Failed to fetch trailer:", err);
    }
  };

  useEffect(() => {
    if (!nowPlayingTrailer) getMovieData();
  }, []);
};
export default useTrailerVideo;
