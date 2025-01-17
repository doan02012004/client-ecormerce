
import React from 'react'
import OptionProductButton from './OptionProductButton'

const OptionsProduct = () => {
    return (
        <div className='mb-2'>
            <h3 className='text-sm font-medium mb-2'>Màu</h3>
            <div className='flex items-center gap-3 flex-wrap'>
                <OptionProductButton />
                <OptionProductButton />
                <OptionProductButton />
                <OptionProductButton />
                <OptionProductButton />
                <OptionProductButton />
                <OptionProductButton />
            </div>
        </div>
    )
}

export default OptionsProduct