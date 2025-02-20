import { IcartItem } from '@/types/cart'
import { defaultImage, formatPrice } from '@/utils/main'
import { Minus, Plus, Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'

type CartItemProps = {
    item: IcartItem,
    onDecrease: (id:string)=> void ,
    onIncrease: (id:string)=> void ,
    onDelete: (id:string)=> void ,
    onUpdateQuantity: (id:string, quantity:number)=> void  ,
}

const CartItem = ({item,onDecrease,onIncrease,onUpdateQuantity,onDelete}:CartItemProps) => {
    const inputRef = useRef<HTMLInputElement|null>(null)

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.value = String(item.quantity)
        }
    },[item.quantity,inputRef])

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

    const onUpdateQuantityItem =(e:React.ChangeEvent<HTMLInputElement>, cartItem_id:string) => {
        if(!inputRef.current){
            return
        }
        const newQuantity = Number(e.target.value)
        if(!newQuantity || newQuantity <= 0 || newQuantity > item.quantity ){
            inputRef.current.value = String(item.quantity)
            return
        }

        onUpdateQuantity(cartItem_id,newQuantity)

    }

    return (
        <div className=' grid-cart *:text-sm'>
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
            <div className=' relative w-fit pr-2 hidden md:block'>
                <span className='text-xs font-semibold lg:text-sm'>{formatPrice(item.variant_id?.price?? 0)}</span>
                <span className='text-xs text-gray-400 w-max line-through absolute left-full -top-3'>{formatPrice(item.variant_id?.original_price?? 0)}</span>
            </div>
            <div className=' gap-1 items-center hidden md:flex'>
                <button onClick={() => onDecrease(item._id)} className='border size-6 flex justify-center items-center rounded hover:bg-gray-200'><Minus size={20} /></button>
                <input ref={inputRef} onBlur={(e) => onUpdateQuantityItem(e,item._id) }  className='border h-6 w-10 flex justify-center items-center text-center rounded hover:bg-gray-200' type="number" min={1} defaultValue={item.quantity} />
                <button onClick={() => onIncrease(item._id)}  className='border size-6 flex justify-center items-center rounded hover:bg-gray-200'><Plus /></button>
            </div>
            <div className='hidden md:block '>
                <span className='text-red-500 text-xs font-semibold lg:text-sm'>{formatPrice(item.total)}</span>
            </div>
            <button onClick={() => onDelete(item._id)} className='hover:text-red-500'><Trash /></button>
        </div>
    )
}

export default CartItem