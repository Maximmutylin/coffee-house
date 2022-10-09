import React from 'react'

export const CarteItem = ({ name, price, img, category }) => {
    return (
        <div className='carteItem'>
            <img className="carteItem__img" src={img} alt={name} />
            <div className="carteItem__flex">
                <div className="carteItem__name">{name}</div>
                <div className="carteItem__price">{price}</div>
            </div>


        </div>
    )
}
