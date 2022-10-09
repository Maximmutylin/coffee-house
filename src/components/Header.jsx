import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='header__container'>
      <img src="../../design/Logo.svg" alt="logo" />

      <nav className="header__menu">
        <Link to='/' className="header__link">Home</Link>
        <Link to='/menu' className="header__link">Menu</Link>
        <Link to='/about' className="header__link">About Us</Link>
        <Link to='/story' className="header__link">Our Story</Link>
        <Link to='/blog' className="header__link">Blog</Link>
        <Link to='/contact' className="header__link">Contact</Link>
      </nav>

    </div>
  )
}
