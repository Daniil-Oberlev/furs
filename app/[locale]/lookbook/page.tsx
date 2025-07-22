'use client'

import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ROUTES } from '@/config/routes'
import { LinkButton } from '@/components/ui/LinkButton'
import { ArrowRight } from 'lucide-react'

import { useTranslations } from 'next-intl'

export default function LookbookPage() {
  const t = useTranslations()

  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <PageHeader
          title='LOOKBOOK'
          description='Вдохновляющие образы с нашими меховыми изделиями'
        />

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
      </div>
    </>
  )
}
