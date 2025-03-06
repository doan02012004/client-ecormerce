import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const CouponsHeader = () => {
  return (
    <div className='bg-white p-2 mb-4'>
        <div className='flex justify-between items-center'>
            <h2>Phiếu giảm giá</h2>
            <Link href={'/admin/coupons/add'}><Button>Thêm mã giảm giá</Button></Link>
        </div>
    </div>
  )
}

export default CouponsHeader