import { TypographyH2, TypographyP } from '@/components/ui/typography'
import { ProductCard } from '@/components/ui/ProductCard'

interface SimilarProduct {
  id: number
  name: string
  furType: string
  price: string
  image: string
  category: string
  purchaseLink: string
}

interface SimilarProductsProps {
  products: SimilarProduct[]
}

export const SimilarProducts = ({ products }: SimilarProductsProps) => {
  return (
    <section className='mt-20'>
      <div className='text-center mb-8'>
        <TypographyH2 className='text-2xl mb-3'>Похожие товары</TypographyH2>
        <TypographyP>Вам также может понравиться</TypographyP>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            furType={product.furType}
            price={product.price}
            image={product.image}
            category={product.category}
            purchaseLink={product.purchaseLink}
            imageHeight='h-80'
            contentPadding='p-3'
            textSize='text-base'
          />
        ))}
      </div>
    </section>
  )
}
