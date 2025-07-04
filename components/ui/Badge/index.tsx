import * as React from 'react'

import { cn } from '@/lib/utils'

import { badgeVariants } from './variants'

import { BadgeProps } from './types'

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}
