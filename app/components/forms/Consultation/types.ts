import { VariantProps } from 'class-variance-authority'

import { buttonVariants } from '@/components/ui/button'

export interface IConsultationForm extends VariantProps<typeof buttonVariants> {
  buttonText?: string
}
