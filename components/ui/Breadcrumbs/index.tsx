'use client'

import React from 'react'
import Link from 'next/link'

import { IBreadcrumbs } from './types'

export const Breadcrumbs = ({ items }: IBreadcrumbs) => {
  const limitedItems = items.slice(0, 3)

  return (
    <nav
      aria-label='Хлебные крошки'
      className='flex items-center space-x-2 text-stone-600 mb-8 text-base font-inter'
    >
      {limitedItems.map((item, index) => (
        <>
          {index < limitedItems.length - 1 && item.href ? (
            <Link
              key={`link-${index}`}
              href={item.href}
              className='hover:text-amber-700 transition-colors'
              aria-current={index === limitedItems.length - 1 ? 'page' : undefined}
            >
              {item.text}
            </Link>
          ) : (
            <span
              key={`span-${index}`}
              className='text-amber-700'
            >
              {item.text}
            </span>
          )}
          {index < limitedItems.length - 1 && <span key={`separator-${index}`}>/</span>}
        </>
      ))}
    </nav>
  )
}
