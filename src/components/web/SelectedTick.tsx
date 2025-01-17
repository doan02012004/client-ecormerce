import { Check } from 'lucide-react'
import React from 'react'

const SelectedTick = () => {
    return (
        <div className='selected-tick absolute -bottom-[1px] -right-[1px] z-10'>
            <Check size={12} className='text-white font-semibold' />
        </div>
    )
}

export default SelectedTick