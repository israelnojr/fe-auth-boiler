"use server"
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { error } from "console";
import { AuthError } from "next-auth";
export const LoginUser = async ({email, password}: LoginUserProps) => {
    const validatedFields = LoginSchema.safeParse({email, password})
    if(!validatedFields.success) return {error: "Invalid fields"} 
    try{
        await signIn("credentials", {
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        })
    }catch(error){
        if(error instanceof AuthError) {
           switch( error.type){
            case "CredentialsSignin":
                return {error: "Invalid credentials!"}
            default:
                return {error: "Something went wrong!"}
           }
        }
        throw error
    }
}