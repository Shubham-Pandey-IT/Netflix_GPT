import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer:null,
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo:(state , action) =>{
      state.nowPlayingTrailer = action.payload; 
    }
  },
});

export const { addNowplayingMovies ,addTrailerVideo} = moviesSlice.actions;
export default moviesSlice.reducer;
