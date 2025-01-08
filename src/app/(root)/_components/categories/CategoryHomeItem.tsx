import Image from 'next/image'
import React from 'react'
import ao from '@/assets/images/ao-the-thao.jpg'
const CategoryHomeItem = () => {
  return (
    <div className='p-3 max-w-36 cursor-pointer group' title='Áo Thể Thao'>
        <div className='size-16 rounded-lg overflow-hidden mx-auto mb-2'>
            <Image src={ao} width={100} height={100} alt='danh muc' className='w-full h-full object-cover'/>
        </div>
        <div>
            <h5 className='text-xs font-bold uppercase text-center group-hover:text-red-700'>Áo Thể Thao</h5>
        </div>
    </div>
  )
}

export default CategoryHomeItem