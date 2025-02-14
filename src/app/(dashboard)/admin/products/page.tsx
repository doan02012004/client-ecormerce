import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import { CategoryFillter } from './_components'

import { Button } from '@/components/ui/button'

import ContentProductAdminPage from './_components/ContentProductAdminPage'


const ProductAdminPage = () => {
    return (
        <div>
            {/* fillter  */}
            <div className=' flex justify-between items-center bg-white  border h-14 px-2 mb-4'>
                <div className='flex items-center gap-2'>
                    <Input placeholder='Search...' className='w-72' />
                    <SearchIcon className=' cursor-pointer hover:text-blue-500' />
                </div>
                <div>
                    <CategoryFillter />
                </div>
                <a href="/admin/products/add"><Button>Thêm sản phẩm</Button></a>
            </div>
            {/* content  */}
            <ContentProductAdminPage />
        </div>
    )
}

export default ProductAdminPage