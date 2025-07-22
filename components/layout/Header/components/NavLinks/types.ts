import type { NavItem } from '@/config/types'

export interface INavLinks {
  className?: string
  linkClassName?: string
  links: NavItem[]
  onLinkClick?: () => void
}
