"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const ButtonHandler = ({
    children, 
    mode = "redirect",
    asChild,
    link
}: ButtonHandlerProps) => {

  const router = useRouter()
  if(mode === "modal"){
    return (
      <span>
        TODO: implement modal
      </span>
    )
  }
  const handleClick = () => {
    router.push(`${link}`)
  }
  return (
    <div onClick={handleClick} className='cursor-pointer' >{children}</div>
  )
}

export default ButtonHandler