"use client"
import * as z from 'zod'
import { LoginSchema } from '@/schemas'
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
import { LoginUser } from '@/actions/login'

const LoginForm = () => {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState<String | undefined>("")
    const [success, setSuccess] = useState<String | undefined>("")
    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues:{
            email: "",
            password: ""
        }
    })

    const onSubmit = async ({email, password}: z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            LoginUser({email, password})
            .then((data) => {
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return (
        <CardWrapper    
            headerLabel='Welcome Back'
            backButtonLabel="Don't have an account? "
            backButtonHref='/register'
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
                  ): 'Login' }
                    
                    
                </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm

function data(value: void): void | PromiseLike<void> {
    throw new Error('Function not implemented.')
}
function setError(error: any) {
    throw new Error('Function not implemented.')
}

function setSuccess(success: any) {
    throw new Error('Function not implemented.')
}

