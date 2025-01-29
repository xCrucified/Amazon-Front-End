import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;
