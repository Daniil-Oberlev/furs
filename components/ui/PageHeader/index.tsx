import { cn } from '@/lib/utils'

import { TypographyP, TypographyH1 } from '@/components/ui/typography'

import { PageHeaderProps } from './types'

export const PageHeader = (props: PageHeaderProps) => {
  return (
    <section className={cn('text-center pb-16', props.className)}>
      <TypographyH1 className='mb-6 text-[#cfaf80]'>{props.title}</TypographyH1>
      {props.description && (
        <TypographyP
          className={cn('mb-8 max-w-3xl mx-auto text-white', props.descriptionClassName)}
        >
          {props.description}
        </TypographyP>
      )}
      {props.children}
    </section>
  )
}
