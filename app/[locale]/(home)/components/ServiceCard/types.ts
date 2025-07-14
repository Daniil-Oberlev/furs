import { VariantProps } from 'class-variance-authority'
import { buttonVariants } from '@/components/ui/button'

export type ButtonVariant = VariantProps<typeof buttonVariants>['variant']
export type ButtonSize = VariantProps<typeof buttonVariants>['size']

export interface IServiceCard {
  title: string
  description: string
  buttonText: string
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}
