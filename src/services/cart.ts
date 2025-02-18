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