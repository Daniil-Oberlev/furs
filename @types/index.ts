export interface IProduct {
  name: string
  furType: string
  additionalMaterial: string
  price: string
  category: string
  images: string[]
  description: string
  details: {
    material: string
    lining: string
    origin: string
    sizes: string
    colors: string[]
    care: string
  }
  features: string[]
  purchaseLink: string
}