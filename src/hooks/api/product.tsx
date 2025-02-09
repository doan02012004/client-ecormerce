import { TypeProduct } from "@/schemas/product";
import { CreateProduct } from "@/services/product";
import { MutationKey, QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { useRouter } from "next/navigation";


const queryKey: QueryKey = ["product"];
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
            //    router.push('/admin/products')
            }
        }
    })
}