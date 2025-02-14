import { TypeProduct, TypeProductEdit } from "@/schemas/product";
import { instance } from "@/utils/client/config";

export const CreateProduct = async(data:TypeProduct) => {
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

export const UpdateProduct = async(data:TypeProductEdit) => {
  try {
      const result = await instance.put(`/products/update/${data._id}`,data)
      return result.data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error:unknown) {
    console.log(error)
    throw new Error
  }
}