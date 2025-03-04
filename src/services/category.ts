import { Icategory, IcategoryForm } from "@/types/categories"
import { Ipaginate } from "@/types/main"
import { instance } from "@/utils/config"

export const getCategoriesForm = async() => {
    try {
        const data = await instance.get(`/categories/form`) 
        return data.data as Icategory[]
    } catch (error) {
        console.log(error)
    }
}

export const getCategoriesBySlug = async(slug:string|null) => {
    try {
        const data = await instance.get(`/categories`,{
            params:{
                slug:slug
            }
        })
        return data.data as {data:Icategory[],paginate:Ipaginate}
    } catch (error) {
        console.log(error)
    }
}

export const getCategoriesPath = async(slug:string|null) => {
    try {
        const data = await instance.get(`/categories/path/${slug}`)
        return data.data as Icategory[]
    } catch (error) {
        console.log(error)
        return []
    }
}

export const getCategoryBySlug = async(slug:string|null) => {
    try {
        const data = await instance.get(`/categories/slug/${slug}`)
        return data.data as Icategory
    } catch (error) {
        console.log(error)
    }
}

export const createCategory = async(data:IcategoryForm) => {
    try {
        const result = await instance.post(`/categories`,data)
        return result.data
    } catch (error) {
        console.log(error)
    }
}