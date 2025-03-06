'use client'


const ProgressProduct = () => {

    return (
        <>
            <h2 className=' uppercase text-base mb-4'>Tiến độ</h2>
            <div className='mb-4'>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                   {/* {checkInfor? (
                     <span className='text-xs text-green-500'>Hoàn thành</span>
                   ): (
                    <span className='text-xs text-red-500'>Chưa xong</span>
                   )}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Cấu hình sản phẩm</span>
                    -
                    {checkModels? (
                     <span className='text-xs text-green-500'>Hoàn thành</span>
                   ): (
                    <span className='text-xs text-red-500'>Chưa xong</span>
                   )} */}
                </div>
                <div className='flex items-center gap-2'>
                    <div className='size-2 rounded-full bg-black'></div>
                    <span className='text-sm'>Thông tin cơ bản</span>
                    -
                    <span className='text-xs text-green-500'>Hoàn thành</span>
                </div>
            </div>
        </>
    )
}

export default ProgressProduct