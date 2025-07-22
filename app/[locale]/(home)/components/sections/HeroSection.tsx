import { ArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'

import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ROUTES } from '@/config/routes'

export const HeroSection = () => {
  const t = useTranslations()

  return (
    <PageHeader
      title={t('home.header.title')}
      description={t('home.header.description')}
      className='bg-gradient-to-b from-stone-200 to-stone-100 pt-16'
    >
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <ConsultationButton
          variant='amber'
          size='lg'
        >
          {t('Consultation.callToAction')}
        </ConsultationButton>
        <LinkButton
          href={ROUTES.CATALOG}
          text='Смотреть каталог'
          variant='amberOutline'
          icon={<ArrowRight />}
          iconPosition='right'
        />
      </div>
    </PageHeader>
  )
}
