import React, { useState } from 'react'
import { ItemBurger } from './ItemBurger'

export const HeaderBurger = () => {
    const [menuActive, setMenuActive] = useState(false)
    const items = [
        { value: 'Home', href: '/' },
        { value: 'Menu', href: '/menu' },
        { value: 'About us', href: '/about' },
        { value: 'Our Story', href: '/story' },
        { value: 'Blog', href: 'blog' },
        { value: 'Contact', href: 'contact' },
    ]

    return (
        <>
            <nav className='navbar'>

                <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
                    <span></span>
                </div>
                <ItemBurger menuActive={menuActive} setMenuActive={setMenuActive} items={items} header='Menu' />

            </nav>
            <img className='logo' src="../../design/Logo.svg" alt="Logo.svg" />


        </>
    )
}


