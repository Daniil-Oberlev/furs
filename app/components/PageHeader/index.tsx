import {cn} from "@/lib/utils"

import {TypographyP, TypographyH1} from "@/components/ui/typography";

export const PageHeader = ({ title, description, children, className }: IPageHeader) => {
  return (
    <section className={cn("text-center pt-16 pb-16", className)}>
        <TypographyH1 className="mb-6">{title}</TypographyH1>
        <TypographyP className="mb-8 max-w-3xl mx-auto">{description}</TypographyP>
        {children}
    </section>
  )
}
