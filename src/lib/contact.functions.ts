import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  projectType: z.string().min(1).max(80),
  budget: z.string().min(1).max(80),
  message: z.string().min(10).max(4000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["RESEND_API_KEY"];
    const to = "hello@subhrajit.pro";

    const body = [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Project type: ${data.projectType}`,
      `Budget: ${data.budget}`,
      "",
      data.message,
    ].join("\n");

    if (!apiKey) {
      console.info("[contact] no email provider configured\n" + body);
      return { ok: true as const, delivered: false as const };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio <onboarding@resend.dev>",
        to: [to],
        reply_to: data.email,
        subject: `New project enquiry — ${data.name}`,
        text: body,
      }),
    });

    if (!res.ok) {
      console.error("[contact] send failed", await res.text());
      return { ok: false as const, delivered: false as const };
    }

    return { ok: true as const, delivered: true as const };
  });
