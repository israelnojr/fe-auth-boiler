import { font } from '@/constants'
import { cn } from '@/lib/utils'
import React from 'react'

const Header = ({label}: HeaderProps) => {
  return (
    <div className={cn(" w-full flex flex-col gap-y-4 items-center justify-center ")} >
        <h1 className={cn("text-2xl font-semibold", font.className, )}>
          🔏 Auth
        </h1>
        <p className="text-muted-foreground text-sm">
            {label}
        </p>
    </div>
  )
}

export default Header