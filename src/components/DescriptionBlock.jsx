import React from 'react'

export const DescriptionBlock = () => {
    return (
        <div className='description'>
            <div className="description__container">
                <div className="description__info">
                    <div className="description__quotes">“</div>
                    <div className="description__text">Edit this text to make it your own. To edit, simply click directly on the text to start adding your own words. You can move the text by dragging and dropping the text</div>

                    <div className="description__comment">
                        <div className="description__user">
                            <div className="description__name">Joheny Andro</div>
                            <div className="description__city">Bhubaneswar, Odisha</div>
                        </div>

                        <img className="description__img" src='../../design/men.svg' alt='man' />

                    </div>
                </div>
                <div className="description__video">
                    <video controls="controls" width='100%' height='100%' poster='../../design/poster.png'>
                        <source src="../../design/coffee.mp4"/>
                    </video>
                </div>


            </div>

        </div>
    )
}
