'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import CategoriesItem from './CategoriesItem'
import { useCategoryQuery } from '@/hooks/api/category'
import { CustomLoading } from '@/components/web'
import { useSearchParams } from 'next/navigation'


const CategoriesList = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug')
    const { categories, isLoading,isError } = useCategoryQuery(slug??null)
    if (isLoading) {
        return (
            <div className='min-h-screen bg-white p-2'>
                <div className='flex justify-center items-center h-96'>
                    <CustomLoading size={30} />
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className='min-h-screen bg-white p-2'>
                <div className='flex justify-center items-center h-96'>
                    Error
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-white p-2'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Tên danh mục
                        </TableHead>
                        <TableHead>
                            Ảnh
                        </TableHead>
                        <TableHead>
                            Tên hiển thị
                        </TableHead>
                        <TableHead>
                            SL sản phẩm
                        </TableHead>
                        <TableHead>
                            Chức năng
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {categories.map((item) => (
                        <CategoriesItem key={item._id} data={item} />
                    ))}
                </TableBody>
            </Table>

        </div>
    )
}

export default CategoriesList