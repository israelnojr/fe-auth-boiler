import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { socialLogin } from '@/actions/social'
const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
        <Button size="lg" className="w-full"
            variant={"outline"} onClick={() => {socialLogin('google')}} >
            <FcGoogle className='h-5 w-5'  />
        </Button>

        {/* <Button size="lg" className="w-full"
            variant={"ghost"} onClick={() => {}} >
            <FaTwitter className='h-5 w-5'  />
        </Button> */}

        <Button size="lg" className="w-full"
             onClick={() => {socialLogin('github')}} >
            <FaGithub className='h-5 w-5'  />
        </Button>
    </div>
  )
}

export default Social