'use client'

import Image from 'next/image'

import { ArrowLeft } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'

import { LinkButton } from '@/components/ui/LinkButton'
import { PageHeader } from '@/app/components/PageHeader'
import { TypographyH2, TypographyH3, TypographyP } from '@/components/ui/typography'
import { ConsultationForm } from '../components/forms'

import { ACHIEVEMENTS, TEAM_MEMBERS } from './mock'
import { COMPANY_NAME } from '@/shared/Address'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

import { BREADCRUMBS_ITEMS } from './constants'

export default function AboutPage() {
  return (
    <div className='min-h-screen bg-stone-100'>
      <div className='container mx-auto px-4 py-8'>
        <Breadcrumbs items={BREADCRUMBS_ITEMS} />

        <PageHeader
          title={`О бренде ${COMPANY_NAME}`}
          description='Более четверти века мы создаем шубы исключительного качества, воплощая в каждом изделии традиции
            мастерства
            и современные тенденции моды'
        />

        <section className='mb-20'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div>
              <TypographyH2 className='text-4xl font-playfair font-light text-stone-800 mb-6'>
                Наша история
              </TypographyH2>
              <div className='space-y-4 text-lg font-cormorant text-stone-600 leading-relaxed'>
                <TypographyP>
                  {COMPANY_NAME} был основан в 1999 году с простой, но амбициозной целью — создавать
                  самые красивые и качественные шубы в России. Начав с небольшой мастерской, мы
                  выросли в признанный бренд премиум-класса.
                </TypographyP>
                <TypographyP>
                  Наша философия основана на трех принципах: безупречное качество материалов,
                  мастерство исполнения и индивидуальный подход к каждому клиенту. Мы работаем
                  только с лучшими поставщиками меха и используем традиционные техники пошива.
                </TypographyP>
                <TypographyP>
                  Сегодня {COMPANY_NAME} — это символ роскоши и элегантности, выбор тех, кто ценит
                  качество и неповторимый стиль.
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

        <section className='mb-20'>
          <div className='text-center mb-12'>
            <TypographyH2 className='mb-4'>Наши достижения</TypographyH2>
            <TypographyP>Цифры, которые говорят сами за себя</TypographyP>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {ACHIEVEMENTS.map((achievement, index) => (
              <Card
                key={index}
                className='bg-white border-stone-200 text-center p-6 shadow-sm'
              >
                <CardContent className='p-0'>
                  <achievement.icon className='h-12 w-12 text-amber-700 mx-auto mb-4' />
                  <TypographyH3 className='text-2xl font-playfair font-medium text-stone-800 mb-2'>
                    {achievement.title}
                  </TypographyH3>
                  <TypographyP className='text-xl font-cormorant text-stone-600'>
                    {achievement.description}
                  </TypographyP>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='mb-20'>
          <div className='text-center mb-12'>
            <TypographyH2 className='mb-4'>Наша команда</TypographyH2>
            <TypographyP>Мастера своего дела</TypographyP>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {TEAM_MEMBERS.map((member, index) => (
              <Card
                key={index}
                className='bg-white border-stone-200 text-center shadow-sm'
              >
                <CardContent className='p-6'>
                  <div className='relative w-32 h-32 mx-auto mb-4'>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className='rounded-full object-cover'
                    />
                  </div>
                  <TypographyH3 className='text-2xl font-playfair font-medium text-stone-800 mb-1'>
                    {member.name}
                  </TypographyH3>
                  <TypographyP className='text-xl font-cormorant text-amber-700 mb-2'>
                    {member.position}
                  </TypographyP>
                  <TypographyP className='text-base font-inter text-stone-600'>
                    {member.experience}
                  </TypographyP>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
              Приглашаем вас познакомиться с нашей коллекцией лично. Наши консультанты помогут
              подобрать идеальную шубу именно для вас.
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
    </div>
  )
}
