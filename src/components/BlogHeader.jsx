import React from 'react'
import { Link } from 'react-router-dom';


export const BlogHeader = (props) => {

    const trendItem = props.posts.filter(el => el.trend === true)

    const {
        author,
        name,
        date,
        id,
    } = trendItem[0];

    return (
        <div className='blog'>
            <div className="blog__maintitile">Featured Blogs</div>

            <div className="blog__container">
                <div className="blog__left">
                    <div className="blog__window">Trending</div>

                    <div className="blog__title">{name}</div>

                    <div className="blog__row">

                        <div className="blog__author">
                            <img className="blog__icon" src='../../design/iconMan.svg' alt='man' />

                            <div className="blog__col">
                                <div className="blog__name">{author}</div>
                                <div className="blog__data">{date}</div>
                            </div>
                        </div>

                        <Link to={`/blog/${id}`} className='blog__link'>Read More</Link>
                    </div>

                </div>
                <div className="blog__right">
                    <div className="blog__item">
                        <img src="../../design/Blog3 (1).png" alt="info blog" className="blog__img" />
                        <div className="blog__info">
                            <div className="blog__subtitle">You can move the text by dragging and dropping the text </div>
                            <div className="blog__text">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>

                    </div>
                    <div className="blog__item">
                        <img src="../../design/Blog3 (2).png" alt="info blog" className="blog__img" />
                        <div className="blog__info">
                            <div className="blog__subtitle">You can move the text by dragging and dropping the text </div>
                            <div className="blog__text">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>

                    </div>
                    <div className="blog__item">
                        <img src="../../design/Blog3 (3).png" alt="info blog" className="blog__img" />
                        <div className="blog__info">
                            <div className="blog__subtitle">You can move the text by dragging and dropping the text </div>
                            <div className="blog__text">Writing UX copies can be a little frustrating and confusing, and sometimes </div>
                        </div>

                    </div>

                </div>


            </div>

        </div>
    )
}
