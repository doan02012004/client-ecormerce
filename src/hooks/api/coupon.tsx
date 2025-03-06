import { useAppContext } from "@/app/AppProvider"
import { CreateCoupon, GetAllCouponAdmin, GetAllCouponByUserId, SaveCoupon, UpdateCoupon } from "@/services/coupon"
import { Icoupon, IcouponBase } from "@/types/coupon"
import { MutationKey, QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useToast } from "../use-toast"


const queryKey: QueryKey = ['coupons']

export const useCouponCreate = () => {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const mutationKey: MutationKey = ['create_coupon']
    return useMutation({
        mutationKey,
        mutationFn: async (dataForm: IcouponBase) => await CreateCoupon(dataForm),
        onSettled: (data) => {
            if (data.statusCode !== 201) {
                return toast({
                    variant: 'destructive',
                    title: 'Mã giảm giá',
                    description: data.message??"Thêm mã giảm giá thất bại",
                    duration:1500
                })
            }
            queryClient.invalidateQueries({ queryKey })
            return toast({
                title: 'Mã giảm giá',
                description: data.message??"Thêm mã giảm giá thành công",
                duration:1500
            })
        }
    })
}

export const useCouponUpdate = () => {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const mutationKey: MutationKey = ['create_coupon']
    return useMutation({
        mutationKey,
        mutationFn: async (dataForm: Icoupon) => await UpdateCoupon(dataForm),
        onSettled: (data) => {
            if (data.statusCode !== 200) {
                return toast({
                    variant: 'destructive',
                    title: 'Mã giảm giá',
                    description: data.message??"Cập nhật mã giảm giá thất bại",
                    duration:1500
                })
            }
            queryClient.invalidateQueries({ queryKey })
            return toast({
                title: 'Mã giảm giá',
                description: data.message??"Cập nhật mã giảm giá thành công",
                duration:1500
            })
        }
    })
}

export const useCouponSaveByUser = () => {
    const { toast } = useToast()
    const queryClient = useQueryClient()
    const mutationKey: MutationKey = ['save_coupon']
    return useMutation({
        mutationKey,
        mutationFn: async (coupon_id: string) => await SaveCoupon(coupon_id),
        onSettled: (data) => {
            if (data.statusCode !== 201) {
                return toast({
                    variant: 'destructive',
                    title: 'Mã giảm giá',
                    description: data.message??"Lưu mã giảm giá thất bại",
                    duration:1500
                })
            }
            queryClient.invalidateQueries({ queryKey })
            return toast({
                title: 'Mã giảm giá',
                description: data.message??"Lưu mã giảm giá thành công",
                duration:1500
            })
        }
    })
}

export const useCouponQueryAdmin = () => {
    return useQuery({
        queryKey,
        queryFn: async () => await GetAllCouponAdmin()
    })
}

export const useCouponQueryByUser = () => {
    const { user } = useAppContext()
    return useQuery({
        queryKey:[...queryKey,user?._id] ,
        queryFn: async () => await GetAllCouponByUserId(),
        enabled: !!user
    })
}


