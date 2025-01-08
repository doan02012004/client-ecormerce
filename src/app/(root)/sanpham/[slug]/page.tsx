
import React from 'react'

import { GalleryProduct, InforProduct } from './_components'

const ProductDetailPage = () => {
  return (
    <div className='container'>
      <div className=''>
        {/* Gallery, Information and Comment  */}
        <div className=''>
          {/* Gallery and Information  */}
          <div className='w-full flex flex-col gap-4 h-auto mb-4 md:gap-8 md:flex-row'>
            {/* left  */}
            <GalleryProduct />
            {/* center  */}
            <InforProduct />
          </div>
          {/* Information Shop  */}
          {/* Comment  */}
          <div className='h-96 w-full bg-white rounded-lg p-3'>

          </div>
        </div>

      </div>

      {/* smilar product  */}
      <div className='w-full bg-white p-3 h-96'></div>
    </div>
  )
}

export default ProductDetailPage