import type { FC, PropsWithChildren } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'

export interface FormData {
  name: string
  phone: string
  service: 'fitting' | 'consultation' | 'custom' | 'care' | ''
  date: string
  time: '10:00' | '12:00' | '14:00' | '16:00' | '18:00' | '20:00' | ''
}

export interface IConsultationForm {
  buttonText?: string
  variant?: 'default' | 'amber' | 'outline'
  size?: 'default' | 'sm' | 'lg'
}

export interface IConsultationFormContent extends VariantProps<typeof buttonVariants> {
  buttonText?: string
  onClose: () => void
  formData?: FormData
  onSubmitSuccess?: () => void
  isOpen: boolean
}

export type TConsultationForm = FC<PropsWithChildren<IConsultationFormContent>>
