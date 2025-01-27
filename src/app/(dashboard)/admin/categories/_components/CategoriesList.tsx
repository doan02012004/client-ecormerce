'use client'

import { Table, TableBody, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import CategoriesItem from './CategoriesItem'

const CategoriesList = () => {
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
                    <CategoriesItem />
                </TableBody>
            </Table>
        </div>
    )
}

export default CategoriesList