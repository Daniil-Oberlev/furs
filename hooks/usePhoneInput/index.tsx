'use client'

import React, { useState, useCallback, useMemo } from 'react'
import { z } from 'zod'

import { ALLOWED_KEYS } from './constants'
import { phoneSchema } from './schema'
import { formatPhoneNumber } from './utils'
import { PhoneInputReturn } from './types'

export const usePhoneInput = (initialValue = ''): PhoneInputReturn => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState<string | null>(null)
  const [touched, setTouched] = useState(false)

  const validatePhone = useCallback((phone: string): boolean => {
    try {
      phoneSchema.parse(phone.replace(/\D/g, ''))
      setError(null)
      return true
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessage = err.errors[0].message
        setError(errorMessage)
      } else {
        setError('Неверный формат номера')
      }
      return false
    }
  }, [])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = formatPhoneNumber(e.target.value)
      setValue(newValue)
      validatePhone(newValue)
    },
    [validatePhone]
  )

  const handleBlur = useCallback(() => {
    setTouched(true)
    validatePhone(value)
  }, [value, validatePhone])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    const isCtrlCombination =
      (e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'z'].includes(e.key.toLowerCase())

    if (ALLOWED_KEYS.includes(e.key) || isCtrlCombination) return

    const isDigit = /^[0-9]$/.test(e.key)
    const isNumpadDigit = e.key.startsWith('Numpad') && /[0-9]/.test(e.key.slice(-1))
    const isAllowedSymbol = ['+', ' ', '-'].includes(e.key)

    if (!(isDigit || isNumpadDigit || isAllowedSymbol)) {
      e.preventDefault()
    }
  }, [])

  const isValid = useMemo(() => error === null, [error])
  const displayError = touched ? error : null

  return {
    value,
    error,
    isValid,
    displayError,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onBlur: handleBlur,
    setValue: (newValue: string) => {
      const formatted = formatPhoneNumber(newValue)
      setValue(formatted)
      validatePhone(formatted)
      setTouched(true)
    },
    reset: () => {
      setValue('')
      setError(null)
      setTouched(false)
    }
  }
}
