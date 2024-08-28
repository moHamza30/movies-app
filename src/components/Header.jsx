import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container flex justify-between bg-black text-white mt-4 p-2'>
        <Link to={"/"}><div className='text-xl font-bold'>Movies</div></Link>
        <ul className='flex gap-3 items-center'>
            <NavLink to={"/"}><li>WatchList</li></NavLink>
            <NavLink to={"/watched"}><li>Watched</li></NavLink>
            <NavLink to={"/add"}><li className='bg-green-600 rounded-md py-1 px-2'>Add</li></NavLink>
        </ul>
    </div>
  )
}

export default Header