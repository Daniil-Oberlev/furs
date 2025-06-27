import {z} from "zod";

import {COUNTRY_CODE, PHONE_LENGTH} from "./constants";

export const phoneSchema = z
  .string()
  .transform(val => val.replace(/\D/g, ""))
  .refine(val => val.length === 0 || val.startsWith(COUNTRY_CODE), {
    message: "Phone number must start with +7",
  })
  .refine(val => val.length === 0 || val.length === PHONE_LENGTH, {
    message: "Phone number must contain 11 digits",
  });