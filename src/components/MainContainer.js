import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  //   console.log(movies);
  const mainMovie = movies[0];
  console.log(mainMovie, "mainMovie");
  const { original_title, overview, id } = mainMovie;
  console.log(id, 'id')
  return (
    <div className="bg-slate-500">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
      MainContainer
    </div>
  );
};

export default MainContainer;
