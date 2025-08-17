import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "GPT",
  initialState: {
    showGPTsearch: false,
    moviesResults: null,
    moviesNames: null,
  },
  reducers: {
    toggleGPTsearchView: (state) => {
      state.showGPTsearch = !state.showGPTsearch;
    },
    tmdbMovieResults: (state, action) => {
      const { moviesNames, moviesResults } = action.payload;
      state.moviesResults = moviesResults;
      state.moviesNames = moviesNames;
    },
  },
});

export const { toggleGPTsearchView, tmdbMovieResults } = GPTSlice.actions;
export default GPTSlice.reducer;
