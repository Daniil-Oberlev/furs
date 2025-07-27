'use client'

import type React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { TypographyP } from '@/components/ui/typography'
import { SHOP_ADDRESS } from '@/shared/Address'
import { ConsultationButton } from '@/components/ui/ConsultationButton'

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
          <DialogTitle className='text-xl font-semibold text-stone-800'>Контакты</DialogTitle>
        </DialogHeader>

        <Card className='bg-stone-50 border-stone-200 shadow-sm'>
          <CardContent className='p-8'>
            <div className='space-y-6 text-center'>
              <TypographyP className='text-xl leading-relaxed'>{SHOP_ADDRESS}</TypographyP>

              <TypographyP className='text-xl leading-relaxed'>
                Для того, чтобы посетить наш Шоу рум на Новинском бульваре, необходимо записаться
              </TypographyP>

              <ConsultationButton
                variant='amber'
                size='lg'
              >
                Записаться на посещение шоу-рума
              </ConsultationButton>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  )
}
