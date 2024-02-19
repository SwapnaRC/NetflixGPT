import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  return (
    <div>
      <MovieList title={"Now Playing"} movies={movies.nowplaying} />
      {/* Movie list -poulat
    moviecard * n 
    movie - now playing
    movie - trending
    movie- horror */}
    </div>
  );
};

export default SecondaryContainer;
