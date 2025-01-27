import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TableCell, TableRow } from '@/components/ui/table'
import { Edit, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'


const CategoriesItem = () => {

    const [openForm, setOpenForm] = useState<boolean>(false)

    return (
        <TableRow>
            <TableCell>
                Thời trang nam
            </TableCell>
            <TableCell>
                <div className='w-20 h-24'>
                    <Image src={''} width={200} height={200} className=' object-cover h-full w-full' alt='danh muc' />
                </div>
            </TableCell>
            <TableCell>
                Nam
            </TableCell>
            <TableCell>
                200
            </TableCell>
            <TableCell>
                <Link href={'#'} className='text-blue-500 block mb-1 hover:underline'>Xem thêm</Link>
                <button onClick={() => setOpenForm(true)} className='text-blue-500 hover:underline'>Chi tiết</button>
                {openForm && (
                    <div className='fixed inset-0 bg-white/50 z-50 flex justify-center items-center'>
                        <Card className=' relative bg-white  w-full max-w-[90%]'>
                            <CardHeader>
                                <CardTitle>
                                    <div className='flex justify-between items-center'>
                                        <span className='text-xl'> Chi tiết danh mục</span>
                                        <X onClick={() => setOpenForm(false)} className=' cursor-pointer hover:text-red-500' />
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className=' gap-4'>
                                    {/* form  */}
                                    <div className=' relative pt-4 rounded border shadow shadow-gray-400 mb-8'>
                                        <span className=' absolute -top-2.5 left-3 bg-white font-semibold px-1'>Thông tin chính</span>
                                        <form className=' flex justify-between  items-center gap-4 py-2 px-5'>
                                            <div className='flex flex-col gap-2 group'>
                                                <label className='font-semibold' htmlFor="name_category">Tên danh mục:</label>
                                                <p className='text-sm'>Thời trang nam</p>
                                                <input type="text" id='name_category' className='p-1 hidden border text-sm outline-0 max-w-96' />
                                            </div>
                                            <div className='flex flex-col gap-2 group'>
                                                <label className='font-semibold' htmlFor="name_category">Tên danh mục:</label>
                                                <p className='text-sm'>Thời trang nam</p>
                                                <input type="text" id='name_category' className='p-1 hidden border text-sm outline-0 max-w-96' />
                                            </div>
                                            <div className='flex flex-col gap-2 group'>
                                                <label className='font-semibold' htmlFor="name_category">Tên danh mục:</label>
                                                <p className='text-sm'>Thời trang nam</p>
                                                <input type="text" id='name_category' className='p-1 hidden border text-sm outline-0 max-w-96' />
                                            </div>
                                            <div className='flex flex-col gap-2 group'>
                                                <label className='font-semibold' htmlFor="name_category">Tên danh mục:</label>
                                                <p className='text-sm'>Thời trang nam</p>
                                                <input type="text" id='name_category' className='p-1 hidden border text-sm outline-0 max-w-96' />
                                            </div>
                                            <div className='flex flex-col gap-2 group'>
                                                <label className='font-semibold' htmlFor="name_category">Tên danh mục:</label>
                                                <p className='text-sm'>Thời trang nam</p>
                                                <input type="text" id='name_category' className='p-1 hidden border text-sm outline-0 max-w-96' />
                                            </div>
                                            <div className=' flex items-center gap-3'>
                                                <Button type='button'>Sửa <Edit /></Button>
                                                <Button type='submit'>Cập nhật</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </TableCell>
        </TableRow>
    )
}

export default CategoriesItem