import { z } from "zod";

export const cardSchema = z.object({
  name: z.string().min(1, "Card name is required"),
  cardNumber: z.string().regex(/^[0-9]{13,19}$/, "Invalid card number format"),
  cardHolder: z.string().min(1, "Card Name name is required"),
  expiry: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiry must be in MM/YY format"),
  cardType: z.enum(["visa", "mastercard"], {
    required_error: "Card type is required",
    invalid_type_error: "Card type must be either 'visa' or 'mastercard'",
  }),
  cvv: z.string().regex(/^[0-9]{3}$/, "CVV must be exactly 3 digits"),
});
