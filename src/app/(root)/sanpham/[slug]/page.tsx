
import React from 'react'
import { GetProductWebBySlug } from '@/services/product'
import { redirect } from 'next/navigation'
import { AxiosResponse } from 'axios'
import ProductDetailMain from './_components/ProductDetailMain'

const ProductDetailPage = async({params}: { params: Promise<{ slug: string }>}) => {
  const slug = (await params).slug
  const result = await GetProductWebBySlug(slug) as AxiosResponse
  if(result.status !== 200){
    redirect('/')
  }
  const product = result.data
  
  return (
    <div className='container'>
        {/* Gallery, Information and Comment  */}
        <ProductDetailMain product={product} />


      {/* smilar product  */}
      <div className='w-full bg-white p-3 h-96'></div>
    </div>
  )
}

export default ProductDetailPage