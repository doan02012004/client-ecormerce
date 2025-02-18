import { updateToken } from "@/lib/session";
import { NextRequest } from "next/server";

export async function POST(request:NextRequest) {
    const body = await request.json()
    const { accessToken} = body;
    if (!accessToken ) return new Response("Provide Tokens", { status: 401 });
    
    await updateToken(accessToken);
  
    return new Response("OK", { status: 200 });
}