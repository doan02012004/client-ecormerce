'use client'
import { CreateShip, GetAllShipAdmin, UpdateShip } from "@/services/ship"
import { IshipFormAdd, IshipFormEdit } from "@/types/ship"
import { QueryKey, useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useToast } from "../use-toast"
import { useRouter } from "next/navigation"

const queryKey: QueryKey = ['ship']

export const useShipCreate = () => {
    const mutationKey = ['ship_create']
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const router = useRouter();
    return useMutation({
        mutationKey,
        mutationFn: async (data: IshipFormAdd) => await CreateShip(data),
        onSettled: (_, error) => {
            if (error) {
                toast({
                    variant: "destructive",
                    title: "Thêm nhà vận chuyển",
                    description: "Thêm nhà vận chuyểnthất bại !",
                    duration: 3000
                })
            } else {
                queryClient.invalidateQueries({ queryKey })
                router.push('/admin/ships')
            }
        }
    })
}

export const useShipQuery = () => {
    return useQuery({
        queryKey,
        queryFn:  async() => GetAllShipAdmin() 
    })
}

export const useShipUpdate = () => {
    const mutationKey = ['ship_update']
    const queryClient = useQueryClient()
    const { toast } = useToast()
    const router = useRouter();
    return useMutation({
        mutationKey,
        mutationFn: async (data: IshipFormEdit) => await UpdateShip(data),
        onSettled: (data ) => {
            if (!data) {
                toast({
                    variant: "destructive",
                    title: "Cập nhật nhà vận chuyển",
                    description: "Cập nhật nhà vận chuyển thất bại !",
                    duration: 3000
                })
            } else {
                toast({
                    variant: "default",
                    title: "Cập nhật nhà vận chuyển",
                    description: "Cập nhật nhà vận chuyển thành công !",
                    duration: 3000
                })
                queryClient.invalidateQueries({ queryKey })
                router.push('/admin/ships')
            }
        }
    })
}