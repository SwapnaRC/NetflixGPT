import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { LOGIN_BACKGROUND_IMAGE } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-20 ">
        <img
          alt="background-login"
          className="md:visible invisible"
          src={LOGIN_BACKGROUND_IMAGE}
        />
      </div>
      <div className="min-h-full md:bg-transparent bg-black">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
