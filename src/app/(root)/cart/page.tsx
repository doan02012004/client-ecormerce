import { Trash } from 'lucide-react'
import React from 'react'
import './cart.css'
import CartItem from './_components/CartItem'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const CartPage = () => {
    return (
        <section className='container'>
            <h1 className='font-medium text-lg uppercase mb-4'>Giỏ hàng</h1>
            <div>
                <div>
                    {/* header  */}
                    <div className=' grid-cart px-4 py-2 rounded-lg bg-white mb-4 *:text-sm'>
                        <div className='grid grid-cols-[20px_auto] gap-2.5 items-center'>
                            <input type="checkbox" className='size-5' />
                            <span className='text-sm'>Tất cả sản phẩm (4)</span>
                        </div>
                        <span className='hidden md:block'>Đơn giá</span>
                        <span className='hidden md:block'>Số lượng</span>
                        <span className='hidden md:block'>Thành tiền</span>
                        <button><Trash /></button>
                    </div>
                     {/* cart item  */}
                    <div className='flex flex-col gap-10 p-4 rounded-lg bg-white mb-4'>
                       <CartItem />
                       <CartItem />
                       <CartItem />
                    </div>
                    {/* information subtotal  */}
                    <div className='sticky shadow-top z-10 bottom-0 grid grid-cols-1 md:grid-cols-[auto_280px] gap-6 p-4 rounded-lg bg-white'>
                        <div></div>
                        <div>
                            <div className='flex justify-between items-center mb-2 *:text-sm'>
                                <span>Tổng sản phẩm</span>
                                <span className='font-semibold'>2</span>
                            </div>
                            <div className='flex justify-between items-center mb-2 *:text-sm'>
                                <span>Tổng số tiền</span>
                                <span className='font-semibold'>20.000.000đ</span>
                            </div>
                            <div className='flex justify-between items-center mb-4 *:text-sm'>
                                <span>Tiết kiệm</span>
                                <span className='font-semibold text-red-500'>150.000đ</span>
                            </div>
                           <Link href={'/checkout'}><Button className='w-full bg-red-500 transition-colors duration-300 ease-in-out hover:bg-red-400 '>Mua Hàng</Button></Link>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default CartPage