import React from 'react'
import ButtonBlackArrow from './ButtonBlackArrow'
import { MenuHeader } from './MenuHeader'

export const SchemeBlock = () => {
    return (
        <div className='scheme'>
            <div className="scheme__container">
                
                <MenuHeader />

                <h4 className="scheme__popular">Most Popular Picks</h4>

                <div className="scheme__grid">
                    <div className='food'>
                        <img className="food__img" src='../../design/food_1.png' alt='food' />
                        <div className="food__flex">
                            <div className="food__name">Drp Cofee</div>
                            <div className="food__price">$08.85</div>
                        </div>
                    </div>
                    <div className='food'>
                        <img className="food__img" src='../../design/food_2.png' alt='food' />
                        <div className="food__flex">
                            <div className="food__name">Choco Cup Cake</div>
                            <div className="food__price">$4.85</div>
                        </div>
                    </div>
                    <div className='food'>
                        <img className="food__img" src='../../design/food_3.png' alt='food' />
                        <div className="food__flex">
                            <div className="food__name">Chicken Burger</div>
                            <div className="food__price">$8.85</div>
                        </div>
                    </div>
                    <div className='food'>
                        <img className="food__img" src='../../design/food_4.png' alt='food' />
                        <div className="food__flex">

                            <div className="food__name">French Fries</div>
                            <div className="food__price">$7.85</div>
                        </div>
                    </div>
                    <div className='food'>
                        <img className="food__img" src='../../design/food_5.png' alt='food' />
                        <div className="food__flex">

                            <div className="food__name">Sandwitch</div>
                            <div className="food__price">$3.97</div>
                        </div>
                    </div>
                    <div className='food'>
                        <img className="food__img" src='../../design/food_6.png' alt='food' />
                        <div className="food__flex">

                            <div className="food__name">Chinese Soup</div>
                            <div className="food__price">$08.85</div>
                        </div>
                    </div>
                </div>
                <div className='scheme__btn'>
                    <ButtonBlackArrow />
                </div>

            </div>

        </div>
    )
}
