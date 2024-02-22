import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langkey = useSelector((store)=> store.config.lang)
  return (
    <div className="pt-[7%] flex justify-center">
      <form className=" w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 col-span-3 m-4 bg-red-700 text-white rounded-lg ">
          {lang[langkey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
