import React, { createContext, useEffect, useMemo, useState } from "react";
export const Watchlist_Context = createContext();

const WatchlistContext = ({ children }) => {
  const [watch_List, setWatch_List] = useState(() => {
    const savedList = localStorage.getItem("watchlist");
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return [];
    }
  });
  const [watched, setWatched] = useState(() => {
    const savedList = localStorage.getItem("watched");
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watch_List));
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watch_List, watched]);

  
  const AddToWatchList = (movie,isInWatchList,isWatched) => {
    if(!isInWatchList)
      setWatch_List([...watch_List, movie]);
    if(isWatched)
      setWatched(watched.filter((item) => item.imdbID !== movie.imdbID));
  };

  const addToWatched = (movie,isWatched,isInWatchList) => {
    if(!isWatched){
      setWatched([...watched, movie]);
      if(isInWatchList)
      setWatch_List(watch_List.filter((item) => item.imdbID !== movie.imdbID));
    }
  };
  const removeMovie = (movie,isInWatchList,isWatched)=>{
    if(isInWatchList)
      setWatch_List(watch_List.filter((item) => item.imdbID !== movie.imdbID));
    else 
    if(isWatched)
      setWatched(watched.filter((item) => item.imdbID !== movie.imdbID));
  }
  const removeFromWatched = (movie,isInWatchList,isWatched)=>{
    AddToWatchList(movie,isInWatchList,isWatched);
    removeMovie(movie,isInWatchList,isWatched)
  }
  return (
    <Watchlist_Context.Provider
      value={{ watch_List, setWatch_List, watched, setWatched,AddToWatchList,
        addToWatched, removeMovie,removeFromWatched
       }}
    >
      {children}
    </Watchlist_Context.Provider>
  );
};

export default WatchlistContext;
