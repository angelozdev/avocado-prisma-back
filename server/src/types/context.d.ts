import type { PrismaClient } from "@prisma/client";

export type Context = {
  orm: PrismaClient;
  user?: { name: string; id: number };
};
