import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className='py-2 my-5 text-center text-3xl font-semibold'>TO-DO</div>
      <nav className='flex flex-row justify-around'>
        <NavLink className='px-10 py-3 mb-10 font-bold' to='/add'>ADD</NavLink>
        <NavLink className='px-10 py-3 mb-10 font-bold' to='/delete'>DELETE</NavLink>
        <NavLink className='px-10 py-3 mb-10 font-bold' to='/edit'>EDIT</NavLink>
        <NavLink className='px-10 py-3 mb-10 font-bold' to='/list'>LIST</NavLink>
      </nav>
    </>
  )
}

export default Navbar
