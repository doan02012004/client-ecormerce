'use client'
import useCartStore from '@/zustand/cartStore'
import React from 'react'
import CheckoutCartItem from './CheckoutCartItem'
import CheckoutCartItemSkeleton from './CheckoutCartItemSkeleton'

const CheckoutCart = () => {
    const cart = useCartStore((sate) => sate.cart)
    return (
        <div className='p-4 rounded bg-white'>
            {/* header  */}
            <div className=' mb-3'>
                <h3 className='font-medium text-lg '>Giỏ hàng của bạn</h3>
            </div>
            {/* content  */}
            <div className='space-y-6'>
                <div className=' grid-cart bg-white *:text-sm'>
                    <div>
                        {/* <input type="checkbox" className='size-5' /> */}
                        <span className='text-sm'>Sản phẩm (4)</span>
                    </div>
                    <span className='hidden md:block'>Đơn giá</span>
                    <span className='hidden md:block'>Số lượng</span>
                    <span className='hidden md:block'>Thành tiền</span>
                </div>
                {(cart.items.length == 0) && (
                    <>
                        <CheckoutCartItemSkeleton />
                        <CheckoutCartItemSkeleton />
                        <CheckoutCartItemSkeleton />
                    </>
                )}
                {cart.items.map((item) => (
                    <CheckoutCartItem key={item._id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default CheckoutCart