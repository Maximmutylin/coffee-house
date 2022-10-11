import React from 'react'
import { Link } from 'react-router-dom'

export const ItemBurger = ({ header, items, setMenuActive, menuActive }) => {
    return (
        <div className={menuActive ? 'menuitem active' : 'menuitem'} onClick={() => setMenuActive(false)}>
            <div className="menuitem__blur">
                <div className="menuitem__main" >
                    <div className="menuitem__header">{header}</div>
                    <ul>
                        {items.map(item => (
                            <li onClick={() => setMenuActive(false)}>
                                <Link to={item.href} > {item.value}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div >

        </div >
    )
}
