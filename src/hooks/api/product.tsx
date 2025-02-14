import { TypeProduct, TypeProductComponent, TypeProductEdit } from "@/schemas/product";
import { CreateProduct, GetAllProductsQuickView, IQueryGetAllProductsQuickView, UpdateProduct } from "@/services/product";
import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const queryKey: QueryKey = ["product"];
interface IQueryuseGetAllProductQuickView extends Pick<IQueryGetAllProductsQuickView,'type_view'>{
    page?:number,
    limit?:number,
    search?:string,
    categories?:string[]
}
export const useGetAllProductQuickView = (query:IQueryuseGetAllProductQuickView) => {
    const [products,setProducts] = useState<TypeProductComponent[]>([])
    const [paginate,setPaginate] = useState<{totalPage:number,page:number}>({
        totalPage:1,
        page:1
    })
    const queryRequest = {
        page:query?.page?? 1,
        limit:query?.limit??18,
        search:query?.search??'',
        categories:query?.categories??[],
        type_view:query?.type_view??'web',
    } as IQueryGetAllProductsQuickView
    const result = useQuery({
        queryKey,
        queryFn: async() => await GetAllProductsQuickView(queryRequest)
    })

    useEffect(() => {
        if(result.data){
            setProducts(result.data.data)
            setPaginate(result.data.paginate)
        }    
    },[result.data])

    return {
        ...result,
        products,
        paginate
    }
}
export const useCreateProduct = () => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const router = useRouter();
    const mutationKey: MutationKey = ['create_product']
    return useMutation({
        mutationKey,
        mutationFn: async(data:TypeProduct) => await CreateProduct(data),
        onError: () => {
            console.log('Thêm sản phẩm thất bại')
        },
        onSettled: (data,error) => {
            console.log(error)
            if(error){
                toast({
                    variant: "destructive",
                    title: "Lỗi thêm sản phẩm",
                    description: "Thêm sản phẩm thất bại !",
                    duration: 3000
                })
            }else{
                queryClient.invalidateQueries({queryKey})
               router.push('/admin/products')
            }
        }
    })
}

export const useUpdateProduct = () => {
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const mutationKey: MutationKey = ['update_product']
    return useMutation({
        mutationKey,
        mutationFn: async(data:TypeProductEdit) => await UpdateProduct(data),
        onError: () => {
            console.log('Cập nhật sản phẩm thất bại')
        },
        onSettled: (data,error) => {
            if(error){
                toast({
                    variant: "destructive",
                    title: "Cập nhật sản phẩm",
                    description: "Cập nhật sản phẩm thất bại !",
                    duration: 3000
                })
            }else{
                queryClient.invalidateQueries({queryKey})
                toast({
                    variant: "default",
                    title: "Cập nhật sản phẩm",
                    description: "Cập nhật sản phẩm thành công !",
                    duration: 3000
                })
            }
        }
    })
}