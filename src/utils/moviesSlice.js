import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlayingTrailer: null,
    popularMovies: null,
    comedyMovies: null,
    upcomingMovies: null,
    horrorMovies: null, 
  },
  reducers: {
    addNowplayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addComedyMovies: (state, action) => {
      state.comedyMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addHorrorMovies: (state, action) => { 
      state.horrorMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.nowPlayingTrailer = action.payload;
    },
  },
});

export const {
  addNowplayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addComedyMovies,
  addUpcomingMovies,
  addHorrorMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
