import type React from 'react'

export interface IBreadcrumbs {
  items: { text: string; href?: string }[]
  separator?: React.ReactNode
  className?: string
}
