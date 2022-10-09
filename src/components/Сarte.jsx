import React, { useState } from 'react'
import { CarteItem } from './CarteItem'
import { Filters } from './Filters'

export const Сarte = () => {

    const initialState = [
        { id: 1, name: 'Drp Cofee', img: '../../design/food_1.png', price: '$8.85', category: 'Cofee' },
        { id: 2, name: 'Choco Cup Cake', img: '../../design/food_2.png', price: '$4.85', category: 'Quafe Cake' },
        { id: 3, name: 'Chicken Burger', img: '../../design/food_3.png', price: '$8.85', category: 'Fast Food' },
        { id: 4, name: 'French Fries', img: '../../design/food_4.png', price: '$7.85', category: 'Fast Food' },
        { id: 5, name: 'Sandwitch', img: '../../design/food_5.png', price: '$3.97', category: 'Snacks' },
        { id: 6, name: 'Chinese Soup', img: '../../design/food_6.png', price: '$8.85', category: 'Fast Food' },
        { id: 7, name: 'Quafe Brade', img: '../../design/food7.png', price: '$7.85', category: 'Quafe Cake' },
        { id: 8, name: 'Dalgona Cofee', img: '../../design/food8.png', price: '$4.97', category: 'Cofee' },
        { id: 9, name: 'Chowmin Noodle', img: '../../design/food9.png', price: '$8.85', category: 'Fast Food' },
        { id: 10, name: 'Coka Cola', img: '../../design/food10.png', price: '$7.85', category: 'Cocktails' },
        { id: 11, name: 'Fruit Salad', img: '../../design/food11.png', price: '$3.97', category: 'Snacks' },
        { id: 12, name: 'Cocktail', img: '../../design/food12.png', price: '$8.85', category: 'Cocktails' },
    ];

    const [data, setData] = useState(initialState)

    return (
        <div className='carte'>
            <Filters setData={setData} initialState={initialState} />
            <div className='carte__container'>
                {data.map(e => (
                    <CarteItem
                        {...e}
                        key={e.id}
                    />
                ))
                }
            </div>
        </div>
    )
}
