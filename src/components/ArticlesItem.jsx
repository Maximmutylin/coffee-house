import React from 'react'
import { Link } from 'react-router-dom';

export const ArticlesItem = (props) => {

    const {
        img,
        author,
        name,
        date,
        id,
    } = props;

    return (
        <div className='articlesitem'>
            <div className="articlesitem__container">
                <img className="articlesitem__img" src={img} alt={name} />
                <div className="articlesitem__info">
                    <div className="articlesitem__author">
                        <img src="../../design/iconMan.svg" alt="man" />
                        <div className="articlesitem__info">
                            <div className="articlesitem__name">{author}</div>
                            <div className="articlesitem__date">{date}</div>
                        </div>
                    </div>
                    <h3 className="articlesitem__title">{name}</h3>
                    <Link to={`/blog/${id}`} className="articlesitem__link">Read More</Link>


                </div>


            </div>

        </div>
    )
}
