
import { IproductFormEdit, IproductFromAdd } from "@/types/product";
import { instance } from "@/utils/config";
import { AxiosResponse } from "axios";

export const CreateProduct = async(data:IproductFromAdd) => {
    try {
        const result = await instance.post('/products',data)
        return result.data
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:unknown) {
      console.log(error)
      throw new Error
    }
}

export interface IQueryGetAllProductsQuickView {
  type_view:'admin'|'web',
  page:number,
  limit:number,
  search:string,
  categories:string[]
}
export const GetAllProductsQuickView = async(query:IQueryGetAllProductsQuickView) => {
  try {
      const result = await instance.get('/products/quickview',{
        params:query
      })
      return result.data
  } catch (error:unknown) {
    console.log(error)
    throw new Error
  }
}

export const GetProductAdminBySlug = async(slug:string) => {
  try {
    const result = await instance.get(`/products/admin/slug/${slug}`)
    return result
  } catch (error) {
    return error
  }
}

export const GetProductWebBySlug = async(slug:string) => {
  try {
    const result = await instance.get(`/products/web/slug/${slug}`) 
    return result as AxiosResponse
  } catch (error) {
    return error
  }
}

export const UpdateProduct = async(data:IproductFormEdit) => {
  try {
      const result = await instance.put(`/products/update/${data._id}`,data)
      return result.data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:unknown) {
    console.log(error)
    throw new Error
  }
}