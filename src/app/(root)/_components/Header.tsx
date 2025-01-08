import { HistoryIcon, LogOutIcon, SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MiniCart from './minicart/MiniCart'

const Header = () => {
    return (
        <div className='mb-4'>
            <div className='bg-gray-900 py-3'>
                <h5 className='text-white text-sm font-medium text-center'>Chào mừng bạn đến với <span className='text-red-600 underline font-semibold'>MD-FASHION</span></h5>
            </div>
            <div className=' w-full bg-white py-3 shadow shadow-gray-300'>
                <div className='container'>
                    <div className='relative flex justify-between items-center'>
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-x-6'>
                                <li className=' uppercase text-xs font-semibold hover:text-red-600'><Link href={'/'}>Home</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Phụ Kiện</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Quần Áo</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Liên Hệ</Link></li>
                            </ul>
                        </div>
                        <div className=' absolute left-1/2 -translate-x-1/2 flex items-center gap-x-1 w-96 px-3 py-2 rounded-lg border shadow-md shadow-gray-200 '>
                            <input type="text" placeholder='Nhập tìm kiếm...' className=' outline-0 border-none w-full text-sm' />
                            <SearchIcon className=' cursor-pointer hover:text-blue-600' />
                        </div>
                        <div className='flex items-center gap-x-8'>
                            {/* auth */}
                            <div className=' group relative size-10 cursor-pointer  rounded-full flex justify-center items-center border transition duration-300 ease-in-out hover:shadow hover:shadow-gray-300'>
                                <UserIcon className=' transition duration-300 ease-in-out hover:text-indigo-800' />
                                <div className='hidden absolute z-50 top-full right-0 min-w-44 px-3 py-2 rounded-lg shadow-md shadow-gray-400 bg-white group-hover:block'>
                                    <ul className='flex flex-col gap-3'>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><UserIcon className='w-5' /> <Link href={'/'}>Thông tin tài khoản</Link></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><ShoppingBagIcon className='w-5' /> <Link href={'/'}>Quản lý đơn hàng</Link></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><HistoryIcon className='w-5' /> <Link href={'/'}>Lịch sử đặt sân</Link></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 '><LogOutIcon className='w-5' /> <Link href={'/'}>Đăng xuất</Link></li>
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