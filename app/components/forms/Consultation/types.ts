import type { FC, PropsWithChildren } from 'react'

import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/components/ui/button'

export interface IConsultationForm extends VariantProps<typeof buttonVariants> {
  buttonText?: string
}

export type TConsultationFormContent = PropsWithChildren<{
  onClose: () => void
}>

export type TConsultationForm = FC<TConsultationFormContent>
