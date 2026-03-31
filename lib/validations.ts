import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export const consultationSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  preferredContactMethod: z.enum(["email", "whatsapp", "phone"]).default("email"),
  serviceInterest: z.enum([
    "general",
    "relationship_clarity",
    "life_transitions",
    "decision_making",
    "emotional_wellbeing",
    "inner_stillness",
  ]).default("general"),
  message: z.string().optional(),
  honeypot: z.string().max(0, "Bot detected").optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type ConsultationFormData = z.infer<typeof consultationSchema>;
