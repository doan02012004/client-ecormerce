import React from 'react'

import { redirect } from 'next/navigation'
import { instance } from '@/utils/config'
import ProductEditAdminPageMain from './_components/ProductEditAdminPageMain'
import { ImodelProductFormAdd, IoptionProductFromAdd, IproductFormEdit } from '@/types/product'
import { genarateId } from '@/utils/main'

const ProductEditPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  try {
    const slug = (await params).slug
    const {data} = await instance.get(`/products/admin/slug/${slug}`)
    const newData = {
      ...data,
      images:data.images.map((image:{url:string},index:number) => ({...image, id:`${genarateId()}-${index}`})),
      models:data.models.map((model:ImodelProductFormAdd,index:number) => ({...model,  id:`${genarateId()}-${index}`})),
      options:data.options.map((options:IoptionProductFromAdd,index:number) => ({...options,  id:`${genarateId()}-${index}`,
        values:options.values.map((value,indexValue:number) => ({...value, id:`${genarateId()}-${indexValue}`}))
      })),
    } as IproductFormEdit
    return (
      <div className='pb-40 min-w-[1000px]'>
        <ProductEditAdminPageMain product={newData} />
      </div>
    )
  } catch (error) {
    console.log(error)
    redirect('/admin/products')
  }
}

export default ProductEditPage