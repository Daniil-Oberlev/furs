'use client'

import { useState } from 'react'
import { Calendar, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ConsultationForm } from '@/app/components/forms/Consultation'
import { Dialog, DialogContent } from '@/components/ui/dialog'

export const FloatingConsultationButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  return (
    <>
      <Button
        onClick={handleOpen}
        className='fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-amber-700 hover:bg-amber-800 text-stone-100 shadow-lg'
        aria-label='Записаться на приём'
      >
        <Calendar className='h-6 w-6' />
      </Button>

      <Dialog
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <DialogContent className='max-w-md'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-xl font-semibold text-stone-800'>Записаться на приём</h2>
            <Button
              variant='ghost'
              size='sm'
              onClick={handleClose}
              className='h-8 w-8 p-0'
            >
              <X className='h-4 w-4' />
            </Button>
          </div>

          <ConsultationForm buttonText='Записаться' />
        </DialogContent>
      </Dialog>
    </>
  )
}
