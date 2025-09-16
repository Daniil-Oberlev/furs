'use client'

import React, { useEffect, useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLocale } from 'next-intl'
import { ChevronDownIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
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
import { Calendar } from '@/components/ui/calendar'
import { usePhoneInput } from '@/hooks/usePhoneInput'
import { FormData, IConsultationFormContent } from './types'
import { serviceLabels } from './utils'
import { useSendConsultation } from './hooks'

import { ru } from 'date-fns/locale'

export const ConsultationFormContent = ({
  buttonText = 'Записаться на примерку',
  variant = 'amber',
  size = 'default',
  onClose,
  formData = { name: '', phone: '', service: '', date: '', time: '' },
  onSubmitSuccess = () => {},
  isOpen
}: IConsultationFormContent) => {
  const locale = useLocale()
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    trigger,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: formData
  })
  const phoneInput = usePhoneInput()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [date, setDate] = useState<Date | undefined>(
    formData.date ? new Date(formData.date) : undefined
  )
  const [open, setOpen] = useState(false)

  const handleSuccess = useCallback(() => {
    setIsSubmitted(true)
    onSubmitSuccess()
    setTimeout(() => {
      setIsSubmitted(false)
      if (typeof onClose === 'function') {
        onClose()
      }
    }, 2000)
  }, [onSubmitSuccess, onClose])

  const handleError = useCallback((error: Error) => {
    alert(`Ошибка при отправке формы: ${error.message}`)
  }, [])

  const sendConsultationMutation = useSendConsultation({
    locale,
    onSuccess: handleSuccess,
    onError: handleError
  })

  useEffect(() => {
    if (isOpen) {
      reset(formData)
      setIsSubmitted(false)
      setDate(formData.date ? new Date(formData.date) : undefined)
    }
  }, [isOpen, formData, reset])

  const timeOptions = ['10:00', '12:00', '14:00', '16:00', '18:00', '20:00'] as const
  const serviceOptions = Object.entries(serviceLabels)
    .filter(([value]) => value !== '')
    .map(([value, label]) => ({ value, label }))

  const onSubmit = useCallback(
    async (data: FormData) => {
      sendConsultationMutation.mutate(data)
    },
    [sendConsultationMutation]
  )

  const handleServiceChange = useCallback(
    (value: string) => {
      setValue('service', value as FormData['service'], { shouldValidate: true })
    },
    [setValue]
  )

  const handleTimeChange = useCallback(
    (value: string) => {
      setValue('time', value as FormData['time'], { shouldValidate: true })
    },
    [setValue]
  )

  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      phoneInput.onChange(e)
      setValue('phone', e.target.value, { shouldValidate: true })
      trigger('phone')
    },
    [setValue, phoneInput, trigger]
  )

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
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4'
    >
      <div>
        <Label
          htmlFor='name'
          className='text-stone-800 mb-2 block'
        >
          Имя *
        </Label>
        <Input
          id='name'
          {...register('name', {
            required: 'Имя обязательно',
            minLength: { value: 2, message: 'Имя должно содержать минимум 2 символа' }
          })}
          className='bg-white border-stone-300 text-stone-800 focus:border-amber-600 placeholder:text-stone-400'
          placeholder='Ваше имя'
        />
        {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>}
      </div>

      <div>
        <Label
          htmlFor='phone'
          className='text-stone-800 mb-2 block'
        >
          Телефон *
        </Label>
        <Input
          id='phone'
          type='tel'
          {...register('phone', {
            required: 'Телефон обязателен',
            validate: () => {
              if (!phoneInput.isValid && phoneInput.displayError) {
                return phoneInput.displayError
              }
              return true
            }
          })}
          value={phoneInput.value}
          onChange={handlePhoneChange}
          onKeyDown={phoneInput.onKeyDown}
          onBlur={phoneInput.onBlur}
          className='bg-white border-stone-300 text-stone-800 focus:border-amber-600 placeholder:text-stone-400'
          placeholder='+7 (___) ___-__-__'
        />
        {phoneInput.displayError && (
          <p className='text-red-500 text-sm mt-1'>{phoneInput.displayError}</p>
        )}
      </div>

      <div>
        <Label className='text-stone-800 mb-2 block'>Услуга *</Label>
        <Select
          value={getValues('service')}
          onValueChange={handleServiceChange}
        >
          <SelectTrigger className='bg-white border-stone-300 text-stone-800 hover:bg-stone-50'>
            <SelectValue placeholder='Выберите услугу' />
          </SelectTrigger>
          <SelectContent className='bg-white border-stone-300'>
            {serviceOptions.map(({ value, label }) => (
              <SelectItem
                key={value}
                value={value}
                className='hover:bg-stone-100'
              >
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.service && <p className='text-red-500 text-sm mt-1'>{errors.service.message}</p>}
      </div>

      <div>
        <Label
          htmlFor='date'
          className='text-stone-800 mb-2 block'
        >
          Дата *
        </Label>
        <Popover
          open={open}
          onOpenChange={isOpen => {
            setOpen(isOpen)
          }}
          modal={false}
        >
          <PopoverTrigger asChild>
            <Button
              variant='outline'
              id='date'
              className='w-full justify-between font-normal bg-white border-stone-300 text-stone-800 hover:bg-stone-50 hover:border-stone-400 hover:text-stone-800'
            >
              {date ? date.toLocaleDateString('ru-RU') : 'Выберите дату'}
              <ChevronDownIcon className='h-4 w-4 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className='w-[300px] p-0 z-[9999] pointer-events-auto'
            align='start'
            inPortal={false}
          >
            <Calendar
              mode='single'
              selected={date}
              onSelect={selectedDate => {
                setDate(selectedDate)
                if (selectedDate) {
                  setValue('date', selectedDate.toISOString().split('T')[0], {
                    shouldValidate: true
                  })
                } else {
                  setValue('date', '', { shouldValidate: true })
                }
                setOpen(false)
              }}
              initialFocus
              captionLayout='dropdown'
              fromDate={new Date()}
              toDate={new Date(2025, 11, 31)}
              className='rounded-md border border-stone-300 w-full pointer-events-auto'
              locale={ru}
              disabled={date => date > new Date(2025, 11, 31)}
              classNames={{
                nav: 'hidden',
                nav_button: 'hidden',
                nav_button_previous: 'hidden',
                nav_button_next: 'hidden'
              }}
            />
          </PopoverContent>
        </Popover>
        <input
          type='hidden'
          {...register('date', { required: 'Дата обязательна' })}
        />
        {errors.date && <p className='text-red-500 text-sm mt-1'>{errors.date.message}</p>}
      </div>

      <div>
        <Label className='text-stone-800 mb-2 block'>Время *</Label>
        <Select
          value={getValues('time')}
          onValueChange={handleTimeChange}
        >
          <SelectTrigger className='bg-white border-stone-300 text-stone-800 hover:bg-stone-50'>
            <SelectValue placeholder='Выберите время' />
          </SelectTrigger>
          <SelectContent className='bg-white border-stone-300'>
            {timeOptions.map(time => (
              <SelectItem
                key={time}
                value={time}
                className='hover:bg-stone-100'
              >
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.time && <p className='text-red-500 text-sm mt-1'>{errors.time.message}</p>}
      </div>

      <Button
        type='submit'
        variant={variant}
        size={size}
        className='w-full font-cormorant text-xl'
        disabled={sendConsultationMutation.isPending}
      >
        {sendConsultationMutation.isPending ? 'Отправка...' : buttonText}
      </Button>
    </form>
  )
}
