import React, { useState } from 'react'

export const Filters = ({ setData, initialState }) => {

    const [indexActive, setIndexActive] = useState(0);


    const clickHandler = (name, index) => {
        setIndexActive(index);
        if (name === 'All') return setData(initialState);

        setData(initialState.filter(e => e.category === name));

    }

    const categories = ['All', 'Fast Food', 'Cofee', 'Cocktails', 'Quafe Cake', 'Snacks']

    return (
        <div className='filters'>
            <ul className='filters__container'>
                {categories.map((el, i) => (
                    <li key={i} onClick={() => clickHandler(el, i)} className={`filters__item ${indexActive === i ? 'filters__item--active' : ''}`}>{el}</li>
                ))}
            </ul>
        </div>
    )
}
