import * as React from 'react'

import { cn } from '@/lib/utils'

import { BadgeProps } from './types'

export const Badge = ({ className, variant, ...props }: BadgeProps) => {
  return (
    <div
      className={cn(
        'inline-block rounded-full px-3 py-1 text-xs font-semibold',
        !className?.includes('bg-') && 'bg-[#cfaf80]',
        className
      )}
      {...props}
    />
  )
}
