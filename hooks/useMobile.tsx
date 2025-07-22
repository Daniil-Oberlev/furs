'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { BREAKPOINTS } from '@/config/constants'

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState<boolean>(false)

  const getMatches = useCallback((): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }, [query])

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const handleChange = () => {
      setMatches(getMatches())
    }

    handleChange()

    mediaQueryList.addEventListener('change', handleChange)

    return () => {
      mediaQueryList.removeEventListener('change', handleChange)
    }
  }, [query, getMatches])

  return matches
}

export const useIsMobile = (): boolean => {
  const mediaQuery = useMemo(() => `(max-width: ${BREAKPOINTS.MOBILE - 1}px)`, [])
  return useMediaQuery(mediaQuery)
}

export const useIsTablet = (): boolean => {
  const mediaQuery = useMemo(
    () => `(min-width: ${BREAKPOINTS.MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET - 1}px)`,
    []
  )
  return useMediaQuery(mediaQuery)
}

export const useIsDesktop = (): boolean => {
  const mediaQuery = useMemo(() => `(min-width: ${BREAKPOINTS.TABLET}px)`, [])
  return useMediaQuery(mediaQuery)
}
