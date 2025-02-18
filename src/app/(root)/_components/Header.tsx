
import { HistoryIcon, LockIcon, LogOutIcon, SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MiniCart from './minicart/MiniCart'
import { getSession } from '@/lib/session'

const Header = async() => {
   const session = await getSession()
    return (
        <div className=' mb-4 sticky top-0 z-30 h-16 md:h-28'>
            <div className='hidden bg-gray-900 py-3 md:block '>
                <h5 className='text-white text-sm font-medium text-center'>Chào mừng bạn đến với <span className='text-red-600 underline font-semibold'>MD-FASHION</span></h5>
            </div>
            <div className=' w-full bg-white py-3 shadow shadow-gray-300'>
                <div className='container'>
                    <div className='relative flex justify-between items-center'>
                        <div className='hidden md:block'>
                            <ul className='flex items-center md:gap-4 lg:gap-6'>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Nam</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Nữ</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Phụ Kiện</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Blog</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Liên hệ</Link></li>
                            </ul>
                        </div>
                       
                        <div className='flex items-center gap-4 lg:gap-8'>
                        <div className=' flex items-center gap-x-1 w-72 md:w-80 lg:w-80 px-3 py-2 rounded border '>
                            <input type="text" placeholder='Nhập tìm kiếm...' className=' outline-0 border-none w-full text-sm' />
                            <SearchIcon className=' cursor-pointer hover:text-blue-600' />
                        </div>
                            {/* auth */}
                            <div className=' group relative size-10 cursor-pointer  rounded-full flex justify-center items-center border transition duration-300 ease-in-out hover:shadow hover:shadow-gray-300'>
                                <UserIcon className=' transition duration-300 ease-in-out hover:text-indigo-800' />
                                <div className='hidden absolute z-50 top-full right-0 min-w-44 px-3 py-2 rounded-lg shadow-md shadow-gray-400 bg-white group-hover:block'>
                                   
                                        <ul className='flex flex-col gap-3'>
                                            {session && session?.user? (
                                                <>
                                                    <a href={'/admin'}> <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><LockIcon className='w-5' /> Quản trị Admin</li></a>
                                                    <a href={'/'}><li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><UserIcon className='w-5' /> Thông tin tài khoản</li></a>
                                                    <a href={'/'}> <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><ShoppingBagIcon className='w-5' />Quản lý đơn hàng</li></a>
                                                    <a href={'/'}><li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><HistoryIcon className='w-5' /> Lịch sử đặt sân</li></a>
                                                    <a href={'/'}><li className='text-sm flex items-center gap-x-2 hover:text-red-600 '><LogOutIcon className='w-5' />Đăng xuất</li></a>
                                                </>
                                            ) : (
                                                <a href={'/login'}><li className='text-sm flex items-center gap-x-2 hover:text-red-600 '><LockIcon className='w-5' /> Đăng nhập</li> </a>
                                            )}
                                        </ul>

                                </div>
                            </div>
                            {/* list  */}
                            {/* <Booking /> */}
                            {/* cart  */}
                            <MiniCart />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default Header