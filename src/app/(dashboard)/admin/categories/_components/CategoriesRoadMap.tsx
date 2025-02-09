'use client'
import { Button } from '@/components/ui/button'
import { useCategoryQueryPath } from '@/hooks/api/category'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const CategoriesRoadMap = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug')
    const { categoriesPath } = useCategoryQueryPath(slug)
    console.log(categoriesPath)
    return (
        <div className='bg-white p-2 mb-4 sticky top-16 z-20 border'>
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-bold mb-2'>Danh mục</h1>
                <a href="/admin/categories/add"><Button>Thêm danh mục</Button></a>
            </div>
            <div className='flex items-center gap-1'>
                <h4>Bạn đang xem:</h4>
                <div className='flex items-center gap-1'>
                    <Link href={`/admin/categories`} className='block text-blue-500 hover:underline'>
                        Danh mục
                    </Link>
                    
                    {categoriesPath.map((item) => (
                       <div className='flex items-center gap-1' key={item._id}>
                       /
                        <Link href={`/admin/categories?slug=${item.slug}`}  className='block text-blue-500 hover:underline'>
                            {item.name}
                        </Link>
                       </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CategoriesRoadMap