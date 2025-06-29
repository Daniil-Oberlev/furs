import { ConsultationForm } from '../../forms'

import { LinkButton } from '@/components/ui/LinkButton'

import { PageHeader } from '@/app/components/PageHeader'

export const HeroSection = () => {
  return (
    <PageHeader
      title='Эксклюзивные шубы'
      description='Роскошные меховые изделия из натурального меха высочайшего качества. Индивидуальный подход к каждому клиенту.'
      className='bg-gradient-to-b from-stone-200 to-stone-100'
    >
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <ConsultationForm buttonText='Записаться на примерку' />
        <LinkButton
          href='/catalog'
          text='Посмотреть каталог'
          variant='amberOutline'
          size='lg'
        />
      </div>
    </PageHeader>
  )
}
