import {Phone} from "lucide-react";

import {COMPANY_PHONE} from "@/shared/Address";

export const ShortAddress = () => {
  return (
    <address >
      <a href='tel:${COMPANY_PHONE}' className="flex items-center space-x-4">
      <Phone className="h-5 w-5 text-amber-700"/>
      <span className="text-stone-700 font-medium font-playfair text-lg">{COMPANY_PHONE}</span>
      </a>
    </address>
  )
}
