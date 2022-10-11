import React, { useState } from 'react'
import { useResizeWidth } from '../hooks/use-resize-width';

export const Filters = ({ setData, initialState }) => {

    const size = useResizeWidth();

    const [indexActive, setIndexActive] = useState(0);

    const clickHandler = (name, index) => {
        setIndexActive(index);
        if (name === 'All') return setData(initialState);

        setData(initialState.filter(e => e.category === name));

    }

    const categories = ['All', 'Fast Food', 'Cofee', 'Cocktails', 'Quafe Cake', 'Snacks']

    const changeHandler = event => {
        const target = event.target.value;

        if (target === 'All') return setData(initialState);

        setData(initialState.filter(e => e.category === target))
    }


    return (
        <div className='filters'>
            {
                size <= 768
                    ? <><h4 className='select__title'>Filters</h4>
                        <select className='select__filter' onChange={(event) => changeHandler(event)}>
                            {categories.map((el, i) => (
                                <option key={i} value={el} >{el}</option>

                            ))}
                        </select>
                    </>
                    : <ul className='filters__container'>
                        {categories.map((el, i) => (
                            <li key={i} onClick={() => clickHandler(el, i)} className={`filters__item ${indexActive === i ? 'filters__item--active' : ''}`}>{el}</li>
                        ))}
                    </ul>
            }



        </div >
    )
}
