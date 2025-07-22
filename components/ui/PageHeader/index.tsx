import { cn } from '@/lib/utils'

import { TypographyP, TypographyH1 } from '@/components/ui/typography'

import { PageHeaderProps } from './types'

export const PageHeader = ({ title, description, children, className }: PageHeaderProps) => {
  return (
    <section className={cn('text-center pb-16', className)}>
      <TypographyH1 className='mb-6'>{title}</TypographyH1>
      {description && <TypographyP className='mb-8 max-w-3xl mx-auto'>{description}</TypographyP>}
      {children}
    </section>
  )
}
