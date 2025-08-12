import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

export const ValuesSection = () => {
  return (
    <section
      className='container bg-stone-800 rounded-lg p-12 mt-6 mb-6 text-center'
      id='about'
    >
      <TypographyH2 className='text-4xl font-playfair font-light text-stone-100 mb-8'>
        Наши ценности
      </TypographyH2>
      <ul className='grid md:grid-cols-3 gap-8 justify-center'>
        <li>
          <TypographyH3 className='text-[#cfaf80] mb-4'>Качество</TypographyH3>
          <TypographyP className='text-stone-300'>
            Мы используем только лучшие материалы и проверенные временем техники
          </TypographyP>
        </li>
        <li>
          <TypographyH3 className='text-[#cfaf80] mb-4'>Мастерство</TypographyH3>
          <TypographyP className='text-stone-300'>
            Каждое изделие создается руками опытных мастеров с многолетним стажем
          </TypographyP>
        </li>
        <li>
          <TypographyH3 className='text-[#cfaf80] mb-4'>Индивидуальность</TypographyH3>
          <TypographyP className='text-stone-300'>
            Персональный подход к каждому клиенту и его уникальным потребностям
          </TypographyP>
        </li>
      </ul>
    </section>
  )
}
