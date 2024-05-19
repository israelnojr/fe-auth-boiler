"use server"
import { checkEmailExists } from "@/data/user";
import { RegisterSchema } from "@/schemas";
import axios from "axios";
export const RegisterUser = async ({name, email, password, password_confirmation}: 
    RegisterUserProps) => {
    const validatedField = RegisterSchema.safeParse({name, email, password, password_confirmation})
    if(!validatedField.success) return {error: "Somthing went wrong"}
   
    const userExist = await checkEmailExists(validatedField.data.email)
    if(userExist) return {error: "Email already in use!"}

    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/register`, 
        {name, email, password, password_confirmation} = validatedField.data);
    const {token} = response.data
    return {success: "Registered successfully", token}
     
}