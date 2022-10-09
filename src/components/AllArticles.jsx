import React from 'react'
import { ArticlesItem } from './ArticlesItem'

const AllArticles = ({ posts }) => {
    return (
        <div className='articles'>
            <div className="articles__title">All Articles</div>
            <div className="articles__container">
                {posts.map(el => (
                    !el.trend ?
                        <ArticlesItem
                            {...el}
                            key={el.id}
                        /> : null
                ))}
            </div>

        </div>
    )
}

export default AllArticles