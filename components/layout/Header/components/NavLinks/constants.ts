import { NAVIGATION } from '@/config/constants'

import { NavItem } from './types'

export const LEFT_NAV_LINKS: NavItem[] = [...NAVIGATION.LEFT_LINKS]

export const RIGHT_NAV_LINKS: NavItem[] = [...NAVIGATION.RIGHT_LINKS]

export const ALL_NAV_LINKS: NavItem[] = [...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS]
