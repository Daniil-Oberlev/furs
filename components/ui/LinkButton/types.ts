import type React from 'react'

export interface ILinkButton {
  href: string
  text: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  variant?: 'amber' | 'amberOutline'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'compact'
  className?: string
}
