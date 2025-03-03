import { z } from "zod";

export const addressSchema = z.object({
  name: z.string().nonempty("Address name must contain at least 1 character"),
  fullname: z.string().nonempty("Enter your full name"),
  phoneNumber: z
    .string()
    .nonempty("Enter phone number")
    .regex(/^\+?[0-9]{10,15}$/, "Invalid phone number format"),
  country: z.string().refine((val) => val !== "select", { message: "Select country / region" }),
  city: z.string().nonempty("Enter city"),
  postalCode: z
    .string()
    .nonempty("Enter postal code")
    .regex(/^[A-Za-z0-9\- ]{3,10}$/, "Enter a valid postal code"),
  street: z.string().nonempty("Enter street"),
  building: z.string().nonempty("Enter apt / suite / unit / building"),
  makeDefault: z.boolean().optional(),
});
