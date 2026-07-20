import { NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

function validate(payload: ContactPayload) {
  const errors: Record<string, string> = {};

  if (!payload.name || payload.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }
  if (!payload.email || !EMAIL_REGEX.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!payload.subject || payload.subject.trim().length < 3) {
    errors.subject = "Please add a short subject.";
  }
  if (!payload.message || payload.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }

  return errors;
}

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const errors = validate(payload);

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
