'use client'

import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react'

import { ConsultationForm, ContactForm } from '@/app/components/forms'
import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProductCard } from '@/components/ui/ProductCard'
import { ServiceCard } from './components/ServiceCard'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'

import { FEATURE_PRODUCTS, SERVICES } from './constants'

import {
  COMPANY_EMAIL,
  COMPANY_NAME,
  COMPANY_PHONE,
  COMPANY_PHONE_2,
  SHOP_ADDRESS
} from '@/shared/Address'

export default function HomePage() {
  return (
    <div className='min-h-screen bg-stone-100'>
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

      <section
        id='catalog'
        className='py-24 bg-stone-50'
      >
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <TypographyH2 className='mb-4'>Избранные модели</TypographyH2>
            <TypographyP className='text-2xl'>Наши самые популярные шубы</TypographyP>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {FEATURE_PRODUCTS.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                furType={product.furType}
                price={product.price}
                image={product.image}
                category={product.category}
                purchaseLink={product.purchaseLink}
              />
            ))}
          </div>
          <div className='text-center mt-12'>
            <LinkButton
              href='/catalog'
              text='Показать все товары'
              icon={<ArrowRight />}
              size='lg'
            />
          </div>
        </div>
      </section>

      <section
        id='about'
        className='py-16 bg-stone-800'
      >
        <div className='container mx-auto px-4'>
          <div className='max-w-4xl mx-auto text-center'>
            <TypographyH2 className='text-stone-100 mb-8'>О бренде {COMPANY_NAME}</TypographyH2>
            <TypographyP className='text-stone-300 mb-8 text-2xl'>
              Более 25 лет мы создаем шубы исключительного качества для самых взыскательных
              клиентов. Наш бренд — это синоним роскоши, элегантности и безупречного стиля.
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

      <section
        id='services'
        className='py-16 bg-stone-100'
      >
        <div className='container mx-auto px-4'>
          <div className='text-center mb-12'>
            <TypographyH2 className='mb-4'>Наши услуги</TypographyH2>
            <TypographyP>Полный спектр услуг для наших клиентов</TypographyP>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
            {SERVICES.map(service => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                buttonText={service.buttonText}
                variant={service.variant}
                size={service.size}
              />
            ))}
          </div>
        </div>
      </section>

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
                  <a href='tel:${COMPANY_PHONE}'>
                    <TypographyP className='text-stone-200 font-playfair text-lg'>
                      {COMPANY_PHONE}
                    </TypographyP>
                  </a>
                  <a href='tel:${COMPANY_PHONE_2}'>
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
                  <a href='mailto:{COMPANY_EMAIL}'>
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
                  <strong className='text-amber-400'>Доставка:</strong> Бесплатная доставка по
                  Москве при покупке от 300 000 ₽
                </TypographyP>
                <TypographyP className='text-stone-100'>
                  <strong className='text-amber-400'>Возврат:</strong> 14 дней на возврат товара в
                  первоначальном состоянии
                </TypographyP>
                <TypographyP className='text-stone-100'>
                  <strong className='text-amber-400'>Гарантия:</strong> 2 года гарантии на все
                  изделия
                </TypographyP>
                <TypographyP className='text-stone-100'>
                  <strong className='text-amber-400'>Уход:</strong> Бесплатная чистка и уход в
                  течение первого года
                </TypographyP>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
