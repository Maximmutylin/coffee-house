import React from 'react'
import ButtonBlackArrow from './ButtonBlackArrow'

export const FirstBlock = () => {
    return (
        <div className='first__container'>
            <div className="first__flex">
                <div className="first__text">
                    <h1 className="first__title">
                        We serve high quality foods of all kinds.
                    </h1>
                    <p className="first__subtitle">
                        Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text.
                    </p>
                    <ButtonBlackArrow />

                    <div className="first__list">
                        <div className="first__item">
                            <div className="first__item-title">Opening Times</div>
                            <div className="first__item-subtitle">Sunday to Saturday | 09:00 AM to 11:00 PM</div>
                        </div>
                        <div className="first__item">
                            <div className="first__item-title">Location</div>
                            <div className="first__item-subtitle">Master canteen, BBSR , Odisha 752054</div>
                        </div>
                        <div className="first__item">
                            <div className="first__item-title">Call us</div>
                            <div className="first__item-subtitle">+9776462441</div>
                        </div>
                    </div>
                </div>
                <div className="first__img">
                    <img src="../../design/Header Image.png" alt="coffee" />
                </div>


            </div>

        </div>)
}
