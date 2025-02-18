'use server'
import { SignJWT, jwtVerify } from 'jose'
import { SessionPayload } from "@/types/auth"
import { cookies } from 'next/headers'

const secretKey = process.env.SESSION_SECRET
const encodedKey = new TextEncoder().encode(secretKey)

export async function createSession(payload: SessionPayload) {
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
    const session = await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(encodedKey)

    cookies().set('session', session, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
}

export async function getSession() {
    try {
        const session = cookies().get('session')?.value
        if (!session) {
            return null
        }
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ['HS256'],
        })
        return payload as SessionPayload
    } catch (error) {
        console.error("Failed to verify the session", error);
        // redirect("/auth/login");
    }
}

export async function deleteSession() {
    await cookies().delete("session");
}

export async function updateToken(newAccessToken:string) {
    const cookie = cookies().get("session")?.value;
    if (!cookie) return null;
  
    const { payload } = await jwtVerify<SessionPayload>(
      cookie,
      encodedKey
    );
  
    if (!payload) throw new Error("Session not found");
  
    const newPayload: SessionPayload = {
      user: {
        ...payload.user,
      },
      accessToken:newAccessToken,
      refreshToken:payload.refreshToken
    };
  
    await createSession(newPayload);
    
}
