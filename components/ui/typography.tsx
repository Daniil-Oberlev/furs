import type React from "react"

import {cn} from "@/lib/utils"

interface TypographyProps {
  children: React.ReactNode
  className?: string
}

export function TypographyH1({children, className}: TypographyProps) {
  return (
    <h1 className={cn("text-5xl md:text-6xl font-playfair font-light text-stone-800 leading-tight", className)}>
      {children}
    </h1>
  )
}

export function TypographyH2({children, className}: TypographyProps) {
  return <h2 className={cn("text-4xl font-playfair font-light text-stone-800", className)}>{children}</h2>
}

export function TypographyH3({children, className}: TypographyProps) {
  return <h3 className={cn("text-3xl font-playfair font-medium text-stone-800", className)}>{children}</h3>
}

export function TypographyH4({children, className}: TypographyProps) {
  return <h4 className={cn("text-xl font-playfair font-medium text-stone-800", className)}>{children}</h4>
}

export function TypographyP({children, className}: TypographyProps) {
  return <p className={cn("text-2xl font-cormorant text-stone-600 leading-relaxed", className)}>{children}</p>
}

export function TypographyLead({children, className}: TypographyProps) {
  return <p className={cn("text-xl font-cormorant font-semibold text-stone-600 leading-relaxed", className)}>{children}</p>
}

export function TypographySmall({children, className}: TypographyProps) {
  return <small className={cn("text-sm font-inter text-stone-500", className)}>{children}</small>
}
