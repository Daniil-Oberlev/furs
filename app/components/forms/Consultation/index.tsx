'use client'

import { useState, useCallback } from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { IConsultationForm, FormData } from './types'
import { ConsultationFormContent } from './ConsultationFormContent'

export const ConsultationForm = ({
  buttonText = 'Записаться',
  variant = 'default',
  size = 'default'
}: IConsultationForm) => {
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  })

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleSubmitSuccess = useCallback(() => {
    setFormData({ name: '', phone: '', service: '', date: '', time: '' })
    setTimeout(() => {
      setIsOpen(false)
    }, 2500)
  }, [])
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className='w-full font-cormorant text-lg'
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-white border-stone-300 text-stone-800 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-amber-700 text-xl'>Записаться на консультацию</DialogTitle>
          <DialogDescription className='sr-only'>
            Форма для записи на консультацию по услугам
          </DialogDescription>
        </DialogHeader>
        <ConsultationFormContent
          buttonText='Записаться'
          variant={variant}
          size='default'
          onClose={handleClose}
          formData={formData}
          onSubmitSuccess={handleSubmitSuccess}
          isOpen={isOpen}
        />
      </DialogContent>
    </Dialog>
  )
}
