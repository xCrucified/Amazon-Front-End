import { z } from "zod";

export const addressSchema = z.object({
  country: z.string().nonempty("Select country or region"),
  fullname: z.string().nonempty("Enter your full name"),
  phoneNumber: z
    .string()
    .nonempty("Enter phone number")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
  street: z.string().nonempty("Enter street"),
  building: z.string().nonempty("Enter apt/unit/building"),
  city: z.string().nonempty("Enter city"),
  territory: z.string().nonempty("Select territory"),
  postalCode: z.string().nonempty("Enter postal code"),
  makeDefault: z.boolean().optional(),
});
