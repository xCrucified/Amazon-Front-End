import { z } from "zod";

export const getLoginSchema = (requirePassword: boolean) =>
  z.object({
    credential: z
      .string()
      .trim()
      .refine((value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || /^[0-9]{9}$/.test(value), {
        message: "Please enter a valid email or phone number",
      }),
    password: requirePassword
      ? z.string().nonempty("Please enter password").trim()
      : z.string().trim().optional(),
  });

export const signUpSchema = z
  .object({
    credential: z.string().nonempty("Credential is required"),
    username: z.string().nonempty("Username is required"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    rPassword: z.string().nonempty("Repeat your password"),
  })
  .superRefine(async (data, ctx) => {
    if (data.password !== data.rPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Passwords do not match",
        path: ["rPassword"],
      });
    }

    const { credential } = data;
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credential);
    const apiUrl = isEmail ? "api/check/email" : "api/check/phoneNumber";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credential),
      });
      const result = await response.json();

      if (result.error) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Connection error",
          path: ["credential"],
        });
      } else if (result.exists === true) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Credential already exists",
          path: ["credential"],
        });
      }
    } catch (e) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Connection error",
        path: ["credential"],
      });
    }
  });