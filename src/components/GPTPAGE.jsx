import React from "react";
import GPTSearch from "./GPTSearch";
import GPTMpviesSuggesion from "./GPTMpviesSuggesion";
import { Netflix_GPT_URL } from "../utils/constants";

const GPTPAGE = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <img
        src={Netflix_GPT_URL}
        alt="body_image"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <GPTSearch />
      <GPTMpviesSuggesion />
    </div>
  );
};

export default GPTPAGE;
