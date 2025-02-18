import { env } from "@/utils/config"

export const uploadImage = async (file: File) => {
    try {
        const formData = new FormData()
        formData.append('image', file)
        const res = await fetch(`${env.DOMAIN_SERVER}/images/upload`, {
            method: 'POST',
            body: formData,
        })
        const data = await res.json()
        return data
    } catch (error) {
        return error
    }
}