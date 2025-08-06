'use client'

import Image from 'next/image'

import { ArrowLeft } from 'lucide-react'

// import { Card, CardContent } from '@/components/ui/card'

import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/components/ui/PageHeader'
import { TypographyH2, TypographyP } from '@/components/ui/typography'

// import { ACHIEVEMENTS } from './mock'
import { COMPANY_NAME } from '@/shared/Address'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

import { BREADCRUMBS_ITEMS } from './constants'
import { ValuesSection, VisitSection } from '@/components/sections'

export default function AboutPage() {
  return (
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
                {COMPANY_NAME} &mdash; это не просто о мехе. Это о прикосновении к вечному, о любви
                к красоте в её самой утончённой форме. О том, как роскошь может быть тихой,
                уверенной, осознанной. Бренд основан всего четыре года назад, но уже стал узнаваемым
                среди ценителей настоящей элегантности. Наши изделия представлены в ЦУМе &mdash;
                одном из главных модных пространств Москвы, что стало естественным продолжением
                пути, который мы выбрали.
              </TypographyP>
              <TypographyP>
                В центре каждой нашей коллекции &mdash; соболь. Не просто материал, а настоящий
                символ стиля и силы, благородства и глубины. Этот мех, веками вдохновлявший
                императоров и аристократов, сегодня остаётся сердцем нашего ДНК. Мы работаем с
                лучшим соболем в мире &mdash; из Баргузинского заповедника. Его блеск, плотность и
                фактура &mdash; эталон, перед которым невозможно устоять. Но границы нашей эстетики
                шире. Мы создаём изделия и из других благородных мехов: норки, лисы, каракуля,
                куницы, а также используем отборные материалы &mdash; кашемир, шёлк, гипюр, замшу.
                Всё, что наделено изяществом, фактурой и характером. Мы соединяем ремесленные
                традиции с современным взглядом, чтобы создавать не просто одежду &mdash;
                вневременные ценности.
              </TypographyP>
              <TypographyP>
                {COMPANY_NAME} &mdash; это антипод быстрой моды. Мы не гонимся за трендами, мы
                создаём стиль. Тот, который не подвержен шуму и суете, тот, что звучит тише &mdash;
                но глубже. Наш девиз &mdash; &laquo;Позвольте себе роскошь без правил&raquo; Для нас
                важна не только форма, но и суть. Мы создаём изделия как арт-объекты, с вниманием к
                каждой строчке, каждой линии. Это не просто вещи &mdash; это инвестиции. В тепло. В
                стиль. В себя.
              </TypographyP>
              <TypographyP>
                Особая гордость бренда &mdash; это возможность не только прикоснуться к коллекциям,
                но и вернуть к жизни давно любимую вещь. Мы бережно трансформируем устаревшие шубы,
                даём им новое дыхание, новый силуэт, новое лицо. Это больше, чем перешив &mdash; это
                сохранённая память, продолженная история.
              </TypographyP>
            </div>
          </div>
          <article className='flex flex-col items-center text-center'>
            <Image
              src='/model.jpg'
              alt='Пальто с отделкой из баргузинского соболя'
              width={600}
              height={900}
              className='rounded-lg shadow-lg'
            />
            <TypographyP className='mt-4 text-lg text-stone-700 font-cormorant'>
              Парка из итальянского кашемира с мехом баргузинского соболя. Совмещение тепла, роскоши
              и минимализма в одной вещи.
            </TypographyP>
          </article>
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

      <ValuesSection />

      <VisitSection />

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
  )
}
