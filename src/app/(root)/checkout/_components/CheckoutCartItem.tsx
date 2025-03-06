import { IcartItem } from '@/types/cart'
import { defaultImage, formatPrice } from '@/utils/main'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

type CheckoutCartItemProps = {
    item: IcartItem,
}
const CheckoutCartItem = ({ item }: CheckoutCartItemProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = String(item.quantity)
        }
    }, [item.quantity, inputRef])

    const generateImagUrlCart = (cart: IcartItem) => {
        if (!cart.variant_id || !cart.product_id) {
            const imageDefault = defaultImage()
            return imageDefault as string
        }

        if (cart.product_id?.type == 'simple') {
            return cart.product_id.images[0].url
        }
        return cart.variant_id.image as string
    }
    
    return (
        <div className='grid-cart-checkout *:text-sm'>
            <div >
                {/* <input type="checkbox" className='size-5' /> */}
                <div className='grid grid-cols-[64px_auto] gap-4'>
                    <div className='h-20 w-full'>
                        <Link href={item.url_path}><Image src={generateImagUrlCart(item)} width={100} height={120} className='h-full w-full object-cover' alt='image product' /></Link>
                    </div>
                    <div>
                        <Link href={item.url_path}> <h4 className=' line-clamp-2 text-sm mb-3 hover:text-blue-600'>{item.product_id?.name ?? 'Không xác định'}</h4></Link>
                        <p className=' line-clamp-1 text-xs text-gray-500'>{item.variant_id?.name}</p>
                    </div>
                </div>
            </div>
            <div className=' relative w-fit  hidden md:block'>
                <span className='text-xs font-semibold lg:text-sm'>{formatPrice(item.variant_id?.price ?? 0)}</span>
            </div>
            <div className=' gap-1 items-center hidden md:flex'>
                <input ref={inputRef} disabled={true} className='border h-6 w-10 flex justify-center items-center text-center rounded hover:bg-gray-200' type="number" min={1} defaultValue={item.quantity} />
            </div>
            <div className='hidden md:block '>
                <span className='text-red-500 text-xs font-semibold lg:text-sm'>{formatPrice(item.total)}</span>
            </div>
        </div>
    )
}

export default CheckoutCartItem