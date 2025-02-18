import { deleteSession } from "@/lib/session";
import { env } from "@/utils/config";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest) {
    const body = await request.json()
    const { refreshToken} = body;
    if (!refreshToken ){
        return new Response("Provide Tokens", { status: 400 });
    }
    const result = await fetch(`${env.DOMAIN_SERVER}/users/refresh`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({refreshToken})
    })
    if(!result.ok){
        await deleteSession()
        return new Response("Provide Tokens", { status: 400 });
    }
    const data = await result.json()
    return  Response.json(data)
}