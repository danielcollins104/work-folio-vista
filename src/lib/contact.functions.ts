import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be under 255 characters"),
  topic: z.string().trim().max(120, "Topic must be under 120 characters").optional().default(""),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be under 2000 characters"),
});

export type ContactInput = z.infer<typeof contactSchema>;

const RECIPIENT = "danielcollins104@gmail.com";

export const sendContactInquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    const senderDomain = process.env["SENDER_DOMAIN"];
    if (!apiKey || !senderDomain) {
      // Email domain not configured yet — report a soft failure so the UI
      // can show a graceful fallback instead of a hard error.
      return { sent: false as const, reason: "email_not_configured" as const };
    }

    const escape = (value: string) =>
      value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

    const html = `
      <div style="font-family:Work Sans,Arial,sans-serif;background:#050a14;color:#e8eef7;padding:32px;border-radius:12px">
        <p style="font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#0ea5e9;margin:0 0 8px">Portfolio inquiry</p>
        <h1 style="font-family:Georgia,serif;font-size:28px;margin:0 0 24px">New message from ${escape(data.name)}</h1>
        <table style="font-size:14px;line-height:1.7;color:#b9c6da">
          <tr><td style="padding-right:16px;color:#0ea5e9">Name</td><td>${escape(data.name)}</td></tr>
          <tr><td style="padding-right:16px;color:#0ea5e9">Email</td><td>${escape(data.email)}</td></tr>
          ${data.topic ? `<tr><td style="padding-right:16px;color:#0ea5e9">Topic</td><td>${escape(data.topic)}</td></tr>` : ""}
        </table>
        <div style="margin-top:24px;padding:20px;border:1px solid rgba(255,255,255,.12);border-radius:8px;font-size:15px;line-height:1.7;white-space:pre-wrap">${escape(data.message)}</div>
        <p style="margin-top:24px;font-size:12px;color:#6b7a90">Sent from the contact form on your portfolio. Reply directly to ${escape(data.email)}.</p>
      </div>`;

    const { sendLovableEmail } = await import("@lovable.dev/email-js");
    const result = await sendLovableEmail(
      {
        from: `Portfolio <contact@${senderDomain}>`,
        sender_domain: senderDomain,
        to: RECIPIENT,
        reply_to: data.email,
        subject: `Portfolio inquiry from ${data.name}`,
        html,
        text: `New portfolio inquiry\n\nName: ${data.name}\nEmail: ${data.email}${data.topic ? `\nTopic: ${data.topic}` : ""}\n\n${data.message}`,
        purpose: "transactional",
        label: "contact-form",
        idempotency_key: `contact-${data.email}-${data.message.length}-${Date.now()}`,
      },
      { apiKey },
    );

    if (!result.success) return { sent: false as const, reason: result.status ?? "send_failed" };
    return { sent: true as const };
  });
