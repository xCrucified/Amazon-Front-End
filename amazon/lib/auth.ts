import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode";

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    refreshToken?: string;
    user: {
      id?: string;
      email?: string;
      phoneNumber?: string;
      username?: string;
      dateOfBirth?: string;
    };
  }

  interface User {
    accessToken?: string;
    refreshToken?: string;
    id?: string;
    email?: string;
    phoneNumber?: string;
    username?: string;
    dateOfBirth?: string;
  }
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        credential: { label: "Credential", type: "text" },
        password: { label: "Password", type: "text" },
      },
      async authorize(credentials) {
        const { credential, password } = credentials || {};
        if (!credential || !password) return null;

        try {
          const baseUrl = "http://localhost:3000";
          const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credential);
          const endpoint = isEmail ? "api/login/email" : "api/login/phoneNumber";
          const response = await fetch(`${baseUrl}/${endpoint}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ credential, password }),
          });
          if (!response.ok) {
            console.error("Authentication failed with status:", response.status);
            return null;
          }
          const data = await response.json();
          if (!data?.accessToken || !data?.refreshToken) {
            console.error("Incomplete token information received:", data);
            return null;
          }
          const decData = jwtDecode<any>(data.accessToken);
          return {
            id: decData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"],
            email: decData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"],
            phoneNumber:
              decData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/phonenumber"],
            username: decData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"],
            dateOfBirth:
              decData["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/dateofbirth"],
            exp: decData.exp,
            iss: decData.iss,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
        } catch (error) {
          console.error("Token validation error:", error);
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.refreshToken = token.refreshToken as string;
      session.user = {
        id: token.id as string,
        email: token.email as string,
        phoneNumber: token.phoneNumber as string,
        username: token.username as string,
        dateOfBirth: token.dateOfBirth as string,
      };
      console.log("session: ", session.user);      
      return session;
    },
  },
};
