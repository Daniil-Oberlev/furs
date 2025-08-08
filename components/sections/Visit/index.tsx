import { ArrowRight } from 'lucide-react'
import { LinkButton } from '@/components/ui/LinkButton'
import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { ConsultationButton } from '@/components/ui/ConsultationButton'
import { ROUTES } from '@/config/routes'

export const VisitSection = ({ hideCatalogButton = false }: { hideCatalogButton?: boolean }) => {
  return (
    <section className='bg-stone-50 rounded-lg p-6 text-center mb-16'>
      <TypographyH2 className='text-4xl font-playfair font-light text-stone-800 mb-6'>
        Посетите наше пространство
      </TypographyH2>
      <TypographyP className='font-cormorant text-stone-600 mb-8 max-w-2xl mx-auto'>
        Ознакомиться с коллекцией можно только по предварительной записи. Мы работаем в закрытом
        формате, где каждая встреча &mdash; это персональное внимание и индивидуальный подход. Наши
        эксперты помогут подобрать меховое изделие, отражающее именно ваш стиль.
      </TypographyP>
      <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
        {!hideCatalogButton && (
          <LinkButton
            href={ROUTES.CATALOG}
            text='Смотреть каталог'
            variant='amberOutline'
            icon={<ArrowRight />}
            iconPosition='right'
          />
        )}
        <ConsultationButton
          variant='amber'
          size='lg'
        />
      </div>
    </section>
  )
}
