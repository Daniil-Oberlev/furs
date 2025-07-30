import type { PropsWithChildren, ReactNode } from 'react'
import type React from 'react'

export interface NavItem {
  name: string
  url?: string
  action?: 'openContacts' | 'openMenu'
  onClick?: () => void
}

export interface ProductDetails {
  material: string
  lining: string | null
  origin: string
  sizes: string
  colors: string[]
  care: string
}

export interface Product {
  id: number
  name: string
  furType: string[]
  additionalMaterial: string | null
  price: string
  category: string
  images: string[]
  description: string
  details: ProductDetails
  features: string[]
  purchaseLink: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message?: string
}

export interface ConsultationFormData {
  name: string
  phone: string
  preferredDate?: string
  preferredTime?: string
  notes?: string
}

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export interface LoadingState {
  isLoading: boolean
  error: string | null
}

export type TLink = {
  href: string
  label: string
}

export type TImage = {
  src: string
  alt: string
}

export type TConsultationButton = PropsWithChildren<{
  variant?:
    | 'link'
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'amber'
    | 'amberOutline'
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'compact'
  className?: string
  asChild?: boolean
  onClick?: () => void
}>

export type TFloatingConsultationButton = {
  className?: string
}

export type TService = {
  title: string
  description: string
  icon: ReactNode
}

export type TProduct = {
  id: number
  name: string
  furType: string[]
  price: string
  images: TImage[]
  category: string
  purchaseLink: string
  description: string
  details: string[]
}
