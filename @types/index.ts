export interface IProduct {
  name: string
  furType: string[]
  additionalMaterial: string | null
  price: string
  category: string
  images: string[]
  description: string
  details: {
    material: string
    lining: string | null
    origin: string
    sizes: string
    colors: string[]
    care: string
  }
  features: string[]
  purchaseLink: string
}
