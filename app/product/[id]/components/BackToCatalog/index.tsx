import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowLeft} from "lucide-react";
import type React from "react";

export const BackToCatalog = () => {
  return (
    <div className="mt-8 text-center">
      <Link href="/catalog">
        <Button
          variant="outline"
          className="border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-stone-100 px-6 py-3"
        >
          <ArrowLeft className="h-4 w-4 mr-2"/>
          Вернуться к каталогу
        </Button>
      </Link>
    </div>
  )
}
