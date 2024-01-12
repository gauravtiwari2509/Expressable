import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <span className='logo'>
            EXPRESSABLE
        </span>
        <div className='nav-links'>
        <Link to='/' className='nav-Links-cont'>For Kids and Families</Link>
        <Link to='/' className='nav-Links-cont'>For Adults</Link>
        <Link to='/' className='nav-Links-cont'>About us</Link>
        <Link to='/' className='nav-Links-cont'>Learning Center</Link>
        <Link to='/' className='nav-Links-cont'>Send a Referral</Link>
        </div>
        <button className='getstarted'>
            Get Started
        </button>
      </div>
    </>
  )
}
