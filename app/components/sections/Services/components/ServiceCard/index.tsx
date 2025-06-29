import { Card, CardContent } from '@/components/ui/card'
import { TypographyH3, TypographyP } from '@/components/ui/typography'

import { ConsultationForm } from '@/app/components/forms/Consultation'

import { IServiceCard } from './types'

export const ServiceCard = ({ variant = 'amber', size = 'default', ...props }: IServiceCard) => {
  return (
    <Card className='bg-white border-stone-200 shadow-sm h-full'>
      <CardContent className='p-6 flex flex-col h-full'>
        <TypographyH3 className='mb-4'>{props.title}</TypographyH3>
        <TypographyP className='mb-6 flex-grow text-2xl'>{props.description}</TypographyP>
        <div className='mt-auto'>
          <ConsultationForm
            buttonText={props.buttonText}
            variant={variant}
            size={size}
          />
        </div>
      </CardContent>
    </Card>
  )
}
