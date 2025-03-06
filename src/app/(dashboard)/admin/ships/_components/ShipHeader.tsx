import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ShipHeader = () => {
  return (
    <div className='bg-white p-2 mb-4'>
    <div className='flex justify-between items-center'>
        <h2>Nhà vận chuyển</h2>
        <Link href={'/admin/ships/add'}><Button>Thêm nhà vận chuyển</Button></Link>
    </div>
</div>
  )
}

export default ShipHeader