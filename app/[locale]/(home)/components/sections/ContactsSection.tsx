import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_PHONE_2, SHOP_ADDRESS } from '@/shared/Address'

export const ContactsSection = () => {
  return (
    <section
      id='contacts'
      className='py-16 bg-stone-800'
    >
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          <TypographyH2 className='text-stone-100 mb-8'>Контакты</TypographyH2>

          <div className='space-y-6'>
            <div className='flex items-start space-x-4'>
              <MapPin className='h-5 w-5 text-amber-400 mt-1' />
              <div>
                <TypographyH3 className='font-medium text-stone-100 mb-1 font-cormorant'>
                  Адрес салона
                </TypographyH3>
                <TypographyP className='text-stone-200 font-inter text-lg'>
                  {SHOP_ADDRESS}
                </TypographyP>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Clock className='h-5 w-5 text-amber-400 mt-1' />
              <div>
                <TypographyH3 className='font-medium text-stone-100 mb-1 font-cormorant'>
                  Режим работы
                </TypographyH3>
                <TypographyP className='text-stone-200 font-inter text-lg'>
                  Пн-Вс: 10:00 - 21:00
                </TypographyP>
                <TypographyP className='text-stone-200 font-inter text-lg'>
                  Без выходных
                </TypographyP>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Phone className='h-5 w-5 text-amber-400 mt-1' />
              <div>
                <TypographyH3 className='font-medium text-stone-100 mb-1 font-cormorant'>
                  Телефоны
                </TypographyH3>
                <a href={`tel:${COMPANY_PHONE}`}>
                  <TypographyP className='text-stone-200 font-playfair text-lg'>
                    {COMPANY_PHONE}
                  </TypographyP>
                </a>
                <a href={`tel:${COMPANY_PHONE_2}`}>
                  <TypographyP className='text-stone-200 font-playfair text-lg'>
                    {COMPANY_PHONE_2}
                  </TypographyP>
                </a>
              </div>
            </div>

            <div className='flex items-start space-x-4'>
              <Mail className='h-5 w-5 text-amber-400 mt-1' />
              <div>
                <TypographyH3 className='font-medium text-stone-100 mb-1 font-cormorant'>
                  Email
                </TypographyH3>
                <a href={`mailto:${COMPANY_EMAIL}`}>
                  <TypographyP className='text-stone-200 font-inter text-lg'>
                    {COMPANY_EMAIL}
                  </TypographyP>
                </a>
              </div>
            </div>
          </div>

          <div className='mt-8 p-6 bg-stone-700/50 rounded-lg border border-amber-600/20'>
            <TypographyH3 className='text-stone-100 mb-4'>
              Информация о доставке и возврате
            </TypographyH3>
            <div className='space-y-2'>
              <TypographyP className='text-stone-100'>
                <strong className='text-amber-400'>Доставка:</strong> Бесплатная доставка по Москве
                при покупке от 300 000 ₽
              </TypographyP>
              <TypographyP className='text-stone-100'>
                <strong className='text-amber-400'>Возврат:</strong> 14 дней на возврат товара в
                первоначальном состоянии
              </TypographyP>
              <TypographyP className='text-stone-100'>
                <strong className='text-amber-400'>Гарантия:</strong> 2 года гарантии на все изделия
              </TypographyP>
              <TypographyP className='text-stone-100'>
                <strong className='text-amber-400'>Уход:</strong> Бесплатная чистка и уход в течение
                первого года
              </TypographyP>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
