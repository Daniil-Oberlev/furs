'use client'

import type React from 'react'

import { useState } from 'react'

import { Calendar } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { ConsultationFormContent } from '@/app/components/forms/Consultation/ConsultationFormContent'
import { Dialog, DialogContent } from '@/components/ui/dialog'

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

  const handleOpen = () => setIsOpen(true)

  return (
    <>
      <Button
        onClick={handleOpen}
        variant={variant}
        size={size}
        className={`font-cormorant text-xl ${className}`}
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
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
