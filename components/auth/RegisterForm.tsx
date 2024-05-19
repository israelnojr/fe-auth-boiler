"use client"
import * as z from 'zod'
import { RegisterSchema } from '@/schemas'
import React, { useState, useTransition } from 'react'
import CardWrapper from '@/components/auth/CardWrapper'
import { zodResolver } from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Loader2 } from "lucide-react"
import FormError from '@/components/FormError'
import FormSuccess from '@/components/FormSuccess'
import { RegisterUser } from '@/actions/register'

const RegisterForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<String | undefined>("")
    const [success, setSuccess] = useState<String | undefined>("")
    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues:{
            email: "",
            password: "",
            name: "",
            password_confirmation:""
        }
    })

    const onSubmit = async ({name, email, password, password_confirmation}: z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            RegisterUser({name, email, password, password_confirmation})
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <CardWrapper    
            headerLabel='Create account'
            backButtonLabel="Already have an account? "
            backButtonHref='/login'
            showSocial
        >
            <Form {...form} >
                <form 
                    className='space-y-6' 
                    onSubmit={form.handleSubmit(onSubmit)} 
                >
                <div className="space-y-4">
                    <FormField 
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input  disabled={isPending}
                                        {...field}
                                        placeholder='John Doe'
                                        type='text'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input  disabled={isPending}
                                        {...field}
                                        placeholder='me@you.com'
                                        type='email'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <div className="flex items-center w-full gap-x-2">
                    <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input disabled={isPending} 
                                        {...field}
                                        placeholder='******'
                                        type='password'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField 
                        control={form.control}
                        name="password_confirmation"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Confirm Password</FormLabel>
                                <FormControl>
                                    <Input  disabled={isPending}
                                        {...field}
                                        placeholder='******'
                                        type='password'
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    </div>
                </div>
                <FormSuccess message={success} />
                <FormError message={error} />
                <Button disabled={isPending}
                    type='submit'
                    size={'lg'}
                    className='w-full flex items-center '
                >
                  {isPending ? (
                    <>
                      <Loader2 size={20} className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ): 'Register' }
                    
                    
                </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm

function data(value: void): void | PromiseLike<void> {
    throw new Error('Function not implemented.')
}
function setError(error: any) {
    throw new Error('Function not implemented.')
}

function setSuccess(success: any) {
    throw new Error('Function not implemented.')
}

