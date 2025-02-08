import { TableCell, TableRow } from '@/components/ui/table'
import { Icategory } from '@/types/categories'
import { defaultImage } from '@/utils/client/main'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type CategoriesItemProps = {
    data: Icategory
}

const CategoriesItem = ({ data }: CategoriesItemProps) => {
    return (
        <TableRow>
            <TableCell>
                <Link href={`/admin/categories?slug=${data.slug}`} className=' hover:underline'>{data.name} ({data.children_count})</Link>
            </TableCell>
            <TableCell>
                <div className='w-20 h-24'>
                    <Image src={data.url_thumbnail == '' ? defaultImage() : data.url_thumbnail} width={200} height={200} className=' object-cover h-full w-full' alt='danh muc' />
                </div>
            </TableCell>
            <TableCell>
                {data.display_name}
            </TableCell>
            <TableCell>
                200
            </TableCell>
            <TableCell>
                <Link href={`/admin/categories?slug=${data.slug}`} className='text-blue-500 block mb-1 hover:underline'>Xem thêm</Link>
                <Link href={`/admin/categories/edit/${data.slug}`} className='text-blue-500 block mb-1 hover:underline'>Cập nhật</Link>
            </TableCell>
        </TableRow>
    )
}

export default CategoriesItem