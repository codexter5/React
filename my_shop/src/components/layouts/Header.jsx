import React from 'react'
import { BiLogIn, BiSearchAlt } from "react-icons/bi";
import { BsPersonPlus, BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className='bg-slate-800 text-white'>
        <nav className='grid grid-cols-4'>
          <h1 className='col-span-1 text-center hover:font-bold cursor-pointer flex items-center justify-center'>Kathford Store</h1>
          <div className='col-span-2 flex items-center px-5 py-2'>
            <input type="search" className='bg-slate-200 border-0 outline-0 text-slate-700 px-2 h-full w-full rounded-l-md' />
            <button className='bg-slate-500 h-full p-2 rounded-r-md'> 
              <BiSearchAlt />
            </button>
          </div>
          <div className='col-span-1 flex items-center
          gap-10'>
            <Link to={'/login'}>
              <BiLogIn/>
            </Link>
            <Link to={'/register'}>
              <BsPersonPlus/>
            </Link>
            <Link to={'/cart'}>
              <BsCart/>
            </Link>
          </div>
        </nav>
        <menu className='flex justify-evenly bg-slate-700 text-white py-2'>
          <li className='hover:underline hover:font-bold text-xl cursor-pointer'>Home</li>
          <Link to={'/About'}>
          <li className='hover:underline hover:font-bold text-xl cursor-pointer'>About</li>
          </Link>
          <Link to={"/contact"}>
          <li className='hover:underline hover:font-bold text-xl cursor-pointer'>Contact</li>
          </Link>
          <li className='hover:underline hover:font-bold text-xl cursor-pointer'>Services</li>
          <li className='hover:underline hover:font-bold text-xl cursor-pointer'>Blogs</li>
        </menu>
      </header>
    </>
  );
}

export default Header