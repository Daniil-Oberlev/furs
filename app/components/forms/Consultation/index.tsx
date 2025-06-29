'use client'

import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

import { usePhoneInput } from '@/hooks/usePhoneInput'

import { IConsultationForm } from './types'

export const ConsultationForm = ({
  buttonText = 'Записаться',
  variant = 'default',
  size = 'default'
}: IConsultationForm) => {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: ''
  })

  const phoneInput = usePhoneInput()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className='text-base'
        >
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className='bg-white border-stone-300 text-stone-800 max-w-md'>
        <DialogHeader>
          <DialogTitle className='text-amber-700 text-xl'>Записаться на консультацию</DialogTitle>
        </DialogHeader>

        {isSubmitted ? (
          <div className='text-center p-6'>
            <h3 className='text-lg font-semibold text-amber-700 mb-2'>Заявка принята!</h3>
            <p className='text-stone-600'>Мы свяжемся с вами для подтверждения записи</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className='space-y-4'
          >
            <div>
              <Label
                htmlFor='cons-name'
                className='text-stone-800 mb-2 block'
              >
                Имя *
              </Label>
              <Input
                id='cons-name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='bg-white border-stone-300 text-stone-800 focus:border-amber-600 placeholder:text-stone-400'
                placeholder='Ваше имя'
              />
            </div>

            <div>
              <Label
                htmlFor='cons-phone'
                className='text-stone-800 mb-2 block'
              >
                Телефон *
              </Label>
              <Input
                id='cons-phone'
                name='phone'
                type='tel'
                value={phoneInput.value}
                onChange={phoneInput.onChange}
                onKeyDown={phoneInput.onKeyDown}
                required
                className='bg-white border-stone-300 text-stone-800 focus:border-amber-600 placeholder:text-stone-400'
                placeholder='+7 (___) ___-__-__'
              />
            </div>

            <div>
              <Label className='text-stone-800 mb-2 block'>Услуга</Label>
              <Select onValueChange={value => handleSelectChange('service', value)}>
                <SelectTrigger className='bg-white border-stone-300 text-stone-800 placeholder:text-stone-400'>
                  <SelectValue placeholder='Выберите услугу' />
                </SelectTrigger>
                <SelectContent className='bg-white border-stone-300'>
                  <SelectItem value='fitting'>Примерка</SelectItem>
                  <SelectItem value='consultation'>Консультация стилиста</SelectItem>
                  <SelectItem value='custom'>Индивидуальный пошив</SelectItem>
                  <SelectItem value='care'>Уход за мехом</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className='grid grid-cols-2 gap-4'>
              <div>
                <Label
                  htmlFor='cons-date'
                  className='text-stone-800 mb-2 block'
                >
                  Дата
                </Label>
                <Input
                  id='cons-date'
                  name='date'
                  type='date'
                  value={formData.date}
                  onChange={handleChange}
                  className='bg-white border-stone-300 text-stone-800 focus:border-amber-600'
                />
              </div>
              <div>
                <Label className='text-stone-800 mb-2 block'>Время</Label>
                <Select onValueChange={value => handleSelectChange('time', value)}>
                  <SelectTrigger className='bg-white border-stone-300 text-stone-800 placeholder:text-stone-400'>
                    <SelectValue placeholder='Время' />
                  </SelectTrigger>
                  <SelectContent className='bg-white border-stone-300'>
                    <SelectItem value='10:00'>10:00</SelectItem>
                    <SelectItem value='12:00'>12:00</SelectItem>
                    <SelectItem value='14:00'>14:00</SelectItem>
                    <SelectItem value='16:00'>16:00</SelectItem>
                    <SelectItem value='18:00'>18:00</SelectItem>
                    <SelectItem value='20:00'>20:00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              type='submit'
              variant={variant}
              size='default'
              className='w-full'
            >
              Записаться
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
