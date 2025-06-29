'use client'

import React from 'react'
import Link from 'next/link'

interface IBreadcrumbItem {
  text: string
  href?: string
}

interface IBreadcrumbs {
  items: IBreadcrumbItem[]
}

export const Breadcrumbs = ({ items }: IBreadcrumbs) => {
  const limitedItems = items.slice(0, 3)

  return (
    <nav
      aria-label='Хлебные крошки'
      className='flex items-center space-x-2 text-stone-600 mb-8 text-base font-inter'
    >
      {limitedItems.map((item, index) => (
        <React.Fragment key={index}>
          {index < limitedItems.length - 1 && item.href ? (
            <Link
              href={item.href}
              className='hover:text-amber-700 transition-colors'
              aria-current={index === limitedItems.length - 1 ? 'page' : undefined}
            >
              {item.text}
            </Link>
          ) : (
            <span className='text-amber-700'>{item.text}</span>
          )}
          {index < limitedItems.length - 1 && <span>/</span>}
        </React.Fragment>
      ))}
    </nav>
  )
}
