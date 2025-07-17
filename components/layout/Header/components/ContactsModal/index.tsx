'use client'

import type React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ConsultationForm } from '@/app/components/forms'
import { TypographyP } from '@/components/ui/typography'

interface IContactsModal {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export const ContactsModal = ({ isOpen, setIsOpen }: IContactsModal) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogContent className='bg-white border-stone-300 text-stone-800 max-w-2xl'>
        <DialogHeader>
          <DialogTitle className='text-amber-700 text-2xl font-playfair text-center'>
            Контакты
          </DialogTitle>
        </DialogHeader>

        <Card className='bg-stone-50 border-stone-200 shadow-sm'>
          <CardContent className='p-8'>
            <div className='space-y-6 text-center'>
              <TypographyP className='text-xl leading-relaxed'>
                Наша коллекция представлена в ТЦ ЦУМ, ул.Петровка, д.2, 3 этаж
              </TypographyP>

              <TypographyP className='text-xl leading-relaxed'>
                Для того, чтобы посетить наш Шоу рум на Новинском бульваре, необходимо записаться
              </TypographyP>

              <div className='pt-4'>
                <ConsultationForm buttonText='Записаться на посещение шоу-рума' />
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
