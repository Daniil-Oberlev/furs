'use client'

import { useEffect, useRef, useCallback } from 'react'
import type React from 'react'

type UseClickOutsideOptions = {
  enabled?: boolean
  includeTouch?: boolean
  passive?: boolean
  ignore?: (React.RefObject<HTMLElement> | null)[]
}

export const useClickOutside = <T extends HTMLElement>(
  callback: (event: MouseEvent | TouchEvent) => void,
  options: UseClickOutsideOptions = {}
) => {
  const { enabled = true, includeTouch = true, passive = true, ignore = [] } = options
  const ref = useRef<T>(null)

  const memoizedCallback = useCallback(callback, [callback])

  useEffect(() => {
    if (!enabled) return

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node
      if (
        ref.current &&
        !ref.current.contains(target) &&
        !ignore.some(ref => ref?.current?.contains(target))
      ) {
        memoizedCallback(event)
      }
    }

    const eventOptions = { passive }

    document.addEventListener('mousedown', handleClickOutside, eventOptions)
    if (includeTouch) {
      document.addEventListener('touchstart', handleClickOutside, eventOptions)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      if (includeTouch) {
        document.removeEventListener('touchstart', handleClickOutside)
      }
    }
  }, [enabled, includeTouch, passive, memoizedCallback, ignore])

  return ref
}
