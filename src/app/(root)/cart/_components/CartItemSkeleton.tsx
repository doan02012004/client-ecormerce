import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const CartItemSkeleton = () => {
  return (
    <div className=' grid-cart *:text-sm'>
    <div >
        {/* <input type="checkbox" className='size-5' /> */}
        <div className='grid grid-cols-[64px_auto] gap-4'>
            <Skeleton className='h-20 w-full' />
            <Skeleton className='h-20 w-full' />
        </div>
    </div>
    <Skeleton className=' relative w-full h-20 pr-2 hidden md:block' />
    <Skeleton className=' gap-1 w-full h-20 items-center hidden md:flex' />

    <Skeleton className='hidden w-full h-20 md:block ' />
    <Skeleton className='size-full'/>
</div>
  )
}

export default CartItemSkeleton