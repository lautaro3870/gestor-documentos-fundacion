import { PrismaClient } from "@prisma/client";

const globalFromPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalFromPrisma.prisma ||
  new PrismaClient({
    log: ["query"],
  });

if (process.env.NODE_ENV !== "production") globalFromPrisma.prisma;
