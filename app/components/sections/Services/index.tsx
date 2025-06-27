import {TypographyH2, TypographyH3, TypographyP} from "@/components/ui/typography";
import {Card, CardContent} from "@/components/ui/card";
import {ConsultationForm} from "@/app/components/forms";

export const ServicesSection = () => {
  return <section id="services" className="py-16 bg-stone-100">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <TypographyH2 className="mb-4">Наши услуги</TypographyH2>
        <TypographyP className="text-2xl">Полный спектр услуг для наших клиентов</TypographyP>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <Card className="bg-white border-stone-200 shadow-sm h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <TypographyH3 className="mb-4">Персональная примерка</TypographyH3>
            <TypographyP className="mb-6 flex-grow text-2xl">
              Индивидуальная примерка в комфортной обстановке нашего салона
            </TypographyP>
            <div className="mt-auto">
              <ConsultationForm buttonText="Записаться"/>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-stone-200 shadow-sm h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <TypographyH3 className="mb-4">Консультация стилиста</TypographyH3>
            <TypographyP className="mb-6 flex-grow text-2xl">Профессиональная помощь в выборе идеальной
              модели</TypographyP>
            <div className="mt-auto">
              <ConsultationForm buttonText="Консультация"/>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-stone-200 shadow-sm h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <TypographyH3 className="mb-4">Индивидуальный пошив</TypographyH3>
            <TypographyP className="mb-6 flex-grow text-2xl">
              Создание уникальной шубы по вашим размерам и пожеланиям
            </TypographyP>
            <div className="mt-auto">
              <ConsultationForm buttonText="Узнать больше"/>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>;
}
