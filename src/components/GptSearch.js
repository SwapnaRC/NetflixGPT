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
          src={LOGIN_BACKGROUND_IMAGE}
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
