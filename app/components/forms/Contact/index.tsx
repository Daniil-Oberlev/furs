'use client'

import type React from 'react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { usePhoneInput } from '@/hooks/usePhoneInput'
import { formatContactEmailMessage, sendContactToEmail } from './utils'
import { ContactFormData } from './types'

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const phoneInput = usePhoneInput()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    if (!email) return true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    const phoneRegex = /^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
    return phoneRegex.test(phone)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: formData.name.trim() ? '' : 'Пожалуйста, укажите ваше имя',
      phone: phoneInput.value.trim()
        ? validatePhone(phoneInput.value)
          ? ''
          : 'Введите корректный номер телефона'
        : 'Пожалуйста, укажите номер телефона',
      email: validateEmail(formData.email) ? '' : 'Введите корректный email',
      message: formData.message.trim() ? '' : 'Пожалуйста, напишите сообщение'
    }

    setErrors(newErrors)

    if (!newErrors.name && !newErrors.phone && !newErrors.email && !newErrors.message) {
      setIsSubmitting(true)

      try {
        const formDataWithPhone = {
          ...formData,
          phone: phoneInput.value
        }

        const text = formatContactEmailMessage(formDataWithPhone)
        const result = await sendContactToEmail(text)

        if (result.success) {
          setIsSubmitted(true)
          setFormData({
            name: '',
            phone: '',
            email: '',
            message: ''
          })
          phoneInput.reset?.()
          setTimeout(() => setIsSubmitted(false), 3000)
        } else {
          throw new Error(result.error || 'Ошибка отправки')
        }
      } catch (error) {
        console.error('Error sending contact form:', error)
        // Можно добавить обработку ошибок здесь
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setErrors({
      ...errors,
      [e.target.name]: ''
    })
  }

  if (isSubmitted) {
    return (
      <div className='text-center p-8 bg-white rounded-lg border border-stone-200 shadow-sm'>
        <h3 className='text-lg font-medium text-amber-700 mb-2'>Спасибо за обращение!</h3>
        <p className='text-stone-600'>Мы свяжемся с вами в ближайшее время</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='space-y-6'
      noValidate
    >
      <div className='grid md:grid-cols-2 gap-4'>
        <div>
          <Label
            htmlFor='name'
            className='text-stone-800 mb-2 block'
          >
            Имя *
          </Label>
          <Input
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className={`bg-white border-stone-300 text-stone-800 focus:border-amber-600 ${
              errors.name ? 'border-red-500' : ''
            }`}
            placeholder='Ваше имя'
          />
          {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
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
            name='phone'
            type='tel'
            value={phoneInput.value}
            onChange={e => {
              phoneInput.onChange(e)
              setErrors({ ...errors, phone: '' })
            }}
            onKeyDown={phoneInput.onKeyDown}
            className={`bg-white border-stone-300 text-stone-800 focus:border-amber-600 ${
              errors.phone ? 'border-red-500' : ''
            }`}
            placeholder='+7 (___) ___-__-__'
          />
          {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
        </div>
      </div>

      <div>
        <Label
          htmlFor='email'
          className='text-stone-800 mb-2 block'
        >
          Email
        </Label>
        <Input
          id='email'
          name='email'
          type='email'
          value={formData.email}
          onChange={handleChange}
          className={`bg-white border-stone-300 text-stone-800 focus:border-amber-600 ${
            errors.email ? 'border-red-500' : ''
          }`}
          placeholder='your@email.com'
        />
        {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
      </div>

      <div>
        <Label
          htmlFor='message'
          className='text-stone-800 mb-2 block'
        >
          Сообщение *
        </Label>
        <Textarea
          id='message'
          name='message'
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`bg-white border-stone-300 text-stone-800 focus:border-amber-600 ${
            errors.message ? 'border-red-500' : ''
          }`}
          placeholder='Расскажите, чем мы можем помочь...'
        />
        {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
      </div>

      <Button
        type='submit'
        variant='amber'
        className='w-full px-6 py-3 text-base'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
      </Button>
    </form>
  )
}
