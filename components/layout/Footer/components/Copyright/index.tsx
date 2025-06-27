import {TypographySmall} from "@/components/ui/typography"

import {COMPANY_NAME} from "@/shared/Address";

import {getCurrentYear} from "./utils"

export const Copyright = () => {
  return (
    <div className="border-t border-amber-600/20 mt-8 pt-8 text-center text-stone-400 text-sm font-inter">
      <TypographySmall className="text-stone-400 text-center">
        &copy; {getCurrentYear()} {COMPANY_NAME}. Все права защищены.
      </TypographySmall>
    </div>
  )
}