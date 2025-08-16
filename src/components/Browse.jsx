import useHorrorMovies from '../Hooks/useHorrorMovies';
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies';
import usePopularMovies  from "../Hooks/usePopularMovies";
import useComedyMovies from '../Hooks/useComedyMovies';
import useUpcomingMovies from '../Hooks/useUpcomingMovies';
import Header from './Header';
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useComedyMovies();
  useUpcomingMovies();
  useHorrorMovies();

  return (
    <div className='flex flex-col'>
      <Header />
      <MainContainer/>
      <SecondaryContainer/> 
    </div>
  );
};

export default Browse;
