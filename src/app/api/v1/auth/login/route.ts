import { createSession } from "@/lib/session"
import { instance } from "@/utils/config"

export async function POST(request: Request) {
    const data = await request.json()
    const result = await instance.post('/users/login',data)
    if(result.status !==200){
        return new Response(`Đăng nhập thất bại`, {
            status: 500,
          })
    }
    const payload = {
        accessToken:result.data.accessToken,
        refreshToken:result.data.refreshToken,
        user:result.data.user,
    }
    await createSession(payload)
    
    return Response.json(result.data)
}