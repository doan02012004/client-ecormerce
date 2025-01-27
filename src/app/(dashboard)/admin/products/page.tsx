import { Input } from '@/components/ui/input'
import { SearchIcon } from 'lucide-react'
import React from 'react'
import { CategoryFillter, TableProductItem } from './_components'
import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'


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
            <div className='min-h-screen bg-white rounded-lg p-2'>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Product</TableHead>
                            <TableHead>Category</TableHead>
                            <TableHead>Option</TableHead>
                            <TableHead>Stock</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                       <TableProductItem />
                       <TableProductItem />
                       <TableProductItem />
                       <TableProductItem />
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default ProductAdminPage