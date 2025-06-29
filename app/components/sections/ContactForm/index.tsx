import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { ContactForm } from '../../forms'

export const ContactFormSection = () => {
  return (
    <section className='py-16 bg-stone-50'>
      <div className='container mx-auto px-4'>
        <div className='max-w-2xl mx-auto'>
          <div className='text-center mb-8'>
            <TypographyH2 className='mb-4'>Свяжитесь с нами</TypographyH2>
            <TypographyP>Остались вопросы? Мы с радостью на них ответим</TypographyP>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
