'use client'

import { ListCollapseIcon, X } from 'lucide-react'
import Image from 'next/image'
import React, { useCallback, useEffect, useRef } from 'react'
import san from '@/assets/images/images.jpg'
import { Button } from '@/components/ui/button'
import { useAppContext } from '@/app/AppProvider'
const Booking = () => {
    const divBgBook = useRef<HTMLDivElement|null>(null)
    const divContentBook = useRef<HTMLDivElement|null>(null)
    const {openMiniBooking,setOpenMiniBooking} = useAppContext()
    const disPlayMiniBooking = useCallback((backgroud:HTMLDivElement, content:HTMLDivElement,openMiniBooking:boolean) =>{
        if(openMiniBooking === true){
            backgroud.style.inset = '0';
            backgroud.style.opacity = '1'
            content.style.right='0'
        }else{
            backgroud.style.opacity = '0'
            content.style.right='-100%'
            const timeout = setTimeout(()=>{
                backgroud.style.removeProperty('inset')
            },300)

            return ()=>{
                clearTimeout(timeout)
            }
        }
    },[])

    const closeMiniBooking = useCallback((event:MouseEvent)=>{
        if(divContentBook.current && !divContentBook.current.contains(event.target as Node) === true){
            setOpenMiniBooking(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    // xử lý logic ẩn hiện mini Booking
    useEffect(()=>{
        if(divBgBook?.current && divContentBook?.current){
           const cleanup =  disPlayMiniBooking(divBgBook?.current,divContentBook?.current,openMiniBooking)
           return cleanup
        }
    },[openMiniBooking,divBgBook,divContentBook,disPlayMiniBooking])

    // xử lý khi click vào backgroud thì sẽ tắt mini booking
    useEffect(()=>{
        if(divContentBook?.current && openMiniBooking === true){
           document.addEventListener('click',closeMiniBooking)

           return () =>{
            document.removeEventListener('click',closeMiniBooking)
           }
        }
    },[openMiniBooking,divContentBook,closeMiniBooking])
    return (
        <>
            <div onClick={()=> setOpenMiniBooking(true)} className='size-10 cursor-pointer  rounded-full flex justify-center items-center border transition duration-300 ease-in-out hover:shadow hover:shadow-gray-300'>
                <ListCollapseIcon className=' cursor-pointer transition duration-300 ease-in-out hover:text-indigo-800' />
            </div>

            {/* fixed booking  */}
            <div ref={divBgBook} className='fixed bg-black/50 -right-full z-50 opacity-0 transition-all duration-300 ease-in-out '>
                <div ref={divContentBook} className='fixed bg-white inset-y-0 min-w-96 -right-full transition-all duration-500 ease-in-out'>
                    {/* header  */}
                    <div className='mb-2'>
                        <X  onClick={()=> setOpenMiniBooking(false)}  className='mt-2 ml-3 cursor-pointer mb-4 hover:text-red-600' />
                        <h3 className=' pl-3 text-lg font-bold uppercase'>Lịch đặt sân hôm nay</h3>
                    </div>
                    <hr />
                    {/* body  */}
                    <div className='my-3 h-[550px] overflow-y-auto px-3'>
                        {/* content  */}
                        <div className='py-3 flex flex-col gap-3'>
                            {/* content item  */}
                            <div className='p-3 rounded-lg border shadow shadow-gray-200 hover:shadow-gray-400 cursor-pointer'>
                                <div className='w-full h-36 mb-2'>
                                    <Image src={san} width={200} height={200} alt='Sân bóng' className='w-full h-full object-cover' />
                                </div>
                                <h2 className='font-semibold text-sm max-w-80'>Sân bóng Hạ Thành - Hoàng Quốc Việt</h2>
                                <ul className='flex flex-col gap-1 mb-2'>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Sân số:</span> 1
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Thời gian:</span> 17h-18h30
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Giá sân:</span> 500.000đ
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Trạng thái:</span> Chờ xác nhận
                                    </li>
                                </ul>
                                <div className='flex flex-col '>
                                    <Button variant={'destructive'} className=' self-end'>Hủy đặt sân</Button>
                                </div>
                            </div>
                            <div className='p-3 rounded-lg border shadow shadow-gray-200 hover:shadow-gray-400 cursor-pointer'>
                                <div className='w-full h-36 mb-2'>
                                    <Image src={san} width={200} height={200} alt='Sân bóng' className='w-full h-full object-cover' />
                                </div>
                                <h2 className='font-semibold text-sm max-w-80'>Sân bóng Hạ Thành - Hoàng Quốc Việt</h2>
                                <ul className='flex flex-col gap-1 mb-2'>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Sân số:</span> 1
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Thời gian:</span> 17h-18h30
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Giá sân:</span> 500.000đ
                                    </li>
                                    <li className='text-sm font-semibold'>
                                        <span className='font-medium'>Trạng thái:</span> Chờ xác nhận
                                    </li>
                                </ul>
                                <div className='flex flex-col '>
                                    <Button variant={'destructive'} className=' self-end'>Hủy đặt sân</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='px-3'>
                    <Button className='w-full py-5 uppercase'>Xem Lịch Đấu</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Booking