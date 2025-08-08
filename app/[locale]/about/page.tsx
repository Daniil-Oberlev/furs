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
                <strong>{COMPANY_NAME}</strong> &mdash; это не просто о мехе. Это о красоте, которая
                вне времени. О роскоши, которая говорит тише, но глубже. О вещах, созданных с
                вниманием, уважением и замыслом.
              </TypographyP>
              <TypographyP>
                Бренд был основан четыре года назад и быстро занял своё место среди знаковых имен в
                нише высокой меховой моды. Сегодня изделия {COMPANY_NAME} представлены в ЦУМе
                &mdash; пространстве, где ценят стиль, а не сезонность.
              </TypographyP>
              <TypographyP>
                В центре каждой коллекции &mdash; <strong>соболь</strong>. Мех, ставший символом
                силы, достоинства и внутреннего света. Мы используем лучший соболь в мире &mdash;
                баргузинский. Его фактура, блеск и глубина уникальны.
              </TypographyP>
              <TypographyP>
                Мы также работаем с другими благородными материалами: норкой, каракулем, куницей,
                лисой. Дополняем их кашемиром, шёлком, гипюром, замшей. Каждое изделие создаётся
                вручную, с чувством формы и без компромиссов к деталям.
              </TypographyP>
              <TypographyP>
                <strong>{COMPANY_NAME} &mdash; это антипод быстрой моды.</strong>
                <br />
                Мы не следуем трендам. Мы создаём стиль, который останется с вами.
              </TypographyP>
              <TypographyP>
                Наш девиз &mdash; <strong>&laquo;Позвольте себе роскошь без правил&raquo;</strong>.
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
              Баргузинский соболь. <br /> Совмещение тепла, роскоши и минимализма в одной вещи.
            </TypographyP>
          </article>
        </div>
      </section>

      <section className='mb-20'>
        <TypographyH2 className='text-4xl font-playfair font-light text-stone-800 mb-6'>
          НЕ ПРОСТО ОДЕЖДА &mdash; ИСТОРИИ
        </TypographyH2>
        <TypographyP>
          Мы создаём не просто шубы. Мы создаём вещи, которые остаются. Для тех, кто выбирает тепло,
          эстетику и глубину.
        </TypographyP>
        <TypographyP>
          А ещё &mdash; мы умеем сохранять важное. Если у вас есть шуба с историей, мы можем
          перешить её, сохранить память и вдохнуть в неё новую жизнь. Это больше, чем работа с
          материалом &mdash; это продолжение смысла.
        </TypographyP>
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
