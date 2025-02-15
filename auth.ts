import axios from "axios"
import NextAuth from "next-auth"
import authConfig from "@/auth.config"

export const {
    handlers: {GET, POST},
    auth,
    signIn,
    signOut
} = NextAuth({
    session: {strategy: "jwt"},
    ...authConfig,
})
