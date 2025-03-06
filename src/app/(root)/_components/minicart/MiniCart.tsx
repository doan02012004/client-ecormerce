'use client'
import { Button } from '@/components/ui/button'
import { ShoppingBag, X } from 'lucide-react'
import React, { useCallback, useEffect, useRef } from 'react'
import ProductCartItem from './ProductCartItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import useCartStore from '@/zustand/cartStore'
import { useCartQuery } from '@/hooks/api/cart'
import { formatPrice } from '@/utils/main'

const MiniCart = () => {
    const path = usePathname()
    const divBgMiniCart = useRef<HTMLDivElement | null>(null)
    const divContentMiniCart = useRef<HTMLDivElement | null>(null)
    const {openMiniCart,setOpenMiniCart,cart,setCart} = useCartStore()
    const cartQuery = useCartQuery()

    useEffect(() => {
        if(cartQuery.data){
            setCart(cartQuery.data)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartQuery.data])
    const disPlayMiniCart = useCallback((backgroud: HTMLDivElement, content: HTMLDivElement, openMiniCart: boolean) => {
        if (openMiniCart === true) {
            backgroud.style.inset = '0';
            backgroud.style.opacity = '1'
            content.style.right = '0'
        } else {
            backgroud.style.opacity = '0'
            content.style.right = '-100%'
            const timeout = setTimeout(() => {
                backgroud.style.removeProperty('inset')
            }, 300)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [])

    const closeMiniBooking = useCallback((event: MouseEvent) => {
        if (divContentMiniCart.current && !divContentMiniCart.current.contains(event.target as Node) === true) {
            setOpenMiniCart(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // xử lý logic ẩn hiện mini Booking
    useEffect(() => {
        if (divBgMiniCart?.current && divContentMiniCart?.current) {
            const cleanup = disPlayMiniCart(divBgMiniCart?.current, divContentMiniCart?.current, openMiniCart)
            return cleanup
        }
    }, [openMiniCart, divBgMiniCart, divContentMiniCart, disPlayMiniCart])

    // xử lý khi click vào backgroud thì sẽ tắt mini booking
    useEffect(() => {
        if (divContentMiniCart?.current && openMiniCart === true) {
            document.addEventListener('click', closeMiniBooking)

            return () => {
                document.removeEventListener('click', closeMiniBooking)
            }
        }
    }, [openMiniCart, divContentMiniCart, closeMiniBooking])

    // khi thay đổi page thì tự động tắt mini booking
    useEffect(()=>{
       if(openMiniCart === true){
            setOpenMiniCart(false)
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[path])
    
    return (
        <>
            <div onClick={() => setOpenMiniCart(true)} className='relative size-10 cursor-pointer  rounded-full flex justify-center items-center border transition duration-300 ease-in-out hover:shadow hover:shadow-gray-300'>
                <ShoppingBag className=' cursor-pointer transition duration-300 ease-in-out hover:text-indigo-800' />
                <span className=' absolute -top-2 -right-1 text-sm font-semibold text-red-600'>{cart.items.length}</span>
            </div>

            {/* fixed booking  */}
            <div ref={divBgMiniCart} className='fixed bg-black/50 -right-full z-50 opacity-0 transition-all duration-300 ease-in-out '>
                <div ref={divContentMiniCart} className='fixed bg-white inset-y-0 min-w-[340px] lg:min-w-96 -right-full transition-all duration-500 ease-in-out'>
                    {/* header  */}
                    <div className='mb-2'>
                        <X onClick={() => setOpenMiniCart(false)} className='mt-2 ml-3 cursor-pointer mb-4 hover:text-red-600' />
                        <div className='flex justify-between items-center px-3'>
                            <h3 className=' text-lg font-bold uppercase'>GIỎ HÀNG</h3>
                            <span className='block text-red-600 font-semibold'>{cart.items.length}</span>
                        </div>
                    </div>
                    <hr />
                    {/* body  */}
                    <div className='my-3 flex flex-col gap-3 h-[470px] lg:h-[500px] overflow-y-auto px-3'>
                        {cart.items.map((item) => (
                            <ProductCartItem key={item._id} cart={item} />
                        ))}
                    </div>
                    <div className='px-3'>
                        <div className='flex justify-between items-center mb-5'>
                            <span className='text-sm font-semibold'>Tạm tính:</span>
                            <span className='text-sm font-semibold'>{formatPrice(cart.total)}</span>
                        </div>
                       <Link href={'/cart'}> <Button className='w-full py-5 uppercase'>Xem Giỏ Hàng</Button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniCart