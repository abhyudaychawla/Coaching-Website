"use server";

import { sendAdminNotification, sendConsultationConfirmation } from "@/lib/email";
import { createLeadRecord } from "@/lib/inbox-store";
import { consultationSchema } from "@/lib/validations";

export type ConsultationState = {
  success: boolean;
  error?: string;
  fieldErrors?: Record<string, string[]>;
};

export async function submitConsultation(
  _prev: ConsultationState,
  formData: FormData
): Promise<ConsultationState> {
  const raw = {
    fullName: formData.get("fullName") as string,
    email: formData.get("email") as string,
    phone: (formData.get("phone") as string) || undefined,
    preferredContactMethod: (formData.get("preferredContactMethod") as string) || "email",
    serviceInterest: (formData.get("serviceInterest") as string) || "general",
    message: (formData.get("message") as string) || undefined,
    honeypot: (formData.get("honeypot") as string) || "",
  };

  const result = consultationSchema.safeParse(raw);
  if (!result.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [field, errors] of Object.entries(result.error.flatten().fieldErrors)) {
      fieldErrors[field] = errors as string[];
    }
    return { success: false, fieldErrors };
  }

  const data = result.data;

  try {
    const { storage } = await createLeadRecord({
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      preferredContactMethod: data.preferredContactMethod,
      serviceInterest: data.serviceInterest,
      message: data.message,
    });

    try {
      await sendConsultationConfirmation(data.email, data.fullName);
      await sendAdminNotification("consultation", {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone || "-",
        preferredContactMethod: data.preferredContactMethod,
        serviceInterest: data.serviceInterest,
        message: data.message || "-",
        storage,
      });
    } catch (emailError) {
      console.error("Consultation emails failed after persistence:", emailError);
    }

    return { success: true };
  } catch (error) {
    console.error("Consultation form error:", error);
    return { success: false, error: "Something went wrong. Please try again or contact us directly." };
  }
}
