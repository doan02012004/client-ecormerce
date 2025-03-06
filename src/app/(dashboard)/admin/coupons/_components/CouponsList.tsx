'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { useCouponQueryAdmin } from '@/hooks/api/coupon'
import { Icoupon } from '@/types/coupon'
import { formatDate } from '@/utils/main'
import { Edit, Trash } from 'lucide-react'

import React, { useEffect, useState } from 'react'

const CouponsList = () => {
    const [coupons,setCoupons] = useState<Icoupon[]>([])
    const couponQuery = useCouponQueryAdmin()

    useEffect(() => {
        if(couponQuery.data){
            setCoupons(couponQuery.data)
        }
    },[couponQuery.data])
    return (
        <div className='min-h-screen bg-white p-2'>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>
                            Mã giảm giá
                        </TableHead>
                        <TableHead>
                            Tên
                        </TableHead>
                        <TableHead>
                            Kiểu mã
                        </TableHead>
                        <TableHead>
                            Số lượng
                        </TableHead>
                        <TableHead>
                            Ngày hết hạn
                        </TableHead>
                        <TableHead>
                            Chức năng
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {coupons.map((item:Icoupon) => (
                        <TableRow key={item._id}>
                            <TableCell>
                                {item.code}
                            </TableCell>
                            <TableCell>
                            {item.name}
                            </TableCell>
                            <TableCell>
                               {item.type=='ship'&& (<p>Mã vận chuyển</p>)}
                               {item.type=='product'&& (<p>Mã sản phẩm</p>)}
                            </TableCell>
                            <TableCell>
                            {item.quantity}
                            </TableCell>
                            <TableCell>
                            {formatDate(Number(item.end_date))}
                            </TableCell>
                            <TableCell className='flex flex-wrap gap-2'>
                                <button className='border p-1 transition-colors duration-300 hover:bg-blue-500 hover:text-white' title='Xem chi tiết'>
                                    <Trash size={16} />
                                </button>
                               <a href={`/admin/coupons/edit/${item.code}`} >
                               <button className='border p-1 transition-colors duration-300 hover:bg-blue-500 hover:text-white' title='Chỉnh sửa'>
                                    <Edit size={16} />
                                </button>
                               </a>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default CouponsList