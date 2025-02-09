import { TypeProduct } from "@/schemas/product";
import { instance } from "@/utils/client/config";

export const CreateProduct = async(data:TypeProduct) => {
    try {
        const result = await instance.post('/products',data)
        return result.data
    } catch (error) {
      throw new Error
    }
}