import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CategoriesRoadMap = () => {

  return (
    <div className='bg-white p-2 mb-4 sticky top-16 z-20 border'>
        <div className='flex items-center justify-between'>
        <h1 className='text-lg font-bold mb-2'>Danh mục</h1>
        <a href="/admin/categories/add"><Button>Thêm danh mục</Button></a>
        </div>
        <div className='flex items-center gap-1'>
            <h4>Bạn đang xem:</h4>
            <div className='flex items-center gap-1'>
                <Link href={'#'} className='block text-blue-500 hover:underline'>
                    Thời trang nam
                </Link>
                <span>/</span>
                <Link href={'#'} className='block text-blue-500 hover:underline'>
                    Thời trang nam
                </Link>
                <span>/</span>
                <Link href={'#'} className='block text-blue-500 hover:underline'>
                    Thời trang nam
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CategoriesRoadMap