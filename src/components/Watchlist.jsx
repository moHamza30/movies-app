import React, { useContext, useState } from "react";
import { Watchlist_Context } from "../context/WatchlistContext";


import MoviePosters from "./MoviePosters";

const Watchlist = () => {
  const {watch_List,watched} = useContext(Watchlist_Context);
  return (
    <div className="container mt-5 ">
    {watch_List.length > 0 ? (
        <>
    <div className="text-2xl font-bold p-2">my watch list</div>
      <div className=" flex flex-wrap gap-4 p-2">
      {watch_List.map((movie) => {
        const isWatched = watched.some((item) => item.imdbID === movie.imdbID);
        return (
          <MoviePosters  key={movie.imdbID} isWatched={isWatched} movie={movie} />
        );
      })}
      </div>
        </>
        )
      :
      <div className="text-gray-400">your watch list is empty, add some</div>
    }
    </div>
  );
};

export default Watchlist;
