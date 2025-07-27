'use client'

import { VisitSection } from '@/components/sections'
import { PageHeader } from '@/components/ui/PageHeader'

export default function LookbookPage() {
  return (
    <div className='container mx-auto px-4 pt-8'>
      <PageHeader
        title='LOOKBOOK'
        description='Вдохновляющие образы с нашими меховыми изделиями'
        descriptionClassName='text-stone-800'
      />

      <VisitSection />
    </div>
  )
}
