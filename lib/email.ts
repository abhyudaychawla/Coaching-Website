import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const FROM_NAME = "Anjali Raj Coaching";
const FROM_EMAIL = process.env.SMTP_FROM || process.env.SMTP_USER || "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || FROM_EMAIL;

export async function sendContactConfirmation(to: string, name: string) {
  await transporter.sendMail({
    from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
    to,
    subject: "Your message has been received — Anjali Raj Coaching",
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #faf8f5; color: #162040;">
        <div style="text-align: center; margin-bottom: 32px;">
          <p style="font-family: 'Great Vibes', cursive; font-size: 28px; color: #c9a96e; margin: 0;">Anjali Raj</p>
          <p style="font-size: 12px; letter-spacing: 2px; color: #666; margin: 4px 0 0;">CHANGE & CLARITY COACHING</p>
        </div>
        <div style="border-top: 1px solid #e8d4b0; padding-top: 32px;">
          <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px;">Dear ${name},</p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 16px;">
            Thank you for reaching out. Your message has been received, and I will be in touch with you shortly.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 16px;">
            If you'd like to speak sooner, you're welcome to WhatsApp or call at
            <strong style="color: #162040;">+91 98181 24212</strong>.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 32px;">
            With warmth,
          </p>
          <p style="font-size: 16px; color: #c9a96e; font-style: italic; margin-bottom: 4px;">Anjali Raj</p>
          <p style="font-size: 12px; color: #888; letter-spacing: 1px;">Change & Clarity Coach</p>
        </div>
        <div style="border-top: 1px solid #e8d4b0; margin-top: 32px; padding-top: 20px; text-align: center;">
          <p style="font-size: 11px; color: #999;">This is a confidential and safe space. Your information is never shared.</p>
        </div>
      </div>
    `,
  });
}

export async function sendConsultationConfirmation(to: string, name: string) {
  await transporter.sendMail({
    from: `"${FROM_NAME}" <${FROM_EMAIL}>`,
    to,
    subject: "Your consultation request — Anjali Raj Coaching",
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: #faf8f5; color: #162040;">
        <div style="text-align: center; margin-bottom: 32px;">
          <p style="font-family: 'Great Vibes', cursive; font-size: 28px; color: #c9a96e; margin: 0;">Anjali Raj</p>
          <p style="font-size: 12px; letter-spacing: 2px; color: #666; margin: 4px 0 0;">CHANGE & CLARITY COACHING</p>
        </div>
        <div style="border-top: 1px solid #e8d4b0; padding-top: 32px;">
          <p style="font-size: 18px; line-height: 1.6; margin-bottom: 16px;">Dear ${name},</p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 16px;">
            Thank you for taking this first step. Your consultation request has been received, and I will reach out within 24–48 hours to schedule your complimentary 15-minute exploratory conversation.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 16px;">
            This is a relaxed, confidential conversation — no pressure, no agenda. Simply a space to explore whether coaching might be the right support for where you are right now.
          </p>
          <p style="font-size: 15px; line-height: 1.8; color: #333; margin-bottom: 32px;">
            You can also reach me directly on WhatsApp: <strong style="color: #162040;">+91 98181 24212</strong>
          </p>
          <p style="font-size: 16px; color: #c9a96e; font-style: italic; margin-bottom: 4px;">Anjali Raj</p>
          <p style="font-size: 12px; color: #888; letter-spacing: 1px;">Change & Clarity Coach</p>
        </div>
      </div>
    `,
  });
}

export async function sendAdminNotification(
  type: "contact" | "consultation",
  data: Record<string, string>
) {
  const subject =
    type === "contact"
      ? `New Contact Message from ${data.fullName}`
      : `New Consultation Request from ${data.fullName}`;

  const rows = Object.entries(data)
    .filter(([k]) => k !== "honeypot")
    .map(
      ([key, val]) =>
        `<tr><td style="padding: 8px; color: #666; width: 140px; font-size: 13px;">${key}</td><td style="padding: 8px; font-size: 13px; color: #162040;">${val}</td></tr>`
    )
    .join("");

  await transporter.sendMail({
    from: `"${FROM_NAME} Admin" <${FROM_EMAIL}>`,
    to: ADMIN_EMAIL,
    subject,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 20px;">
        <h2 style="color: #162040; border-bottom: 2px solid #c9a96e; padding-bottom: 8px;">${subject}</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          ${rows}
        </table>
        <p style="margin-top: 24px; font-size: 12px; color: #999;">Received via coaching website contact form.</p>
      </div>
    `,
  });
}
