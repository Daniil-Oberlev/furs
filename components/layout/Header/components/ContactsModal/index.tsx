'use client'

import type React from 'react'

import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { TypographyP } from '@/components/ui/typography'
import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { MapPin, Phone, Mail } from 'lucide-react'

interface IContactsModal {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  children: React.ReactNode
}

export const ContactsModal = ({ isOpen, setIsOpen, children }: IContactsModal) => {
  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='bg-white border-stone-300 text-stone-800 max-w-4xl max-h-[90vh] overflow-y-auto'>
        <DialogHeader>
          <DialogTitle className='text-[#cfaf80] text-xl sm:text-2xl font-playfair text-center mb-4 sm:mb-6'>
            Наши локации
          </DialogTitle>
        </DialogHeader>

        <div className='space-y-4 sm:space-y-6'>
          <Card className='bg-stone-50 border-stone-200 shadow-sm'>
            <CardContent className='p-4 sm:p-6'>
              <div className='flex items-start space-x-3 mb-3 sm:mb-4'>
                <MapPin className='h-5 w-5 sm:h-6 sm:w-6 text-[#cfaf80] mt-1 flex-shrink-0' />
                <div>
                  <h3 className='text-lg sm:text-xl font-playfair font-medium text-stone-800 mb-2'>
                    ТЦ ЦУМ
                  </h3>
                  <div className='space-y-1 sm:space-y-2'>
                    <TypographyP className='text-base sm:text-lg'>ул. Петровка, д. 2</TypographyP>
                    <TypographyP className='text-base sm:text-lg font-medium text-[#cfaf80]'>
                      3 этаж, пространство верхней одежды
                    </TypographyP>
                    <TypographyP className='text-sm sm:text-base text-stone-600'>
                      Режим работы: Пн-Вс 10:00-22:00
                    </TypographyP>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='bg-[#cfaf80]/10 border-[#cfaf80]/20 shadow-sm'>
            <CardContent className='p-4 sm:p-6'>
              <div className='flex items-start space-x-3 mb-3 sm:mb-4'>
                <MapPin className='h-5 w-5 sm:h-6 sm:w-6 text-[#cfaf80] mt-1 flex-shrink-0' />
                <div>
                  <h3 className='text-lg sm:text-xl font-playfair font-medium text-stone-800 mb-2'>
                    Персональный шоу-рум
                  </h3>
                  <div className='space-y-1 sm:space-y-2'>
                    <TypographyP className='text-base sm:text-lg'>Новинский бульвар</TypographyP>
                    <TypographyP className='text-base sm:text-lg font-medium text-[#cfaf80]'>
                      Только по предварительной записи
                    </TypographyP>
                    <TypographyP className='text-sm sm:text-base text-stone-600'>
                      Индивидуальная консультация и примерка
                    </TypographyP>
                  </div>
                </div>
              </div>
              <div className='bg-white p-3 sm:p-4 rounded-lg border border-[#cfaf80]/20'>
                <TypographyP className='text-sm sm:text-base text-stone-700 mb-3 sm:mb-4'>
                  Персональный подход, индивидуальный пошив, эксклюзивные модели
                </TypographyP>
                <ConsultationButton
                  variant='amber'
                  size='lg'
                  className='w-full text-sm sm:text-base px-2 sm:px-4 py-2 sm:py-3'
                >
                  <span className='hidden sm:inline'>Записаться на посещение шоу-рума</span>
                  <span className='sm:hidden'>Записаться в шоу-рум</span>
                </ConsultationButton>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className='mt-4 sm:mt-6 text-center bg-stone-100 p-3 sm:p-4 rounded-lg'>
          <TypographyP className='text-stone-600 mb-2 text-sm sm:text-base'>
            Контакты для связи:
          </TypographyP>
          <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6'>
            <div className='flex items-center space-x-2'>
              <Phone className='h-4 w-4 text-[#cfaf80]' />
              <span className='font-playfair text-base sm:text-lg text-stone-800'>
                +7 (495) 123-45-67
              </span>
            </div>
            <div className='flex items-center space-x-2'>
              <Mail className='h-4 w-4 text-[#cfaf80]' />
              <span className='text-stone-800 text-sm sm:text-base'>info@sablefur.ru</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
