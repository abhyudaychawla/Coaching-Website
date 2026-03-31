"use server";

import { sendAdminNotification, sendContactConfirmation } from "@/lib/email";
import { createContactMessageRecord } from "@/lib/inbox-store";
import { contactSchema } from "@/lib/validations";

export type ContactState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData
): Promise<ContactState> {
  const raw = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    subject: formData.get("subject") as string,
    message: formData.get("message") as string,
    honeypot: (formData.get("honeypot") as string) || "",
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [field, errors] of Object.entries(result.error.flatten().fieldErrors)) {
      fieldErrors[field] = errors as string[];
    }
    return { success: false, fieldErrors };
  }

  const data = result.data;

  try {
    const { storage } = await createContactMessageRecord({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      subject: data.subject,
      message: data.message,
    });

    try {
      await sendContactConfirmation(data.email, data.fullName);
      await sendAdminNotification("contact", {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "-",
        subject: data.subject,
        message: data.message,
        storage,
      });
    } catch (emailError) {
      console.error("Contact emails failed after persistence:", emailError);
    }

    return { success: true };
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, error: "Something went wrong. Please try again or contact us directly." };
  }
}
