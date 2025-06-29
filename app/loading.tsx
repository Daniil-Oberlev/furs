'use client'

import { useEffect, useState } from 'react'
import { Crown } from 'lucide-react'

import { COMPANY_NAME } from '@/shared/Address'

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [loadingDuration, setLoadingDuration] = useState(2500)

  useEffect(() => {
    const startTime = performance.now()

    const checkLoadingSpeed = () => {
      const currentTime = performance.now()
      const elapsedTime = currentTime - startTime

      if (elapsedTime < 100) {
        setLoadingDuration(800)
      } else if (elapsedTime < 500) {
        setLoadingDuration(1500)
      } else {
        setLoadingDuration(2500)
      }
    }

    setTimeout(checkLoadingSpeed, 50)

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, loadingDuration)

    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          return 100
        }

        const increment = loadingDuration < 1000 ? 8 : loadingDuration < 2000 ? 4 : 2
        return prev + increment
      })
    }, 50)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [loadingDuration])

  if (!isLoading) return null

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-stone-100 via-stone-50 to-amber-50'>
      <div className='text-center'>
        <div className='mb-8 relative'>
          <div className='animate-pulse'>
            <Crown className='h-16 w-16 text-amber-700 mx-auto mb-4 animate-bounce' />
          </div>
          <h1 className='text-4xl font-playfair font-bold text-stone-800 tracking-wider'>
            {COMPANY_NAME}
          </h1>
          <p className='text-base font-cormorant text-stone-600 mt-2 tracking-widest uppercase'>
            Эксклюзивные шубы
          </p>
        </div>

        <div className='w-64 mx-auto mb-6'>
          <div className='h-1 bg-stone-200 rounded-full overflow-hidden'>
            <div
              className='h-full bg-gradient-to-r from-amber-600 to-amber-700 rounded-full transition-all duration-300 ease-out'
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className='text-sm font-cormorant text-stone-500 mt-2'>{progress}%</p>
        </div>

        <div className='flex justify-center space-x-1'>
          <div
            className='w-2 h-2 bg-amber-600 rounded-full animate-bounce'
            style={{ animationDelay: '0ms' }}
          />
          <div
            className='w-2 h-2 bg-amber-600 rounded-full animate-bounce'
            style={{ animationDelay: '150ms' }}
          />
          <div
            className='w-2 h-2 bg-amber-600 rounded-full animate-bounce'
            style={{ animationDelay: '300ms' }}
          />
        </div>

        <div className='absolute inset-4 border border-amber-200/30 rounded-lg pointer-events-none' />
        <div className='absolute inset-8 border border-amber-300/20 rounded-lg pointer-events-none' />
      </div>
    </div>
  )
}
