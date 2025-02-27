import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Tokens",
      credentials: {
        accessToken: { label: "Access Token", type: "text" },
        refreshToken: { label: "Refresh Token", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.accessToken || !credentials?.refreshToken) {
          return null;
        }

        try {
          const userValidation = await validateTokens({
            accessToken: credentials.accessToken,
            refreshToken: credentials.refreshToken,
          });

          if (userValidation) {
            return {
              id: userValidation.userId,
              name: userValidation.username,
              accessToken: credentials.accessToken,
              refreshToken: credentials.refreshToken,
            };
          }

          return null;
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
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken;
        token.refreshToken = (user as any).refreshToken;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub,
        },
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
      };
    },
  },
};

async function validateTokens({
  accessToken,
  refreshToken,
}: {
  accessToken: string;
  refreshToken: string;
}) {
  const response = await fetch(
    process.env.NEXT_PUBLIC_API_URL + "/api/Account/refreshTokens",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ accessToken, refreshToken }),
    }
  );

  if (response.ok) {
    const userData = await response.json();
    console.log(userData);
    return userData;
  }

  return null;
}
