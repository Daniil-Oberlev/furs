import Link from "next/link";

import {ArrowLeft} from "lucide-react";

import {Button} from "@/components/ui/button";

interface IButton {
  link: string
  text: string
  color: 'primary' | 'secondary'
}

export const BackToHome = () => {
  return (
    <div className="text-center">
      <Link href="/">
      <Button
        variant="outline"
    className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-stone-100 px-6 py-3 text-base font-inter font-medium"
    >
    <ArrowLeft className="h-4 w-4 mr-2"/>
      Вернуться на главную
    </Button>
    </Link>
  </div>
)
}
