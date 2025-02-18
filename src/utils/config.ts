import axios from 'axios'

export const env = {
    DOMAIN_SERVER:process.env.NEXT_PUBLIC_DOMAIN_SERVER,
    DOMAIN_NEXT:process.env.NEXT_PUBLIC_API_URL,
    SESSION_SECRET:process.env.SESSION_SECRET
}

export const instance = axios.create({
    baseURL:`${env.DOMAIN_SERVER}`
})