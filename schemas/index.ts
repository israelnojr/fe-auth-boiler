import * as z from "zod"

export const LoginSchema = z.object({
    email: z.string({
        invalid_type_error: "Must be type string"
    }).email(),
    password: z.string({invalid_type_error: "Must be type string"}).min(6, {
        message: 'Password must contain at least 6 character(s)'
    })
})

export const RegisterSchema = z.object({
    email: z.string({
        invalid_type_error: "Must be type string"
    }).email(),
    password: z.string({invalid_type_error: "Must be type string"}).min(6, {
        message: 'Password must contain at least 6 character(s)'
    }),
    name: z.string().min(2,{
        message: "Name is required"
    }),
    password_confirmation: z.string({invalid_type_error: "Must be type string"}).min(6, {
        message: 'Password must contain at least 6 character(s)'
    })
}).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
});