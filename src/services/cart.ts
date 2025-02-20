import authFetch from "@/lib/authFetch"
import { Icart } from "@/types/cart"
import { env } from "@/utils/config"


export const GetCart = async() => {
    try {
        const result = await authFetch(`${env.DOMAIN_SERVER}/carts`,{method:"GET"})
        const data = await result.json()
        return data as Icart
    } catch (error) {
        console.log(error)
    }
}

export const AddToCart = async(product_id:string,variant_id:string,quantity:number) => {

    try {
        const response =  await authFetch(`${env.DOMAIN_SERVER}/carts/add-to-cart`,{
            method:"POST",
            body:JSON.stringify({
                product_id,
                variant_id,
                quantity
            })
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await response.json() as any
    } catch (error) {
       return error
    }
   
}

export const IncreaseQuantityCart = async(cartItem_id:string) => {
   try {
    const response = await authFetch(`${env.DOMAIN_SERVER}/carts/increase`,{
        method:"POST",
        body:JSON.stringify({
            cartItem_id
        })
    })
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return await response.json() as any
   } catch (error) {
        return error
   }
}

export const DecreaseQuantityCart = async(cartItem_id:string) => {
    try {
        const response = await authFetch(`${env.DOMAIN_SERVER}/carts/decrease`,{
            method:"POST",
            body:JSON.stringify({
                cartItem_id
            })
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await response.json() as any
       } catch (error) {
            return error
       }
}

export const UpdateQuantityCart = async(cartItem_id:string,quantity:number) => {
    try {
        const response = await await authFetch(`${env.DOMAIN_SERVER}/carts/update-qty`,{
            method:"POST",
            body:JSON.stringify({
                cartItem_id,
                quantity
            })
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await response.json() as any
       } catch (error) {
            return error
       }
}

export const DeleteCartItem = async(cartItem_id:string) => {
    try {
        const response = await authFetch(`${env.DOMAIN_SERVER}/carts/delete`,{
            method:"POST",
            body:JSON.stringify({
                cartItem_id
            })
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await response.json() as any
       } catch (error) {
            return error
       }
}