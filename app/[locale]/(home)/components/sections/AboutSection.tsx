import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { COMPANY_NAME } from '@/shared/Address'

export const AboutSection = () => {
  return (
    <section
      id='about'
      className='py-16 bg-stone-800'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-4xl mx-auto text-center'>
          <TypographyH2 className='text-stone-100 mb-8'>О бренде {COMPANY_NAME}</TypographyH2>
          <TypographyP className='text-stone-300 mb-8 text-2xl'>
            Более 25 лет мы создаем шубы исключительного качества для самых взыскательных клиентов.
            Наш бренд — это синоним роскоши, элегантности и безупречного стиля.
          </TypographyP>
          <div className='grid md:grid-cols-3 gap-8 mt-12'>
            <div className='text-center'>
              <div className='text-4xl font-playfair font-light text-amber-400 mb-2'>25+</div>
              <div className='text-stone-300 font-cormorant'>лет опыта</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-playfair font-light text-amber-400 mb-2'>5000+</div>
              <div className='text-stone-300 font-cormorant'>довольных клиентов</div>
            </div>
            <div className='text-center'>
              <div className='text-4xl font-playfair font-light text-amber-400 mb-2'>100%</div>
              <div className='text-stone-300 font-cormorant'>натуральный мех</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
