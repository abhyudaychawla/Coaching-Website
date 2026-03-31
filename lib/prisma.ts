import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

function createPrismaClient(): PrismaClient | null {
  // DIRECT_URL takes priority locally (more reliable for dev).
  // Vercel should use DATABASE_URL (pooler) via its environment variables.
  const connectionString = process.env.DIRECT_URL ?? process.env.DATABASE_URL;
  if (!connectionString) {
    return null;
  }

  try {
    const pool = new Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 3,
      connectionTimeoutMillis: 5000,  // fail fast if DB unreachable
      idleTimeoutMillis: 10000,
      query_timeout: 8000,            // kill hung queries after 8s
    });

    const adapter = new PrismaPg(pool);

    return new PrismaClient({ adapter });
  } catch {
    return null;
  }
}

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | null | undefined;
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const prisma = (globalForPrisma.prisma ?? createPrismaClient()) as PrismaClient;

// In dev, cache the client so hot-reload doesn't create new pools.
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
