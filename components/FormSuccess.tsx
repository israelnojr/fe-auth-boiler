import React from 'react'
import { CheckCircledIcon } from '@radix-ui/react-icons'

const FormError = ({message}: FormErrorProps) => {
    if(!message) return null
    return (
        <div className=' bg-emerald-500/15 p-3 rounded-md flex items-center
        gap-x-2 text-emerald-500 text-sm ' >
            <CheckCircledIcon className='h-4 w-4' />
            <p>{message}</p>
        </div>
    )
}

export default FormError