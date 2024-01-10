import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
        <a href='/' className='siteTitle'>Rubik's Cube Solver</a>
        <div className='sourceLinks'>
          <a  href='https://github.com/Arpan3323/Rubiks-Cube-Solver' target='_blank' rel="noreferrer">Back-End Source Code</a>
          <a  href='https://github.com/Arpan3323/rubiks-cube-frontend' target='_blank' rel="noreferrer">Front-End Source Code</a>
        </div>
    </div>
  )
}

export default Navbar