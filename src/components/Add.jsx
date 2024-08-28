import React, { useState } from 'react'
import Movie from './MovieCards'
const Add = () => {
    const [inputValue, setInputValue] = useState("")
    const [movies, setMovies]  = useState([])

    // get movie when click Enter
    const handleKeyDown = (e)=>{
        if (e.key === "Enter"){
            getMovie()
        }
    }
    const getMovie = ()=>{
        if(inputValue.trim()){
            fetch(`https://www.omdbapi.com/?s=${inputValue}&apikey=e028bec7`)
            .then((res)=>res.json())
            .then((data)=>setMovies([...data?.Search]))
        }
    }
  return (
   <div>
    {/* search section */}
     <div className='container mt-4 flex justify-center'>
         <div className='flex gap-4 '> 
         <div className='flex flex-1'>
            <input
            placeholder='search for movie'
            onKeyDown={handleKeyDown}
            onChange={(e)=>setInputValue(e.target.value)}
            value={inputValue}
            className='border-2 w-full h-9 p-2'
             type="text" />
            </div>
            <button 
            onClick={()=>getMovie()}
            className='py-2 px-4 bg-black text-white rounded-md'>search</button>
         </div>
    </div>
    {/* list of movies section */}
    <div className='container'>
    {movies.length > 0 && <ul>
        {
            movies.map((item)=>(
                <li>
                    <Movie key={item.imdbID} movie={item}/>
                </li>
            ))
        }
        </ul>}
    </div>
   </div>
  )
}

export default Add