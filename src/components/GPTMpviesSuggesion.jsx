import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const GPTMpviesSuggesion = () => {
  const { moviesNames, moviesResults } = useSelector((store) => store.GPT);
  // console.log('moviesNames:', moviesNames);
  // console.log('moviesResults:', moviesResults);

  if (!moviesNames) return null;

  return (
    <div className="bg-black bg-opaciti-80 text-white">
      <div>
        {moviesNames.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={moviesResults[index]}
          />
        ))}
      </div>
    </div>
  );
};


export default GPTMpviesSuggesion;
