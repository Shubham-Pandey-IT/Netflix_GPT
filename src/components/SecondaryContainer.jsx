import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="z-10 -mt-54  relative">
        <MoviesList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MoviesList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MoviesList title={"Horror"} movies={movies.horrorMovies} />
        <MoviesList title={"Comedy"} movies={movies.comedyMovies} />
        <MoviesList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
