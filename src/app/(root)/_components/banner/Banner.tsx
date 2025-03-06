'use client'
import React from 'react'
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='w-full mb-3 '>
      <div className='w-full overflow-hidden rounded-lg'>
       <div className=' flex gap-6 w-full'>
          <div className='w-80 h-96'>
            <Image src={'/assets/images/anhthoitrang1.jpg'} width={550} height={600} className='w-full h-full object-cover' alt='ảnh sản phẩm'/>
          </div>
       </div>
      </div>
      {/* <div className=' hidden lg:block col-span-4 p-4 rounded-lg bg-gray-800 relative'>
          <h1 className='uppercase text-xl text-white mb-3'>Đặt Sân Bóng Đá</h1>
          <p className=' m-0 text-sm text-green-100'>Hỗ trợ đặt sân bóng đá trực tuyến trên toàn quốc. Giúp bạn dễ dàng đặt các lịch đấu ở nơi bạn muốn !</p>
          <Button className=' absolute right-4 bottom-4 bg-white text-red-700 border border-gray-300 hover:bg-gray-100'>Xem Ngay</Button>
      </div>
      <div className='hidden lg:block col-span-4 p-4 rounded-lg bg-gray-800 relative'>
          <h1 className='uppercase text-xl text-white mb-3'>Đặt Sân Bóng Đá</h1>
          <p className=' m-0 text-sm text-green-100'>Hỗ trợ đặt sân bóng đá trực tuyến trên toàn quốc. Giúp bạn dễ dàng đặt các lịch đấu ở nơi bạn muốn !</p>
          <Button className=' absolute right-4 bottom-4 bg-white text-red-700 border border-gray-300 hover:bg-gray-100'>Xem Ngay</Button>
      </div> */}
    </div>
  )
}

export default Banner