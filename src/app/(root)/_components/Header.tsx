import { HistoryIcon, LockIcon, LogOutIcon, SearchIcon, ShoppingBagIcon, UserIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import MiniCart from './minicart/MiniCart'

const Header = () => {
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
                                <li className=' uppercase text-xs font-semibold hover:text-red-600'><Link href={'/'}>Home</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Phụ Kiện</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Quần Áo</Link></li>
                                <li className=' uppercase text-xs font-semibold  hover:text-red-600'><Link href={'/'}>Liên Hệ</Link></li>
                            </ul>
                        </div>
                        <div className=' flex items-center gap-x-1 w-72 md:w-80 lg:w-96 px-3 py-2 rounded-lg border shadow-md shadow-gray-200 lg:absolute lg:left-1/2 lg:-translate-x-1/2'>
                            <input type="text" placeholder='Nhập tìm kiếm...' className=' outline-0 border-none w-full text-sm' />
                            <SearchIcon className=' cursor-pointer hover:text-blue-600' />
                        </div>
                        <div className='flex items-center gap-4 lg:gap-8'>
                            {/* auth */}
                            <div className=' group relative size-10 cursor-pointer  rounded-full flex justify-center items-center border transition duration-300 ease-in-out hover:shadow hover:shadow-gray-300'>
                                <UserIcon className=' transition duration-300 ease-in-out hover:text-indigo-800' />
                                <div className='hidden absolute z-50 top-full right-0 min-w-44 px-3 py-2 rounded-lg shadow-md shadow-gray-400 bg-white group-hover:block'>
                                    <ul className='flex flex-col gap-3'>
                                    <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><LockIcon className='w-5' /> <a href={'/admin'}>Quản trị Admin</a></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><UserIcon className='w-5' /> <a href={'/'}>Thông tin tài khoản</a></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><ShoppingBagIcon className='w-5' /> <a href={'/'}>Quản lý đơn hàng</a></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 pb-2 border-b'><HistoryIcon className='w-5' /> <a href={'/'}>Lịch sử đặt sân</a></li>
                                        <li className='text-sm flex items-center gap-x-2 hover:text-red-600 '><LogOutIcon className='w-5' /> <a href={'/'}>Đăng xuất</a></li>
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