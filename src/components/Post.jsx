import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Map} from '../components/Map'

export const Post = () => {

    const { id } = useParams();

    const posts = [
        { id: 1, img: '../../design/articles-item/articlesItem1.png', name: 'A guide to Thai Curry', author: 'Andrew Jonson', date: '27th January 2021', trend: false, desctiption: '        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae veniam veritatis perspiciatis ratione similique doloribus rem voluptatum officiis eum, praesentium placeat laborum nobis provident' },
        { id: 2, img: '../../design/articles-item/articlesItem2.png', name: 'The best guacamole recipe with only 4 ingredients', author: 'Andrew Jonson', date: '27th January 2021', trend: false, desctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae veniam veritatis perspiciatis ratione similique doloribus rem voluptatum officiis eum, praesentium placeat laborum nobis provident' },
        { id: 3, img: '../../design/articles-item/articlesItem3.png', name: 'How to store Tomatoes (and Whether to Refrigerate Them)', author: 'Andrew Jonson', date: '27th January 2021', trend: false, desctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae veniam veritatis perspiciatis ratione similique doloribus rem voluptatum officiis eum, praesentium placeat laborum nobis provident' },
        { id: 4, img: '../../design/articles-item/articlesItem4.png', name: 'The Absolute Best Way to Cook French Fries', author: 'Andrew Jonson', date: '27th January 2021', trend: false, desctiption: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae veniam veritatis perspiciatis ratione similique doloribus rem voluptatum officiis eum, praesentium placeat laborum nobis provident.' },
        { id: 5, name: 'A guide to Thai Curry', author: 'Andrew Jonson', date: '27th January 2021', trend: true, desctiption: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi recusandae veniam veritatis perspiciatis ratione similique doloribus rem voluptatum officiis eum, praesentium placeat laborum nobis provident' },
    ]

    const nowData = [];

    posts.forEach(element => {
        if (element.id === +id) {
            nowData.push(element);
        }
    })

    const { name, author, date, img, desctiption } = nowData[0];

    const navigate = useNavigate();


    return (
        <>
            <div className='post'>
                <button className='post__btn' onClick={() => navigate(-1)}>Back</button>
                <div className="post__author">
                    <img className="post__img" src='../../design/iconMan.svg' alt='postimg' />
                    <div className="post__name">{author}</div>

                    <div className="post__date">{date}</div>
                </div>
                <div className="post__line"></div>
                <h2 className="post__title">{name}</h2>
                {!img ? <img className='post__mainimg' alt='' src='https://ic.pics.livejournal.com/mama_zima2013/53542495/1237038/1237038_600.jpg' /> : <img className="post__mainimg" src={img} alt={name} />}

                <p className="post__text">{desctiption}</p>
            </div>

            <Map />
        </>



    )
}
