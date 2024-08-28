import React, { useContext, useMemo } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { GoEyeClosed } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { Watchlist_Context } from "../context/WatchlistContext";
const MoviePosters = ({ isWatched, movie }) => {
  const { watch_List, removeMovie, removeFromWatched,watched, addToWatched } =
    useContext(Watchlist_Context);

  const isInWatchList = useMemo(
    () => watch_List.some((item) => item.imdbID === movie.imdbID),
    [watch_List]
  );
  const isInWatched = useMemo(
    () => watched.some((item) => item.imdbID === movie.imdbID),
    [watched]
  );
  return (
    <div className="relative w-[150px] h-[200px] mt-5">
      <img className="w-full h-full" src={movie.Poster} alt="movie-img" />
      {/* absolute buttons */}
      <div
        className="flex gap-3 bg-black text-white w-full  justify-center p-1
          absolute"
      >
        {isWatched ? (
          <GoEyeClosed onClick={() => removeFromWatched(movie,isInWatchList,isWatched)} />
        ) : (
          <FaEye
            onClick={() => addToWatched(movie, isInWatched, isInWatchList)}
          />
        )}
        <IoIosCloseCircle
          onClick={() => removeMovie(movie, isInWatchList, isWatched)}
        />
      </div>
    </div>
  );
};

export default MoviePosters;
