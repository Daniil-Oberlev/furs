import type { VariantProps } from 'class-variance-authority'
import type { LinkProps } from 'next/link'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { buttonVariants } from '../button'

export type TLinkButton = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    text: string
    icon?: ReactNode
    iconPosition?: 'left' | 'right'
    variant?: VariantProps<typeof buttonVariants>['variant']
    size?: VariantProps<typeof buttonVariants>['size']
    className?: string
  }
