import React from 'react'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

const FormError = ({message}: FormErrorProps) => {
    if(!message) return null
    return (
        <div className=' bg-destructive/15 p-3 rounded-md flex items-center
        gap-x-2 text-destructive text-sm ' >
            <ExclamationTriangleIcon className='h-4 w-4' />
            <p>{message}</p>
        </div>
    )
}

export default FormError