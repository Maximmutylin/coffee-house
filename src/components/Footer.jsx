import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer__container'>
            <img className='footer__logo' src="../../design/Logo.svg" alt="logo" />
            <div className="footer__menu">
                <Link to='/' className="footer__link">Home</Link>
                <Link to='/menu' className="footer__link">Menu</Link>
                <Link to='/about' className="footer__link">About Us</Link>
                <Link to='/story' className="footer__link">Our Story</Link>
                <Link to='/blog' className="footer__link">Blog</Link>
                <Link to='/contact' className="footer__link">Contact</Link>
            </div>

            <div className="footer__line"></div>

            <div className="footer__submenu">
                <div className="footer__date">@ {new Date().getFullYear()}</div>
                <div className="footer__social">
                    <img src="../../design/Negative.svg" alt="" />
                    <img src="../../design/2.svg" alt="" />
                    <img src="../../design/3.svg" alt="" />
                    <img src="../../design/4.svg" alt="" />
                </div>
                <Link to='/contact' className="footer__contacts">Contact Us</Link>
                

            </div>
        </div>
    )
}
