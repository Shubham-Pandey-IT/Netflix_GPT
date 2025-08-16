import React from "react";
import MoviesCard from "./MoviesCard";

const MoviesList = ({ title, movies }) => {
  if (!movies || movies.length === 0) return null;
  return (
    <div className="p-5">
      <h1 className="text-xl font-bold text-white py-5">{title}</h1>{" "}
      <div className="flex overflow-x-scroll scrollbar-hidden px-12">
        <div className="flex gap-4 ">
          {movies.map((movie) => (
            <MoviesCard key={movie.id} IMG_PATH={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
