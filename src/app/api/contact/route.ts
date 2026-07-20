import { NextResponse } from "next/server";
import { validateContactForm } from "@/lib/contactValidation";
import type { ContactFormValues } from "@/types";

export async function POST(request: Request) {
  let payload: Partial<ContactFormValues>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const errors = validateContactForm(payload);

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // NOTE: this is where a real transactional email provider would be wired in,
  // e.g. Resend, SendGrid or Nodemailer over SMTP, using the validated payload
  // below. For now the message is logged server-side so the form is fully
  // functional end-to-end and ready to connect to a provider.
  console.info("[contact] new message", {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
  });

  return NextResponse.json({ ok: true, message: "Message received." });
}
