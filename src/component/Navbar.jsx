import React from 'react'
import { Link } from 'react-router-dom'
import '../make/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <Link className='nav-butn' to="/">HOME</Link>
      <Link className='nav-butn' to="/abo">ABOUT</Link>
      <Link className='nav-butn' to="/ser">SERVICE</Link>
      <Link className='nav-butn' to="/features">FEATURES</Link>
      <Link className='nav-butn' to="/gallery">GALLERY</Link>
      <Link className='nav-butn' to="/con">CONTACT</Link>
    </div>
  )
}

export default Navbar
