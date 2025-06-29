'use client'

import { useEffect, useRef } from 'react'

export const useClickOutside = <T extends HTMLElement>(
  callback: (event: MouseEvent) => void,
  enabled = true
) => {
  const ref = useRef<T>(null)
  const callbackRef = useRef(callback)
  callbackRef.current = callback

  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callbackRef.current(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [enabled])

  return ref
}
