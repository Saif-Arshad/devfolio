import React from 'react'
import ArticleDrawer from './ArticleDrawer'

function Articles() {
    return (
        <div className='py-10 px-5 lg:px-10'>
            <div className='flex items-center justify-between'>
                <h2 className='text-2xl font-bold'>
                    All Articles
                </h2>
                <ArticleDrawer
                    button={
                        <button className='bg-primaryColor text-black hover:scale-105 duration-200 py-2 px-4 rounded-full'>
                            Add Article
                        </button>
                    }
                />
            </div>
            Articles</div>
    )
}

export default Articles