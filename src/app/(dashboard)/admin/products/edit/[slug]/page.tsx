import React from 'react'

import { redirect } from 'next/navigation'
import ProductEditAdminPageMain from './_components/ProductEditAdminPageMain'
import { instance } from '@/utils/config'

const ProductEditPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  try {
    const slug = (await params).slug
    const result = await instance.get(`/products/admin/slug/${slug}`)
    
    return (
      <div className='pb-40 min-w-[1000px]'>
        <ProductEditAdminPageMain product={result.data} />
      </div>
    )
  } catch (error) {
    console.log(error)
    redirect('/admin/products')
  }
}

export default ProductEditPage