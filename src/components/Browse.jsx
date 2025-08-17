import useHorrorMovies from "../Hooks/useHorrorMovies";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import useComedyMovies from "../Hooks/useComedyMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GPTPAGE from "./GPTPAGE";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.GPT.showGPTsearch);

  useNowPlayingMovies();
  usePopularMovies();
  useComedyMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      {showGPTSearch ? (
        <GPTPAGE />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
