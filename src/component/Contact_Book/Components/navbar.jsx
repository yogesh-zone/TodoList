import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='bg-slate-800 h-12 flex items-center text-white font-bold'>
        <Link to="/" className='px-2 py-2' >React Redux Contact App</Link>
    </nav >
  )
}

export default Navbar