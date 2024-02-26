import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import Error from "./Error";
import { useDispatch, useSelector } from "react-redux";
import genAI from "../utils/genai";
import {
  API_OPTIONS,
  safetySettings,
  generation_config,
} from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt =
      "Act as a movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result Gadar, Sholay, Don, RRR, Kantara ";

    const result = await model.generateContent(
      prompt,
      safetySettings,
      generation_config
    );

    const response = await result.response;
    if (!response) {
      return <Error error={"API has some issue, its not responding"} />;
    }
    const text = response.text();
    const searchMovieResults = text.split(",");
    const promiseArray = searchMovieResults.map((movie) =>
      searchMovieTMDB(movie)
    );
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResults({
        movieNames: searchMovieResults,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <>
      <div className="pt-[60%] md:pt-[7%] flex justify-center">
        <form
          className=" w-full md:w-1/2 bg-black grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 md:col-span-9 col-span-8"
            placeholder={lang[langkey].gptSearchPlaceholder}
          />
          <button
            className="py-2 px-4 md:col-span-3 col-span-4 m-4 bg-red-700 text-white rounded-lg "
            onClick={handleGptSearchClick}
          >
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
