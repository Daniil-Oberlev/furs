'use client'

import type React from 'react'
import { useState } from 'react'

import DatePicker from 'react-datepicker'
import { useLocale } from 'next-intl'

import { Button } from '@/components/ui/button'
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

import 'react-datepicker/dist/react-datepicker.css'
import '@/lib/datepicker-locale'

interface ConsultationFormContentProps {
  buttonText?: string
  variant?: 'default' | 'amber' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'compact'
}

export const ConsultationFormContent = ({
  buttonText = 'Записаться на примерку',
  variant = 'amber',
  size = 'default'
}: ConsultationFormContentProps) => {
  const locale = useLocale()
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: null as Date | null,
    time: ''
  })

  const phoneInput = usePhoneInput()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
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

  const handleDateChange = (date: Date | null) => {
    setFormData({
      ...formData,
      date
    })
  }

  const minDate = new Date()
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)

  if (isSubmitted) {
    return (
      <div className='text-center p-6'>
        <h3 className='text-lg font-semibold text-amber-700 mb-2'>Заявка принята!</h3>
        <p className='text-stone-600'>Мы свяжемся с вами для подтверждения записи</p>
      </div>
    )
  }

  return (
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
          <DatePicker
            selected={formData.date}
            onChange={handleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            dateFormat={locale === 'ru' ? 'dd.MM.yyyy' : 'MM/dd/yyyy'}
            locale={locale === 'ru' ? 'ru' : 'en'}
            placeholderText={locale === 'ru' ? 'Выберите дату' : 'Select date'}
            className='w-full px-3 py-2 bg-white border border-stone-300 text-stone-800 focus:border-amber-600 placeholder:text-stone-400 rounded-md focus:outline-none focus:ring-1 focus:ring-amber-600'
            calendarClassName='border-stone-300 shadow-lg'
            dayClassName={date =>
              date && date.getTime() === formData.date?.getTime() ? 'bg-amber-600 text-white' : ''
            }
            calendarStartDay={locale === 'ru' ? 1 : 0}
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
        size={size}
        className='w-full font-cormorant text-xl'
      >
        {buttonText}
      </Button>
    </form>
  )
}
