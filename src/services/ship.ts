import authFetch from "@/lib/authFetch"
import { IshipFormAdd, IshipFormEdit } from "@/types/ship"
import { env } from "@/utils/config"


export const CreateShip =  async(data:IshipFormAdd) => {
    try {
        const result = await authFetch(`${env.DOMAIN_SERVER}/ships/create`,{
            method:"POST",
            body:JSON.stringify(data)
        })
        return await result.json()
    } catch (error) {
       return error
    }
}

export const GetAllShipAdmin = async() => {
    try {
        const result = await authFetch(`${env.DOMAIN_SERVER}/ships/admin`)
        if(!result.ok){
            return []
        }
        return await result.json()
    } catch (error) {
       console.log(error)
    }
}

export const GetShipAdminById = async (id:string) => {
    return await authFetch(`${env.DOMAIN_SERVER}/ships/admin/detail/${id}`,{
        method:"GET",
        cache:"no-store"
    })
}

export const UpdateShip =  async(data:IshipFormEdit) => {
    try {
        const result = await authFetch(`${env.DOMAIN_SERVER}/ships/admin/update/${data._id}`,{
            method:"PUT",
            body:JSON.stringify(data)
        })
        return await result.json()
    } catch (error) {
        console.log(error)
       return null
    }
}