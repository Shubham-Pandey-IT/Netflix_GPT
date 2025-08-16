import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../Hooks/useTrailerVideo";

const Video_BG = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.nowPlayingTrailer);

  useTrailerVideo(movieId);
  if (!trailerVideo?.key) return <div>Loading trailer...</div>;

  return (
    <div className="z-0">
      <iframe
        className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
};

export default Video_BG;
