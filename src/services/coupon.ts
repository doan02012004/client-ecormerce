import authFetch from "@/lib/authFetch"
import { Icoupon, IcouponBase } from "@/types/coupon"
import { env } from "@/utils/config"

export const CreateCoupon = async(dataForm:IcouponBase) => {
    try {
        const respone = await authFetch(`${env.DOMAIN_SERVER}/coupons/create`,{
            method:'POST',
            body:JSON.stringify(dataForm)
        })
        return await respone.json()
    } catch (error) {
        return error
    }
}

export const SaveCoupon = async(coupon_id:string) => {
    try {
        const respone = await authFetch(`${env.DOMAIN_SERVER}/coupons/save`,{
            method:'POST',
            body:JSON.stringify({
                coupon_id
            })
        })
        return await respone.json()
    } catch (error) {
        return error
    }
}

export const GetAllCouponAdmin = async() => {
    try {
        const respone = await fetch(`${env.DOMAIN_SERVER}/coupons/admin`)
        if(!respone.ok){
          return null
        }
        return await respone.json()
    } catch (error) {
       console.log(error)
    }
}

export const GetAllCouponByUserId = async() => {
    try {
        const respone = await authFetch(`${env.DOMAIN_SERVER}/coupons`)
        return await respone.json()
    } catch (error) {
        console.log(error)
    }
}

export const GetCouponByCode = async (code:string) => {
   return await fetch(`${env.DOMAIN_SERVER}/coupons/detail/${code}`,{method:'GET'})
}

export const UpdateCoupon = async(dataForm:Icoupon) => {
    try {
        const respone = await authFetch(`${env.DOMAIN_SERVER}/coupons/update/${dataForm.code}`,{
            method:'PUT',
            body:JSON.stringify(dataForm)
        })
        return await respone.json()
    } catch (error) {
        return error
    }
}