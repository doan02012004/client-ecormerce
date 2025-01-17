import { TableCell, TableRow } from '@/components/ui/table'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TableProductItem = () => {
    return (
        <TableRow>
            <TableCell className='max-w-max'>
                <Link href={'/admin/products'}>
                    <div className='grid grid-cols-[80px_180px] gap-2 w-fit'>
                        <div className='max-h-20'>
                            <Image src={'/assets/images/ao-len.jpg'} width={100} height={100} alt='product' className='w-full h-full object-cover' />
                        </div>
                        <h4 className='line-clamp-4 hover:text-blue-500'>
                            Quần jeans xuông nữ ống rộng rách túi sau hai màu đậm nhạt thích hợp với nấm lùn Pants
                        </h4>
                    </div>
                </Link>
            </TableCell>
            <TableCell className='max-w-24'>
                Danh muc
            </TableCell>
            <TableCell className='max-w-24'>Màu sắc, kích thước,Màu sắc, kích thước</TableCell>
            <TableCell className='max-w-24'>
                <div className='flex flex-col gap-1'>
                    <span>222</span>
                    <span className='text-green-500'>Còn hàng</span>
                </div>
            </TableCell>
            <TableCell className='max-w-24'>
                <div className='size-2 rounded-full bg-green-500 inline-block'></div> Hoạt động
            </TableCell>
            <TableCell>
                <Link href={'/admin/products'}><EyeIcon className=' cursor-pointer hover:text-blue-500' /></Link>
            </TableCell>
        </TableRow>
    )
}

export default TableProductItem