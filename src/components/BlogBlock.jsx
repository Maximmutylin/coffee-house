import React from 'react'

export const BlogBlock = () => {
    return (
        <div className='posts'>
            <div className="posts__container">
                <h2 className="posts__title">Read Our Lastest Blog</h2>

                <div className="posts__body">
                    <div className="posts__item">
                        <div className="posts__date">21 Jun 2021</div>
                        <div className="posts__name">Extra Thick Homemad Pizza Sauce</div>
                        <div className="posts__text">It is a long established fact that a reader will be distracted by the readable content of a page.</div>
                        <img className="posts__img" src='../../design/post1.png' alt='post' />
                    </div>
                    <div className="posts__item">
                        <div className="posts__date">21 Jun 2021</div>
                        <div className="posts__name">The Best Way to Store Fresh Herbs</div>
                        <div className="posts__text">It is a long established fact that a reader will be distracted by the readable content of a page.</div>
                        <img className="posts__img" src='../../design/post2.png' alt='post' />
                    </div>
                    <div className="posts__item">
                        <div className="posts__date">21 Jun 2021</div>
                        <div className="posts__name">5 ways to prepare porridge</div>
                        <div className="posts__text">It is a long established fact that a reader will be distracted by the readable content of a page.</div>
                        <img className="posts__img" src='../../design/post3.png' alt='post' />
                    </div>
                </div>
            </div>
        </div >
    )
}
