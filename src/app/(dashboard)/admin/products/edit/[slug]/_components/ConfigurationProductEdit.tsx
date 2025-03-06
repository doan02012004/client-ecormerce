'use client'

import React from 'react'
import ClassifyProductEdit from './ClassifyProductEdit'
import VariantsProductEdit from './VariantsProductEdit'
import ImageVariantsEdit from './ImageVariantsEdit'


const ConfigurationProductEdit = () => {
    
    return (
        <div className='px-2 py-4 rounded-lg bg-white'>
            {/* header  */}
            <h2 className=' uppercase text-base mb-10'>Cấu hình sản phẩm</h2>
            <div className='px-6 flex flex-col gap-8'>
                {/* Phân loại  */}
                <ClassifyProductEdit  />
                {/* Các thuộc tính  */}
               <VariantsProductEdit />
               <ImageVariantsEdit />
            </div>
        </div>
    )
}

export default ConfigurationProductEdit