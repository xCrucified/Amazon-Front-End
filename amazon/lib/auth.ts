import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";

export const authConfig: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
};

export async function hashPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}
