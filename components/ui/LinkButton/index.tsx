import * as React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import { ILinkButton } from './types'

export const LinkButton = ({
  href,
  text,
  icon,
  iconPosition = 'right',
  variant = 'amber',
  size = 'default',
  className
}: ILinkButton) => {
  return (
    <Link href={href}>
      <Button
        variant={variant}
        size={size}
        asChild
        className={cn('text-base', className)}
      >
        <span>
          {icon && iconPosition === 'left' && <span className='mr-2'>{icon}</span>}
          {text}
          {icon && iconPosition === 'right' && <span className='ml-2'>{icon}</span>}
        </span>
      </Button>
    </Link>
  )
}
