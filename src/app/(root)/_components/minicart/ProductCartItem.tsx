import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { MinusIcon, PlusIcon } from 'lucide-react'
import { IcartItem } from '@/types/cart'
import { defaultImage, formatPrice } from '@/utils/main'
import { useDecreaseCart, useIncreaseCart } from '@/hooks/api/cart'

type ProductCartItemProps = {
    cart:IcartItem
}
const ProductCartItem = ({cart}:ProductCartItemProps) => {
    const DecreaseMutation = useDecreaseCart()
    const IncreaseMutation = useIncreaseCart()
    
    // hàm xử lý ảnh
    const generateImagUrlCart = (cart:IcartItem) => {
        if(!cart.variant_id || !cart.product_id){
            const imageDefault = defaultImage() 
            return imageDefault as string
        }

        if(cart.product_id?.type == 'simple'){
            return cart.product_id.images[0].url
        }
        return cart.variant_id.image as string
    } 

    const onDecrease = (id:string) => {
        DecreaseMutation.mutate({cartItem_id:id})
    }

     const onIncrease = (id:string) => {
        IncreaseMutation.mutate({cartItem_id:id})
    }
    return (
        <div className='pb-3 border-b h-auto flex gap-x-2'>
            <div className='w-20 h-24 flex-shrink-0'>
                <Image src={generateImagUrlCart(cart)} width={160} height={160} alt='sản phẩm' className=' object-cover w-full h-full' />
            </div>
            <div>
                <Link href={'/'} className='block overflow-hidden text-ellipsis whitespace-nowrap w-64 text-sm font-semibold mb-1 hover:text-blue-500 hover:underline'>{cart.product_id?.name}</Link>
                {cart.variant_id && (
                    <div className='space-y-1 mb-1 min-h-8'>
                        {cart.variant_id.combinations.map((com) => (
                            <div key={com._id} className='flex gap-1 items-center'>
                                <span className='block text-xs text-gray-400'>{com.name} :</span>
                                <span className='block text-xs font-semibold'>{com.value}</span>
                            </div>
                        ))}
                    </div>
                )}
                <div className='w-full relative'>
                    <div className='flex items-center border px-2 py-1 w-max rounded-lg'>
                        <button onClick={() => onDecrease(cart._id)} className='text-gray-500 hover:text-blue-500'><MinusIcon className='w-4' /></button>
                        <span className='px-3 text-sm'>{cart.quantity}</span>
                        <button onClick={() => onIncrease(cart._id)} className='text-gray-500 hover:text-blue-500'><PlusIcon className='w-4' /></button>
                    </div>
                    <span className='block absolute bottom-0 right-0 text-sm font-semibold'>{formatPrice(cart.total)}</span>
                </div>
            </div>
        </div>
    )
}

export default ProductCartItem