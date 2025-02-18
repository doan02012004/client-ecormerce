import { useAppContext } from "@/app/AppProvider";
import { GetCart } from "@/services/cart";
import { QueryKey, useQuery } from "@tanstack/react-query";


const queryKey:QueryKey = ['cart']

export const useCartQuery = () => {
    const {user} = useAppContext()
    return useQuery({
        queryKey,
        queryFn: async() => await GetCart(),
        enabled:!!user
    })
} 