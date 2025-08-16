import React from "react";
import Video_title from "./Video_title";
import Video_BG from "./Video_BG";
import { useSelector } from "react-redux";

const MainContainer = () => {
      const movies = useSelector((store) => store.movies?.nowPlayingMovies); // fixed typo
  if (!movies) return <div>Loading...</div>; // safe return

  const mainMovies = movies[0];
  const { original_title, overview, id} = mainMovies;
  return (
    <div>
        <Video_title title={original_title} overview={overview}/>
        <Video_BG movieId={id}/>
    </div>
  );
};

export default MainContainer;
