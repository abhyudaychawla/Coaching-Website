/**
 * Database connectivity & CRUD test for Neon/Prisma.
 * Run with: npx tsx scripts/db-test.ts
 * Cleans up all inserted rows after each test.
 */

import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

// ---------------------------------------------------------------------------
// Bootstrap — mirrors lib/prisma.ts but always uses DATABASE_URL
// ---------------------------------------------------------------------------

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  console.error("❌  DATABASE_URL is not set");
  process.exit(1);
}

const pool = new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
  max: 3,
  connectionTimeoutMillis: 5000,
  idleTimeoutMillis: 10000,
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

let passed = 0;
let failed = 0;

async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    console.log(`  ✅  ${name}`);
    passed++;
  } catch (err) {
    console.error(`  ❌  ${name}`);
    console.error(`     ${(err as Error).message}`);
    failed++;
  }
}

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

async function run() {
  console.log("\n🔌  Testing Neon database connection & CRUD…\n");

  // --- Connection ping ---
  await test("Raw SQL ping (SELECT 1)", async () => {
    const result = await prisma.$queryRaw<[{ "?column?": number }]>`SELECT 1`;
    assert(result[0]["?column?"] === 1, "Expected 1");
  });

  // --- Lead ---
  let leadId: string | undefined;
  await test("Lead: create", async () => {
    const lead = await prisma.lead.create({
      data: {
        fullName: "__test__ Lead",
        email: "__test__@example.com",
        serviceInterest: "life",
      },
    });
    assert(!!lead.id, "No id returned");
    leadId = lead.id;
  });

  await test("Lead: read", async () => {
    const lead = await prisma.lead.findUnique({ where: { id: leadId! } });
    assert(lead?.email === "__test__@example.com", "Email mismatch");
  });

  await test("Lead: update", async () => {
    const lead = await prisma.lead.update({
      where: { id: leadId! },
      data: { status: "contacted" },
    });
    assert(lead.status === "contacted", "Status not updated");
  });

  await test("Lead: delete", async () => {
    await prisma.lead.delete({ where: { id: leadId! } });
    const gone = await prisma.lead.findUnique({ where: { id: leadId! } });
    assert(gone === null, "Row still exists after delete");
  });

  // --- ContactMessage ---
  let msgId: string | undefined;
  await test("ContactMessage: create", async () => {
    const msg = await prisma.contactMessage.create({
      data: {
        fullName: "__test__ Contact",
        email: "__test__@example.com",
        subject: "Test subject",
        message: "Test body",
      },
    });
    assert(!!msg.id, "No id returned");
    msgId = msg.id;
  });

  await test("ContactMessage: read + status default", async () => {
    const msg = await prisma.contactMessage.findUnique({ where: { id: msgId! } });
    assert(msg?.status === "unread", `Expected 'unread', got '${msg?.status}'`);
  });

  await test("ContactMessage: delete", async () => {
    await prisma.contactMessage.delete({ where: { id: msgId! } });
  });

  // --- BookingRequest ---
  let bookingId: string | undefined;
  await test("BookingRequest: create", async () => {
    const booking = await prisma.bookingRequest.create({
      data: {
        fullName: "__test__ Booking",
        email: "__test__@example.com",
        serviceInterest: "business",
        preferredTime: "morning",
      },
    });
    assert(!!booking.id, "No id returned");
    bookingId = booking.id;
  });

  await test("BookingRequest: status default is 'pending'", async () => {
    const booking = await prisma.bookingRequest.findUnique({ where: { id: bookingId! } });
    assert(booking?.status === "pending", `Expected 'pending', got '${booking?.status}'`);
  });

  await test("BookingRequest: delete", async () => {
    await prisma.bookingRequest.delete({ where: { id: bookingId! } });
  });

  // --- Testimonial ---
  let testimonialId: string | undefined;
  await test("Testimonial: create", async () => {
    const t = await prisma.testimonial.create({
      data: {
        quote: "Test quote",
        author: "__test__ Author",
        category: "life",
      },
    });
    assert(!!t.id, "No id returned");
    testimonialId = t.id;
  });

  await test("Testimonial: featured defaults to false", async () => {
    const t = await prisma.testimonial.findUnique({ where: { id: testimonialId! } });
    assert(t?.featured === false, "featured should default to false");
    assert(t?.approved === false, "approved should default to false");
  });

  await test("Testimonial: delete", async () => {
    await prisma.testimonial.delete({ where: { id: testimonialId! } });
  });

  // --- AutoReplyLog ---
  let logId: string | undefined;
  await test("AutoReplyLog: create", async () => {
    const log = await prisma.autoReplyLog.create({
      data: {
        recipient: "__test__@example.com",
        type: "booking_confirmation",
        subject: "Test reply",
        status: "sent",
      },
    });
    assert(!!log.id, "No id returned");
    logId = log.id;
  });

  await test("AutoReplyLog: delete", async () => {
    await prisma.autoReplyLog.delete({ where: { id: logId! } });
  });

  // --- AdminUser ---
  let adminId: string | undefined;
  await test("AdminUser: create", async () => {
    const admin = await prisma.adminUser.create({
      data: {
        email: "__test__admin@example.com",
        passwordHash: "hashed_value",
        name: "Test Admin",
      },
    });
    assert(!!admin.id, "No id returned");
    adminId = admin.id;
  });

  await test("AdminUser: unique email constraint", async () => {
    let threw = false;
    try {
      await prisma.adminUser.create({
        data: { email: "__test__admin@example.com", passwordHash: "x" },
      });
    } catch {
      threw = true;
    }
    assert(threw, "Should have thrown on duplicate email");
  });

  await test("AdminUser: delete", async () => {
    await prisma.adminUser.delete({ where: { id: adminId! } });
  });

  // ---------------------------------------------------------------------------
  // Summary
  // ---------------------------------------------------------------------------
  console.log(`\n${"─".repeat(45)}`);
  console.log(`  Results: ${passed} passed, ${failed} failed`);
  if (failed === 0) {
    console.log("  🎉  All tests passed — Neon DB is healthy!\n");
  } else {
    console.log("  ⚠️   Some tests failed — see errors above.\n");
  }

  await prisma.$disconnect();
  await pool.end();
  process.exit(failed > 0 ? 1 : 0);
}

run().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
