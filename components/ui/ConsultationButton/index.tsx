'use client'

import type React from 'react'

import { useState, useCallback } from 'react'

import { Calendar } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ConsultationFormContent } from '@/app/components/forms/Consultation/ConsultationFormContent'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { FormData } from '@/app/components/forms/Consultation/types'

interface ConsultationButtonProps {
  variant?: 'default' | 'amber' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'compact'
  className?: string
  children?: React.ReactNode
}

export const ConsultationButton = ({
  variant = 'amber',
  size = 'lg',
  className = '',
  children = 'Записаться на приём'
}: ConsultationButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  const handleSubmitSuccess = useCallback(() => {
    setFormData({ name: '', phone: '', service: '', date: '', time: '' })
    setTimeout(() => {
      setIsOpen(false)
    }, 2500)
  }, [])

  return (
    <>
      <Button
        onClick={handleOpen}
        variant={variant}
        size={size}
        className={`font-cormorant text-xl w-auto max-w-xs sm:max-w-none ${className}`}
      >
        <Calendar className='mr-2 h-5 w-5' />
        {children}
      </Button>

      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DialogContent className='max-w-md'>
          <h2 className='text-xl font-semibold text-stone-800'>Записаться на примерку</h2>

          <ConsultationFormContent
            buttonText='Записаться на примерку'
            variant={variant}
            size={size}
            onClose={handleClose}
            formData={formData}
            onSubmitSuccess={handleSubmitSuccess}
            isOpen={isOpen}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
