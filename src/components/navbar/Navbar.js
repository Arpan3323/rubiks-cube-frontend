import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='/' className='siteTitle'>Rubik's Cube Solver</a>
        <ul>
            <li><a href='/'>Learn</a></li>
            <li><a href='/'>Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar