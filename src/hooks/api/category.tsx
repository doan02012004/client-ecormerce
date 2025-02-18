'use client'

import { useToast } from '@/hooks/use-toast'
import { createCategory, getCategoriesBySlug, getCategoriesForm, getCategoriesPath, getCategoryBySlug } from '@/services/category'
import { Icategory, IcategoryForm } from '@/types/categories'
import { Ipaginate } from '@/types/main'
import { QueryKey, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


// query
const queryKey: QueryKey = ["category"];
const queryKeyPath: QueryKey = ["category_path"];
export const useCategoryQueryForm = () => {
    const [categories,setCategories] = useState<Icategory[]>([])
    const query = useQuery({
        queryKey,
        queryFn: async() => await getCategoriesForm()
    })
    useEffect(() => {
        if(query.data){
            setCategories(query.data)
        }
    },[query])

  return {
    categories,
    ...query
  }
}

export const useCategoryQuery = (slug:string|null) => {
    const [categories,setCategories] = useState<Icategory[]>([])
    const [paginate,setPaginate] = useState<Ipaginate>({
        total:0,
        currentPage:1
    })
    const query =  useQuery({
        queryKey:[...queryKey,slug],
        queryFn: async() => await getCategoriesBySlug(slug)
    })
    useEffect(() => {
        if(query.data){
            setCategories(query.data.data)
            setPaginate(query.data.paginate)
        }
    },[query])

    return {
        categories,
        paginate,
        ...query
      }
}

export const useCategoryQueryDetail = (slug:string|null) => {
    const [category,setCategory] = useState<Icategory>({
        name: '',
        slug:'',
        url_path:'',
        parent_id:'',
        url_thumbnail:'',
        display_name:'',
        _id:''
    })
    const query =  useQuery({
        queryKey:[...queryKey,slug],
        queryFn: async() => await getCategoryBySlug(slug)
    })
    useEffect(() => {
        if(query.data){
            setCategory(query.data)
        }
    },[query])

    return {
        category,
        ...query
      }
}

export const useCategoryQueryPath = (slug:string|null) => {
    const [categoriesPath,setCategoriesPath] = useState<Icategory[]>([])
 
    const query =  useQuery({
        queryKey:[...queryKeyPath,slug],
        queryFn: async() => await getCategoriesPath(slug)
    })
    useEffect(() => {
        if(query.data){
            setCategoriesPath(query.data)
        }
    },[query])

    return {
        categoriesPath,
        ...query
      }
}
// mutation
export const useCategoryCreate = () =>{
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const router = useRouter();
    const mutationKey = ['category_create']
    return useMutation({
            mutationKey,
            mutationFn: (data:IcategoryForm) => createCategory(data),
            onMutate:() => {
                console.log('Mutate')
            },
            onSettled: (_, error) => {
                if(error){
                    toast({
                        variant: "destructive",
                        title: "Thêm danh mục",
                        description: "Lỗi thêm danh mục",
                        duration: 3000
                    })
                }else{
                    queryClient.invalidateQueries({queryKey})
                   router.push('/admin/categories')
                }
            }
    })
}

