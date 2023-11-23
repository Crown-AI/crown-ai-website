import { PrismaClient } from "@prisma/client";

declare const global: {
  prisma?: import("@prisma/client").PrismaClient;
  [key: string]: unknown;
};

let internalPrisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  internalPrisma = new PrismaClient();
} else {
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  internalPrisma = global.prisma;
}

export const prisma = internalPrisma;
