import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {
    publicRoutes,
    authRoutes,
    apiPrefix,
    DEFAULT_LOGIN_REDIRECT
} from '@/routes'

const {auth} = NextAuth(authConfig)
export default auth((req) => {
    const {nextUrl} = req
    const isLoggedIn = !!req.auth

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiPrefix)
    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)

    if(isApiAuthRoute) {
        return null
    }

    if(isAuthRoutes) {
        if(isLoggedIn){
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
        }
        return null
    }

    if(!isLoggedIn && !isPublicRoutes){
        return Response.redirect(new URL("/login", nextUrl))
    }

    return null
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}