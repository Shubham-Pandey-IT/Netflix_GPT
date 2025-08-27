import React, { useRef } from "react";
import OPEN_AI from "../utils/openAI";
// import { mockGPTResponses } from "../utils/mockGptResponse";
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
    //const query = searchText.current.value.toLowerCase();

    const GPTQuery = `
        You are a Movie Recommendation System.
        User Query: ${searchText.current.value}

        Rules:
        - Recommend at most 5 movies only.
        - Return movie names separated by commas.
        - Do not give descriptions, just titles.
        Example: Sholay, Krish, Don, Sita Aur Gita, Hum Aapke Hain Kaun
        `;

    const matchedCategories = await OPEN_AI.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: GPTQuery }],
    });

    //console.log(matchedCategories);

    const movies_Text_list_array =
      matchedCategories.choices?.[0]?.message?.content.split(",");

    //for each movie we map TMdB Api
    const promishArray = movies_Text_list_array.map((movies) =>
      searchMovieTmdB(movies)
    );

    const tmdbResults = await Promise.all(promishArray);
    console.log(tmdbResults);

    dispatch(
      tmdbMovieResults({
        moviesNames: movies_Text_list_array,
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
