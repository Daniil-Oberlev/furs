import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: number;
  name: string;
  furType: string;
  price: string;
  image: string;
  category: string;
  purchaseLink: string;
  imageHeight?: string;
  contentPadding?: string;
  textSize?: string;
  className?: string;
}

export function ProductCard({
                              id,
                              name,
                              furType,
                              price,
                              image,
                              category,
                              purchaseLink,
                              imageHeight = "h-96",
                              contentPadding = "p-6",
                              textSize = "text-lg",
                              className,
                            }: ProductCardProps) {
  return (
    <Link href={`/product/${id}`} key={id} aria-label={`Перейти к продукту ${name}`}>
      <Card
        className={cn(
          "bg-white border-stone-200 hover:border-amber-600/40 transition-all duration-300 group shadow-sm hover:shadow-md cursor-pointer",
          className
        )}
      >
        <div className="relative overflow-hidden bg-white">
          <Badge className="absolute top-3 left-3 z-10 bg-amber-700 text-stone-100 text-sm font-cormorant px-3 py-1">
            {category}
          </Badge>
          <Image
            src={image}
            alt={name}
            width={400}
            height={500}
            className={cn("w-full object-contain group-hover:scale-105 transition-transform duration-300", imageHeight)}
          />
        </div>
        <CardContent className={contentPadding}>
          <h3
            className={cn(
              "font-medium text-stone-800 mb-1 leading-tight font-cormorant",
              textSize
            )}
          >
            {name}
          </h3>
          <p className="text-sm text-stone-500 mb-3 font-inter">{furType}</p>
          <div className="flex items-center justify-between gap-2">
            <span
              className={cn(
                "font-semibold text-amber-700 whitespace-nowrap flex-shrink-0 font-playfair",
                textSize
              )}
            >
              {price}
            </span>
            <Link href={purchaseLink} target="_blank" onClick={(e) => e.stopPropagation()}>
              <Button
                size="sm"
                className="bg-amber-700 hover:bg-amber-800 text-stone-100 px-3 py-2 text-base font-cormorant font-medium"
              >
                Купить
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}