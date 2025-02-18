
import { refreshAccessToken } from "@/services/auth";
import { deleteSession, getSession } from "./session";

const authFetch = async (url: string, options: RequestInit = {}) => {
    const session = await getSession()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headers: any = {
        "Content-Type": "application/json",
    };
    if (session && session.accessToken) {
        headers['Authorization'] = `Bearer ${session.accessToken}`
    }

    let response = await fetch(url, {
        ...options,
        headers
    })
    // Nếu accessToken hết hạn, thử refresh token
    if (response.status === 401) {
      if(session?.refreshToken){
        const newAccessToken = await refreshAccessToken(session?.refreshToken??'');
        if (newAccessToken) {
            headers["Authorization"] = `Bearer ${newAccessToken}`;
            response = await fetch(url, { ...options, headers });
        }
      }
    }

    return response
}


export default authFetch