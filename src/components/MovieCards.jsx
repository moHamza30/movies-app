import React, { useContext, useMemo, useState } from "react";
import { Watchlist_Context } from "../context/WatchlistContext";
const Movie = ({ movie }) => {
  const { watch_List, setWatch_List, watched, setWatched,AddToWatchList,addToWatched } =
    useContext(Watchlist_Context);

    const isInWatchList = useMemo(
      () => watch_List.some((item) => item.imdbID === movie.imdbID),
      [watch_List]
    );
    const isWatched = useMemo(
      () => watched.some((item) => item.imdbID === movie.imdbID),
      [watched]
    );
 
  return (
    <div className="card flex gap-3 my-4">
      {/* image */}
      <div className="image ">
        {movie.Poster ? (
          <img
            className="w-[120px] h-[150px] rounded-sm"
            src={movie.Poster}
            alt="movie-poster"
          />
        ) : (
          <div></div>
        )}
      </div>
      {/* information */}
      <div className="flex flex-col self-end">
        <div>
          <h3 className="font-semibold">{movie.Title}</h3>
          <h4 className="py-3">{movie.Year}</h4>
        </div>
        <div className="flex gap-4 mt-3">
          <button
            onClick={()=> AddToWatchList(movie,isInWatchList,isWatched)}
            className={`${
              isInWatchList ? "bg-black" : "bg-green-500"
            } py-2 px-4 rounded-sm text-white`}
          >
            {isInWatchList ? "Added to Watch list" : "Add to watch list"}
          </button>
          <button
            onClick={() => addToWatched(movie,isWatched,isInWatchList)}
            className={`${
              isWatched ? "bg-black" : "bg-green-500"
            } py-2 px-4 rounded-sm text-white`}
          >
            {isWatched ? "Added to Watched" : "Add to Watched"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movie;
