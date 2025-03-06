import React from 'react'

const ShipInfoEditAdmin = () => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            <div className='grid grid-cols-[100px_auto] gap-3 items-center'>
                <label className='flex text-sm gap-1'>  <span className='text-red-500'>*</span> Trọng lượng (khi đóng gói)</label>
                <div>
                    <div className='size-fit relative'>
                        <input type="number" placeholder='trọng lượng' className={` 'border-red-500'} w-full h-full text-sm pl-2 pr-12 py-2 border outline-0 focus:outline-1 focus:outline-blue-500`} />
                        <span className=' absolute right-1 top-1/2 -translate-y-1/2 text-xs pl-2 border-l'>gram</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShipInfoEditAdmin