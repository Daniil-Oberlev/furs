"use client"

import Link from "next/link"

import { TypographyH1, TypographyP } from "@/components/ui/typography"

import {BackToHome} from "@/components/ui/BackToHome";

import {ProductCard} from "@/components/ui/ProductCard";

import {productData} from '@/shared/Products'

export default function CatalogPage() {
  const products = Object.entries(productData).map(([id, product]) => ({
    id: Number(id),
    name: product.name,
    furType: product.furType,
    price: product.price,
    image: product.images[0],
    category: product.category,
    purchaseLink: product.purchaseLink,
  }));

  return (
    <div className="min-h-screen bg-stone-100">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-stone-600 mb-8 text-base font-inter">
          <Link href="/" className="hover:text-amber-700 transition-colors">
            Главная
          </Link>
          <span>/</span>
          <span className="text-amber-700">Каталог</span>
        </div>

        {/* Page Header */}
        <div className="text-center mb-12">
          <TypographyH1 className="mb-4">
            Полный каталог
          </TypographyH1>
          <TypographyP className=" max-w-2xl mx-auto">
            Вся наша коллекция эксклюзивных шуб из натурального меха высочайшего качества
          </TypographyP>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
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
        <BackToHome />
      </div>
    </div>
  );
}