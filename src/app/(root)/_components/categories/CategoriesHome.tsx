import React from 'react'
import CategoryHomeItem from './CategoryHomeItem'

const CategoriesHome = () => {
    return (
        <div className='bg-white w-full p-3 rounded-lg mb-3'>
            <div className='flex items-center justify-between flex-wrap'>
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
                <CategoryHomeItem />
            </div>
        </div>
    )
}

export default CategoriesHome