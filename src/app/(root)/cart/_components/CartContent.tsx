'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React, { useCallback } from 'react'
import CartItem from './CartItem'
import { useDecreaseCart, useDeleteCartItem, useIncreaseCart, useUpdateQuantityCart } from '@/hooks/api/cart'
import useCartStore from '@/zustand/cartStore'
import CartItemSkeleton from './CartItemSkeleton'
import { formatPrice } from '@/utils/main'

const CartContent = () => {
    const cart = useCartStore((sate) => sate.cart)
    const DecreaseMutation = useDecreaseCart()
    const IncreaseMutation = useIncreaseCart()
    const DeleteMutation = useDeleteCartItem()
    const UpdateQuantityMutation = useUpdateQuantityCart()

    const onDecrease = useCallback((id: string) => {
        DecreaseMutation.mutate({ cartItem_id: id })
    }, [DecreaseMutation])

    const onIncrease = useCallback((id: string) => {
        IncreaseMutation.mutate({ cartItem_id: id })
    }, [IncreaseMutation])

    const onDelete = useCallback((id: string) => {
        DeleteMutation.mutate({ cartItem_id: id })
    }, [DeleteMutation])

    const onUpdateQuantity = useCallback((id: string, quantity: number) => {
        UpdateQuantityMutation.mutate({ cartItem_id: id, quantity: quantity })
    }, [UpdateQuantityMutation])

    return (
        <>
            {/* cart item  */}
            <div className='flex flex-col gap-10 p-4 rounded min-h-80 bg-white mb-4'>
                {(cart.items.length == 0) && (
                    <>
                        <CartItemSkeleton />
                        <CartItemSkeleton />
                        <CartItemSkeleton />
                    </>
                )}
                {cart.items.map((item) => (
                    <CartItem key={item._id} item={item} onDelete={onDelete} onDecrease={onDecrease} onIncrease={onIncrease} onUpdateQuantity={onUpdateQuantity} />
                ))}

            </div>
            {/* information subtotal  */}
            <div className='sticky shadow-top z-10 bottom-0 grid grid-cols-1 md:grid-cols-[auto_280px] gap-6 p-4 rounded bg-white'>
                <div></div>
                <div>
                    {/* <div className='flex justify-between items-center mb-2 *:text-sm'>
                        <span>Tổng sản phẩm</span>
                        <span className='font-semibold'>2</span>
                    </div> */}
                    <div className='flex justify-between items-center mb-2 *:text-sm'>
                        <span>Tổng số tiền</span>
                        <span className='font-semibold'>{formatPrice(cart.total)}</span>
                    </div>
                    {/* <div className='flex justify-between items-center mb-4 *:text-sm'>
                        <span>Tiết kiệm</span>
                        <span className='font-semibold text-red-500'>150.000đ</span>
                    </div> */}
                    <Link href={'/checkout'}><Button className='w-full bg-red-500 transition-colors duration-300 ease-in-out hover:bg-red-400 '>Mua Hàng</Button></Link>
                </div>
            </div>
        </>
    )
}

export default CartContent