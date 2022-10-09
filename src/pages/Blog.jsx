import React from 'react'
import AllArticles from '../components/AllArticles'
import { BlogHeader } from '../components/BlogHeader'
import { Map } from '../components/Map'

export const Blog = () => {

    const posts = [
        { id: 1, img: '../../design/articles-item/articlesItem1.png', name: 'A guide to Thai Curry', author: 'Andrew Jonson', date: '27th January 2021', trend: false, },
        { id: 2, img: '../../design/articles-item/articlesItem2.png', name: 'The best guacamole recipe with only 4 ingredients', author: 'Andrew Jonson', date: '27th January 2021', trend: false, },
        { id: 3, img: '../../design/articles-item/articlesItem3.png', name: 'How to store Tomatoes (and Whether to Refrigerate Them)', author: 'Andrew Jonson', date: '27th January 2021', trend: false, },
        { id: 4, img: '../../design/articles-item/articlesItem4.png', name: 'The Absolute Best Way to Cook French Fries', author: 'Andrew Jonson', date: '27th January 2021', trend: false, },
        { id: 5, name: 'A guide to Thai Curry', author: 'Andrew Jonson', date: '27th January 2021', trend: true, },
    ]



    return (
        <>
            <BlogHeader posts={posts} />
            <AllArticles posts={posts} />
            <Map />
        </>
    )
}
