import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

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
     // console.log("Trailer key:", trailer.key);
    } catch (err) {
      console.error("Failed to fetch trailer:", err);
    }
  };

  useEffect(() => {
    getMovieData();
  }, []);
};
export default useTrailerVideo;
