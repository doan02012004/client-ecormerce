import authFetch from "@/lib/authFetch"
import { env } from "@/utils/config";


export const refreshAccessToken = async(token:string) => {
    try {
        const result = await fetch(`${env.DOMAIN_NEXT}/api/v1/auth/refresh`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                refreshToken:token
            })
        })
        if (!result.ok) {
            throw new Error(
              "Failed to refresh token" + result.statusText
            );
          }
          const {accessToken} = await result.json()

         // update session
          const updateRes = await fetch(
            `${env.DOMAIN_NEXT}/api/v1/auth/update`,
            {
              method: "POST",
              body: JSON.stringify({
                accessToken
              }),
            }
          );
          if (!updateRes.ok)
            throw new Error("Failed to update the tokens");
          return accessToken;
    } catch (error) {
     console.log('refresh error',error)   
    }
}
export const getUser = async() => {
    const result = await authFetch(`${env.DOMAIN_SERVER}/users/me`,{
        method:'GET'
    })
    return result
}