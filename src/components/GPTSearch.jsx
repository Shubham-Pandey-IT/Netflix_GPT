import React, { useRef } from "react";
import OPEN_AI from "../utils/openAI";
import { mockGPTResponses } from "../utils/mockGptResponse";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";
import { tmdbMovieResults } from "../utils/GPTSlice";

const GPTSearch = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);

  const searchMovieTmdB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const query = searchText.current.value.toLowerCase();

    // Pick a mock response based on query or use default
    const matchedCategories = Object.keys(mockGPTResponses).filter((cat) =>
      query.includes(cat)
    );

    //mockGPTResponseArray
    const responseArray = matchedCategories.length
      ? matchedCategories.flatMap((cat) => mockGPTResponses[cat])
      : [];
    //console.log(responseArray);
    //for each movie we map TMdB Api
    const promishArray = responseArray.map((movies) => searchMovieTmdB(movies));

    const tmdbResults = await Promise.all(promishArray);
    console.log(tmdbResults);

    dispatch(
      tmdbMovieResults({
        moviesNames: responseArray,
        moviesResults: tmdbResults, // array of arrays
      })
    );
  };

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <form
        className="flex w-full max-w-2xl rounded-2xl shadow-lg p-4 bg-white/10 backdrop-blur-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want to watch?"
          className="flex-grow py-3 px-4 rounded-l-2xl outline-none text-gray-200 bg-neutral-800 placeholder-gray-400"
        />
        <button
          onClick={handleGPTSearch}
          className="px-6 py-3 bg-amber-600 text-white font-semibold rounded-r-2xl hover:bg-amber-500 transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearch;
