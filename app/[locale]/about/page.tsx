'use client'

import Image from 'next/image'

import { ArrowLeft } from 'lucide-react'

// import { Card, CardContent } from '@/components/ui/card'

import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { ConsultationForm } from '../../components/forms'

// import { ACHIEVEMENTS } from './mock'
import { COMPANY_NAME } from '@/shared/Address'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

import { BREADCRUMBS_ITEMS } from './constants'

export default function AboutPage() {
  return (
    <>
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumbs items={BREADCRUMBS_ITEMS} />

        <PageHeader title={`О бренде ${COMPANY_NAME}`} />

        <section className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <TypographyH2 className='text-4xl font-playfair font-light text-stone-800 mb-6'>
                История бренда {COMPANY_NAME}
              </TypographyH2>
              <div className='space-y-4 text-lg font-cormorant text-stone-600 leading-relaxed'>
                <TypographyP>
                  {COMPANY_NAME} — это не просто о мехе. Это о прикосновении к вечному, о любви к
                  красоте в её самой утончённой форме. О том, как роскошь может быть тихой,
                  уверенной, осознанной. Бренд основан всего четыре года назад, но уже стал
                  узнаваемым среди ценителей настоящей элегантности. Наши изделия представлены в
                  ЦУМе — одном из главных модных пространств Москвы, что стало естественным
                  продолжением пути, который мы выбрали.
                </TypographyP>
                <TypographyP>
                  В центре каждой нашей коллекции — соболь. Не просто материал, а настоящий символ
                  стиля и силы, благородства и глубины. Этот мех, веками вдохновлявший императоров и
                  аристократов, сегодня остаётся сердцем нашего ДНК. Мы работаем с лучшим соболем в
                  мире — из Баргузинского заповедника. Его блеск, плотность и фактура — эталон,
                  перед которым невозможно устоять. Но границы нашей эстетики шире. Мы создаём
                  изделия и из других благородных мехов: норки, лисы, каракуля, куницы, а также
                  используем отборные материалы — кашемир, шёлк, гипюр, замшу. Всё, что наделено
                  изяществом, фактурой и характером. Мы соединяем ремесленные традиции с современным
                  взглядом, чтобы создавать не просто одежду — вневременные ценности.
                </TypographyP>
                <TypographyP>
                  {COMPANY_NAME} — это антипод быстрой моды. Мы не гонимся за трендами, мы создаём
                  стиль. Тот, который не подвержен шуму и суете, тот, что звучит тише — но глубже.
                  Наш девиз — «Позвольте себе роскошь без правил» Для нас важна не только форма, но
                  и суть. Мы создаём изделия как арт-объекты, с вниманием к каждой строчке, каждой
                  линии. Это не просто вещи — это инвестиции. В тепло. В стиль. В себя.
                </TypographyP>
                <TypographyP>
                  Особая гордость бренда — это возможность не только прикоснуться к коллекциям, но и
                  вернуть к жизни давно любимую вещь. Мы бережно трансформируем устаревшие шубы,
                  даём им новое дыхание, новый силуэт, новое лицо. Это больше, чем перешив — это
                  сохранённая память, продолженная история.
                </TypographyP>
              </div>
            </div>
            <div className='relative'>
              <Image
                src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop'
                alt='Наша мастерская'
                width={600}
                height={400}
                className='rounded-lg shadow-lg'
              />
            </div>
          </div>
        </section>

        {/*TODO: временно скрыто*/}
        {/*<section className='mb-20'>*/}
        {/*  <div className='text-center mb-12'>*/}

        {/*    <TypographyH2 className='mb-4'>Наши достижения</TypographyH2>*/}
        {/*    <TypographyP>Цифры, которые говорят сами за себя</TypographyP>*/}
        {/*  </div>*/}

        {/*  <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>*/}
        {/*    {ACHIEVEMENTS.map((achievement, index) => (*/}
        {/*      <Card*/}
        {/*        key={index}*/}
        {/*        className='bg-white border-stone-200 text-center p-6 shadow-sm'*/}
        {/*      >*/}
        {/*        <CardContent className='p-0'>*/}
        {/*          <achievement.icon className='h-12 w-12 text-amber-700 mx-auto mb-4' />*/}
        {/*          <TypographyH3 className='text-2xl font-playfair font-medium text-stone-800 mb-2'>*/}
        {/*            {achievement.title}*/}
        {/*          </TypographyH3>*/}
        {/*          <TypographyP className='text-xl font-cormorant text-stone-600'>*/}
        {/*            {achievement.description}*/}
        {/*          </TypographyP>*/}
        {/*        </CardContent>*/}
        {/*      </Card>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        <section className='mb-20'>
          <div className='bg-stone-800 rounded-lg p-12 text-center'>
            <TypographyH2 className='text-4xl font-playfair font-light text-stone-100 mb-8'>
              Наши ценности
            </TypographyH2>
            <div className='grid md:grid-cols-3 gap-8'>
              <div>
                <TypographyH3 className='text-amber-400 mb-4'>Качество</TypographyH3>
                <TypographyP className='text-stone-300'>
                  Мы используем только лучшие материалы и проверенные временем техники
                </TypographyP>
              </div>
              <div>
                <TypographyH3 className='   text-amber-400 mb-4'>Мастерство</TypographyH3>
                <TypographyP className=' text-stone-300'>
                  Каждое изделие создается руками опытных мастеров с многолетним стажем
                </TypographyP>
              </div>
              <div>
                <TypographyH3 className='   text-amber-400 mb-4'>Индивидуальность</TypographyH3>
                <TypographyP className='  text-stone-300'>
                  Персональный подход к каждому клиенту и его уникальным потребностям
                </TypographyP>
              </div>
            </div>
          </div>
        </section>

        <section className='text-center mb-16'>
          <div className='bg-stone-50 rounded-lg p-12'>
            <TypographyH2 className='text-4xl font-playfair font-light text-stone-800 mb-6'>
              Посетите наш салон
            </TypographyH2>
            <TypographyP className='font-cormorant text-stone-600 mb-8 max-w-2xl mx-auto'>
              Ознакомиться с коллекцией можно только по предварительной записи. Мы работаем в
              закрытом формате, где каждая встреча — это персональное внимание и индивидуальный
              подход. Наши эксперты помогут подобрать меховое изделие, отражающее именно ваш стиль.
            </TypographyP>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <LinkButton
                href='/catalog'
                text='Посмотреть каталог'
                variant='amberOutline'
                size='lg'
                className='bg-white'
              />
              <ConsultationForm buttonText='Записаться на консультацию' />
            </div>
          </div>
        </section>
        <div className='text-center'>
          <LinkButton
            href='/'
            text='Вернуться на главную'
            variant='amberOutline'
            icon={<ArrowLeft />}
            iconPosition='left'
            className='bg-white'
          />
        </div>
      </div>
    </>
  )
}
