'use client'

import React from 'react'

import Link from 'next/link'

import { IBreadcrumbs } from './types'
import { cn } from '@/lib/utils'

export const Breadcrumbs = ({ items, separator = '/', className }: IBreadcrumbs) => {
  const limitedItems = items.slice(0, 3)

  return (
    <nav
      aria-label='Хлебные крошки'
      className={cn(
        'flex items-center space-x-2 text-stone-600 mb-8 text-base font-inter',
        className
      )}
    >
      {limitedItems.map((item, index) => (
        <React.Fragment key={item.text}>
          {index > 0 && <span className='select-none'>{separator}</span>}
          {item.href ? (
            <Link
              href={item.href}
              className='hover:text-[#cfaf80] transition-colors'
              aria-current={index === limitedItems.length - 1 ? 'page' : undefined}
            >
              {item.text}
            </Link>
          ) : (
            <span className='text-[#e4b46c]'>{item.text}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  )
}
