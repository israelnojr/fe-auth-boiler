import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth";
import axios from "axios";
import { LoginSchema } from "@/schemas";
import { checkEmailAndPassword } from "@/data/user";
import { setCookies } from "./lib/utils";

export default {
    providers: [
        Credentials({
          name: "Email and Password",
          credentials: {
            email: { label: "Email", type: "email", placeholder: "Your Email" },
            password: { label: "Password", type: "password" },
          },
          async authorize(credentials) {
            const validatedFields = LoginSchema.safeParse(credentials)
            if(validatedFields.success){
              const {email, password} = validatedFields.data
              const passChecked = await checkEmailAndPassword(email)
              if(passChecked) return null
            
                const { sessionKey, xsrfToken } = await setCookies();
                const data = {
                  email,
                  password
                }
                try {
                  const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/login`, data, {
                    headers: {
                      Cookie: `${process.env.NEXT_PUBLIC_BACKEND_SESSION}=${sessionKey} XSRF-TOKEN=${xsrfToken}`,
                      "X-XSRF-TOKEN": xsrfToken,
                    },
                  })
                  console.log(response.data.user)
                  return response.data.user
                } catch (error) {
                  console.log(error)
                }
        
                return null
              }
              return null
            } 
        }),
      ],
} satisfies NextAuthConfig