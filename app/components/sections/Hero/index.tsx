import {TypographyH1, TypographyLead} from "@/components/ui/typography";
import {ConsultationForm} from "../../forms";
import Link from "next/link";
import {Button} from "@/components/ui/button"

export const HeroSection = () => {
  return <section className="py-20 bg-gradient-to-b from-stone-200 to-stone-100">
    <div className="container mx-auto px-4 text-center">
      <TypographyH1 className="mb-6">Эксклюзивные шубы</TypographyH1>
      <TypographyLead className="mb-8 max-w-2xl mx-auto">
        Роскошные меховые изделия из натурального меха высочайшего качества. Индивидуальный подход к каждому
        клиенту.
      </TypographyLead>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ConsultationForm buttonText="Записаться на примерку"/>
        <Link href="/catalog">
          <Button
            variant="outline"
            size="lg"
            className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-stone-100 px-8 py-3 font-inter text-base"
          >
            Посмотреть каталог
          </Button>
        </Link>
      </div>
    </div>
  </section>;
}
