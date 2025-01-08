import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import ContentBestSeller from './ContentBestSeller'

const BestSeller = () => {
    return (
        <div className='bg-white w-full p-3 rounded-lg mb-3'>
            {/* header  */}
            <div className='flex justify-between items-center pb-2 border-b mb-3'>
                <h2 className=' uppercase text-xl font-bold '>Best Seller</h2>
                <Link href={'/'}> <Button className='bg-white border border-black text-black hover:text-white'>Xem tất cả</Button></Link>
            </div>
            {/* content  */}
           <ContentBestSeller />

        </div>
    )
}

export default BestSeller