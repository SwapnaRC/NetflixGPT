import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <div>
      <h3>{title}</h3>

      <MovieCard />
    </div>
  );
};

export default MovieList;
