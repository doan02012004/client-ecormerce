import { useAppContext } from "@/app/AppProvider";
import { AddToCart, DecreaseQuantityCart, DeleteCartItem, GetCart, IncreaseQuantityCart, UpdateQuantityCart } from "@/services/cart";
import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useToast } from "../use-toast";
import { useRouter } from "next/navigation";


const queryKey:QueryKey = ['cart']

export const useCartQuery = () => {
    const {user} = useAppContext()
    const CustomQueryKey = [...queryKey,user?._id]
    return useQuery({
        queryKey:CustomQueryKey,
        queryFn: async() => await GetCart(),
        enabled:!!user
    })
} 

export const useCartAdd = () => {
    const {toast} = useToast()
    const mutationKey: MutationKey = ['add_to_cart']
    const route = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey,
        mutationFn: async({product_id,quantity,variant_id}:{product_id:string,variant_id:string,quantity:number}) => await AddToCart(product_id,variant_id,quantity),
        onSettled: (data,error) => {
            if(data.statusCode && data.statusCode == 401){
                 toast({
                    variant: 'destructive',
                    title:'Tài khoản',
                    duration:1500,
                    description:"Bạn chưa đăng nhập"
                })
                return route.push('/login')
            }
            if(data.statusCode && data.statusCode !== 201){
                return toast({
                    variant: 'destructive',
                    title:'Giỏ hàng',
                    duration:1500,
                    description:data.message
                })
            }
            if(error){
               return toast({
                    variant: 'destructive',
                    title:'Giỏ hàng',
                    duration:1500,
                    description:"Đã xảy ra lỗi, vui lòng thử lại"
                })
            }
            queryClient.invalidateQueries({queryKey})
            toast({
                title:'Giỏ hàng',
                duration:1500,
                description:"Thêm giỏ hàng thành công"
            })
        }
    })

}


export const useIncreaseCart = () => {
    const {toast} = useToast()
    const mutationKey: MutationKey = ['increase_cart']
    const route = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey,
        mutationFn: async({cartItem_id}:{cartItem_id:string}) => await IncreaseQuantityCart(cartItem_id),
        onSettled: (data,error) => {
            if(data.statusCode && data.statusCode == 401){
                 toast({
                    variant: 'destructive',
                    title:'Tài khoản',
                    duration:1500,
                    description:"Bạn chưa đăng nhập"
                })
                return route.push('/login')
            }
            if(data.statusCode && data.statusCode !== 201){
                return toast({
                    variant: 'destructive',
                    title:'Giỏ hàng',
                    duration:1500,
                    description:data.message
                })
            }
            if(error){
                return toast({
                     variant: 'destructive',
                     title:'Giỏ hàng',
                     duration:1500,
                     description:"Đã xảy ra lỗi, vui lòng thử lại"
                 })
             }
            queryClient.invalidateQueries({queryKey})
            toast({
                title:'Giỏ hàng',
                duration:1500,
                description:"Tăng giỏ hàng thành công"
            })
        }
    })

}

export const useDecreaseCart = () => {
    const {toast} = useToast()
    const mutationKey: MutationKey = ['decrease_cart']
    const route = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey,
        mutationFn: async({cartItem_id}:{cartItem_id:string}) => await DecreaseQuantityCart(cartItem_id),
        onSettled: (data,error) => {
            if(data.statusCode && data.statusCode == 401){
                 toast({
                    variant: 'destructive',
                    title:'Tài khoản',
                    duration:1500,
                    description:"Bạn chưa đăng nhập"
                })
                return route.push('/login')
            }
            if(data.statusCode && data.statusCode !== 201){
                return toast({
                    variant: 'destructive',
                    title:'Giỏ hàng',
                    duration:1500,
                    description:data.message
                })
            }
            if(error){
                return toast({
                     variant: 'destructive',
                     title:'Giỏ hàng',
                     duration:1500,
                     description:"Đã xảy ra lỗi, vui lòng thử lại"
                 })
             }
            queryClient.invalidateQueries({queryKey})
            toast({
                title:'Giỏ hàng',
                duration:1500,
                description:"Giảm giỏ hàng thành công"
            })
        }
    })

}

export const useDeleteCartItem = () => {
    const {toast} = useToast()
    const mutationKey: MutationKey = ['delete_cart']
    const route = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey,
        mutationFn: async({cartItem_id}:{cartItem_id:string}) => await DeleteCartItem(cartItem_id),
        onSettled: (data,error) => {
            if(data.statusCode && data.statusCode == 401){
                 toast({
                    variant: 'destructive',
                    title:'Tài khoản',
                    duration:1500,
                    description:"Bạn chưa đăng nhập"
                })
                return route.push('/login')
            }
            if(data.statusCode && data.statusCode !== 201){
                return toast({
                    variant: 'destructive',
                    title:'Giỏ hàng',
                    duration:1500,
                    description:data.message
                })
            }
            if(error){
                return toast({
                     variant: 'destructive',
                     title:'Giỏ hàng',
                     duration:1500,
                     description:"Đã xảy ra lỗi, vui lòng thử lại"
                 })
             }
            queryClient.invalidateQueries({queryKey})
            toast({
                title:'Giỏ hàng',
                duration:1500,
                description:data?.message ?? 'Xóa sản phẩm thành công'
            })
        }
    })

} 

export const useUpdateQuantityCart = () => {
    const {toast} = useToast()
    const mutationKey: MutationKey = ['decrease_cart']
    const route = useRouter()
    const queryClient = useQueryClient()
    return useMutation({
        mutationKey,
        mutationFn: async({cartItem_id,quantity}:{cartItem_id:string,quantity:number}) => await UpdateQuantityCart(cartItem_id,quantity),
        onSettled: (data,error) => {
            if(data.statusCode && data.statusCode == 401){
                 toast({
                    variant: 'destructive',
                    title:'Tài khoản',
                    duration:1500,
                    description:"Bạn chưa đăng nhập"
                })
                return route.push('/login')
            }
            if(data.statusCode && data.statusCode !== 201){
                return toast({
                    variant: 'destructive',
                    title:'Thêm giỏ hàng',
                    duration:1500,
                    description:data.message
                })
            }
            if(error){
                return toast({
                     variant: 'destructive',
                     title:'Thêm giỏ hàng',
                     duration:1500,
                     description:"Đã xảy ra lỗi, vui lòng thử lại"
                 })
             }
            queryClient.invalidateQueries({queryKey})
            toast({
                title:'Thêm giỏ hàng',
                duration:1500,
                description:"Cập nhật giỏ hàng thành công"
            })
        }
    })

}
