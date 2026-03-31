import { randomUUID } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { prisma } from "@/lib/prisma";

const STORE_PATH = path.join(process.cwd(), "data", "inbox.json");

export type LeadRecord = {
  id: string;
  fullName: string;
  email: string;
  phone: string | null;
  preferredContactMethod: string;
  serviceInterest: string;
  status: string;
  createdAt: Date;
};

export type ContactMessageRecord = {
  id: string;
  fullName: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: Date;
};

type StoredLead = Omit<LeadRecord, "createdAt"> & { createdAt: string };
type StoredMessage = Omit<ContactMessageRecord, "createdAt"> & { createdAt: string };

type InboxFile = {
  leads: StoredLead[];
  messages: StoredMessage[];
};

async function ensureStore() {
  await mkdir(path.dirname(STORE_PATH), { recursive: true });
}

async function readStore(): Promise<InboxFile> {
  await ensureStore();

  try {
    const raw = await readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<InboxFile>;

    return {
      leads: Array.isArray(parsed.leads) ? parsed.leads : [],
      messages: Array.isArray(parsed.messages) ? parsed.messages : [],
    };
  } catch (error) {
    const code = (error as NodeJS.ErrnoException).code;
    if (code === "ENOENT") {
      return { leads: [], messages: [] };
    }
    throw error;
  }
}

async function writeStore(data: InboxFile) {
  await ensureStore();
  await writeFile(STORE_PATH, JSON.stringify(data, null, 2), "utf8");
}

function toLeadRecord(lead: StoredLead): LeadRecord {
  return { ...lead, createdAt: new Date(lead.createdAt) };
}

function toMessageRecord(message: StoredMessage): ContactMessageRecord {
  return { ...message, createdAt: new Date(message.createdAt) };
}

export async function createLeadRecord(data: {
  fullName: string;
  email: string;
  phone?: string;
  preferredContactMethod: string;
  serviceInterest: string;
  message?: string;
}) {
  try {
    await prisma.lead.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        preferredContactMethod: data.preferredContactMethod,
        serviceInterest: data.serviceInterest,
        message: data.message,
        source: "consultation_form",
      },
    });

    return { storage: "database" as const };
  } catch (error) {
    console.error("Lead persistence fell back to local file storage:", error);

    const store = await readStore();
    store.leads.unshift({
      id: randomUUID(),
      fullName: data.fullName,
      email: data.email,
      phone: data.phone ?? null,
      preferredContactMethod: data.preferredContactMethod,
      serviceInterest: data.serviceInterest,
      status: "new",
      createdAt: new Date().toISOString(),
    });
    await writeStore(store);

    return { storage: "file" as const };
  }
}

export async function createContactMessageRecord(data: {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}) {
  try {
    await prisma.contactMessage.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        subject: data.subject,
        message: data.message,
      },
    });

    return { storage: "database" as const };
  } catch (error) {
    console.error("Contact persistence fell back to local file storage:", error);

    const store = await readStore();
    store.messages.unshift({
      id: randomUUID(),
      fullName: data.fullName,
      email: data.email,
      subject: data.subject,
      message: data.message,
      status: "unread",
      createdAt: new Date().toISOString(),
    });
    await writeStore(store);

    return { storage: "file" as const };
  }
}

export async function getAdminInboxData() {
  try {
    const [leads, messages] = await Promise.all([
      prisma.lead.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
      prisma.contactMessage.findMany({
        orderBy: { createdAt: "desc" },
        take: 50,
      }),
    ]);

    return {
      leads: leads as LeadRecord[],
      messages: messages as ContactMessageRecord[],
      storage: "database" as const,
      error: null,
    };
  } catch (error) {
    console.error("Admin dashboard fell back to local file storage:", error);

    const store = await readStore();

    return {
      leads: store.leads.map(toLeadRecord),
      messages: store.messages.map(toMessageRecord),
      storage: "file" as const,
      error:
        "Database connection is unavailable. Showing locally stored submissions so you can keep working.",
    };
  }
}
