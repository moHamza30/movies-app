import React, { useContext } from 'react'
import { Watchlist_Context } from '../context/WatchlistContext'
import MoviePosters from './MoviePosters';

const Watched = () => {
  const {watched,setWatched} = useContext(Watchlist_Context)

  return (
    <div className='container mt-5'>
       <div className="text-2xl font-bold p-2">watched list</div>
      <div className=' flex flex-wrap gap-4 p-2'>
       {watched.map((movie) => {
        const isWatched = watched.some((item) => item.imdbID === movie.imdbID);
        return (
          <MoviePosters  key={movie.imdbID} isWatched={isWatched} movie={movie}/>
        );
      })}
    </div>
    </div>
  )
}

export default Watched