
import React from 'react'

import { GalleryProduct, InforProduct } from './_components'

const ProductDetailPage = () => {
  return (
    <div className='container'>
      <div className='flex justify-between gap-x-8 mb-4'>
        {/* Gallery, Information and Comment  */}
        <div className=' basis-[85%]'>
          {/* Gallery and Information  */}
          <div className='w-full flex gap-x-8 h-auto mb-4'>
            {/* left  */}
            <GalleryProduct />
            {/* center  */}
            <InforProduct />
          </div>
          {/* Comment  */}
          <div className='h-96 w-full bg-white rounded-lg p-3'>

          </div>
        </div>

        {/* right  */}
        <div className=' basis-[25%] bg-white rounded-lg flex-shrink-0 max-h-96 sticky top-3'>
          Hello
        </div>
      </div>

      {/* smilar product  */}
      <div className='w-full bg-white p-3 h-96'></div>
    </div>
  )
}

export default ProductDetailPage