import { IMAGE_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="movie-poster"
        src={
          posterPath !== null
            ? IMAGE_URL + posterPath
            : "https://www.prokerala.com/movies/assets/img/no-poster-available.webp"
        }
      />
    </div>
  );
};

export default MovieCard;
